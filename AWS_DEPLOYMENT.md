# 🏛️ AWS Deployment Guide - PolicyLabs APSS

## 🎯 **AWS Deployment Options**

### **Option 1: AWS Amplify (Quick Start)**
- ⚡ **Fastest deployment**: 15 minutes
- 💰 **Cost**: $5-15/month
- 🎯 **Best for**: Frontend + API routes

### **Option 2: ECS Fargate (Production)**
- 🔧 **Full stack**: All services
- 💰 **Cost**: $30-80/month
- 🎯 **Best for**: Scalable production

### **Option 3: Infrastructure as Code (Enterprise)**
- 🏢 **Terraform**: Full automation
- 💰 **Cost**: $50-200/month
- 🎯 **Best for**: Enterprise/Government

---

## 🚀 **Option 1: AWS Amplify Deployment**

### Prerequisites
- AWS Account
- AWS CLI installed
- GitHub repository

### Steps

1. **Install AWS CLI & Amplify CLI:**
```bash
# Install AWS CLI
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /

# Configure AWS
aws configure

# Install Amplify CLI
npm install -g @aws-amplify/cli
```

2. **Initialize Amplify:**
```bash
# From project root
amplify init

# Follow prompts:
# - Project name: policylabs-apss
# - Environment: production
# - Default editor: Visual Studio Code
# - App type: javascript
# - Framework: react
# - Source Directory Path: frontend/src
# - Distribution Directory Path: frontend/.next
# - Build Command: npm run build
# - Start Command: npm start
```

3. **Add Hosting:**
```bash
amplify add hosting

# Choose:
# - Amazon CloudFront and S3
# - Website configuration
```

4. **Deploy:**
```bash
amplify publish
```

5. **Add Environment Variables:**
- Go to AWS Amplify Console
- Environment variables → Add:
  - `OPENAI_API_KEY`: Your OpenAI key
  - `NEXT_PUBLIC_APP_URL`: Your Amplify URL

**✅ Live at: `https://master.your-app-id.amplifyapp.com`**

---

## 🔧 **Option 2: ECS Fargate (Full Stack)**

### Prerequisites
- AWS Account with admin access
- Docker installed
- AWS CLI configured

### Services Architecture
```
Internet → ALB → ECS Fargate → RDS PostgreSQL
                          → ElastiCache Redis
                          → OpenSearch
```

### Steps

1. **Build and Push Images:**
```bash
# Create ECR repositories
aws ecr create-repository --repository-name policylabs-frontend
aws ecr create-repository --repository-name policylabs-backend

# Get login token
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ACCOUNT.dkr.ecr.us-east-1.amazonaws.com

# Build and push frontend
cd frontend
docker build -f Dockerfile.production -t policylabs-frontend .
docker tag policylabs-frontend:latest ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/policylabs-frontend:latest
docker push ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/policylabs-frontend:latest

# Build and push backend
cd ../backend
docker build -t policylabs-backend .
docker tag policylabs-backend:latest ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/policylabs-backend:latest
docker push ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/policylabs-backend:latest
```

2. **Create ECS Task Definition:**
```bash
# Update aws-ecs-task-definition.json with your account ID
# Then register the task definition
aws ecs register-task-definition --cli-input-json file://aws-ecs-task-definition.json
```

3. **Create ECS Service:**
```bash
aws ecs create-service \
  --cluster policylabs-cluster \
  --service-name policylabs-service \
  --task-definition policylabs-task \
  --desired-count 2 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxx,subnet-yyy],securityGroups=[sg-xxx],assignPublicIp=ENABLED}"
```

---

## 🏢 **Option 3: Terraform Infrastructure**

### Prerequisites
- Terraform installed
- AWS CLI configured
- Domain name (optional)

### Deploy Infrastructure
```bash
cd terraform

# Initialize Terraform
terraform init

# Plan deployment
terraform plan

# Deploy infrastructure
terraform apply

# Get outputs
terraform output alb_dns_name
```

### Post-Deployment
```bash
# Update DNS (if using custom domain)
# Point your domain to the ALB DNS name

# Deploy application
aws ecs update-service \
  --cluster policylabs-cluster \
  --service policylabs-service \
  --force-new-deployment
```

---

## 💰 **AWS Cost Estimates**

### **Amplify Option**
- **Amplify hosting**: $5-10/month
- **Lambda functions**: $2-5/month
- **Data transfer**: $1-3/month
- **Total**: ~$8-18/month

### **ECS Fargate Option**
- **Fargate tasks**: $20-40/month
- **RDS PostgreSQL**: $15-25/month
- **ElastiCache**: $10-15/month
- **Load Balancer**: $18/month
- **Data transfer**: $5-10/month
- **Total**: ~$68-108/month

### **Enterprise Option**
- **All above services**: $70-110/month
- **Additional services**: $20-50/month
- **Professional support**: $29/month
- **Total**: ~$119-189/month

---

## 🔐 **Security Best Practices**

### **Secrets Management**
```bash
# Store secrets in AWS Secrets Manager
aws secretsmanager create-secret \
  --name "policylabs/openai" \
  --description "OpenAI API Key for PolicyLabs" \
  --secret-string "your-openai-api-key"

aws secretsmanager create-secret \
  --name "policylabs/database" \
  --description "Database URL for PolicyLabs" \
  --secret-string "postgresql://user:pass@host:5432/db"
```

### **IAM Roles**
- Use least privilege principle
- Separate roles for each service
- Enable CloudTrail for auditing

### **Network Security**
- Private subnets for databases
- Security groups with minimal access
- WAF for additional protection

---

## 📊 **Monitoring & Logging**

### **CloudWatch Setup**
```bash
# Create log groups
aws logs create-log-group --log-group-name /ecs/policylabs-frontend
aws logs create-log-group --log-group-name /ecs/policylabs-backend

# Set up alarms
aws cloudwatch put-metric-alarm \
  --alarm-name "PolicyLabs-HighCPU" \
  --alarm-description "Alert when CPU exceeds 80%" \
  --metric-name CPUUtilization \
  --namespace AWS/ECS \
  --statistic Average \
  --period 300 \
  --threshold 80.0 \
  --comparison-operator GreaterThanThreshold
```

### **Application Insights**
- Enable X-Ray tracing
- Custom metrics for PolicyDNA™ usage
- Error tracking with CloudWatch Insights

---

## 🎯 **Recommendation for PolicyLabs**

**For Government/Municipal Use:**

1. **Start with Amplify** (quick demo/MVP)
2. **Scale to ECS Fargate** (production)
3. **Add enterprise features** as needed

**Why AWS for Government:**
- ✅ **Compliance**: FedRAMP, SOC 2, ISO 27001
- ✅ **Security**: Government cloud expertise
- ✅ **Scalability**: Handle all Brazilian municipalities
- ✅ **Reliability**: 99.99% uptime SLA
- ✅ **Support**: 24/7 enterprise support

**Next Steps:**
1. Choose your option above
2. Follow the deployment steps
3. Configure monitoring and backups
4. Set up custom domain
5. Enable SSL/TLS

**🚀 Ready to deploy on AWS? Which option would you like to start with?**