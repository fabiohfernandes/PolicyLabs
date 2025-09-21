# 🚀 PolicyLabs APSS - Deployment Guide

## 📋 Quick Deployment Options

### Option 1: Vercel (Frontend Only) - ⚡ Fastest
### Option 2: Railway (Full Stack) - 🔧 Complete
### Option 3: DigitalOcean (Production) - 🏢 Enterprise

---

## 🚀 Option 1: Deploy to Vercel (Recommended for Quick Start)

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- OpenAI API key

### Steps

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy from project root:**
```bash
vercel --prod
```

4. **Configure Environment Variables:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project → Settings → Environment Variables
   - Add the following:
     - `OPENAI_API_KEY`: Your OpenAI API key
     - `NEXT_PUBLIC_APP_URL`: Your Vercel app URL

5. **Custom Domain (Optional):**
   - Go to Domains tab in Vercel dashboard
   - Add your custom domain

**✅ Your site will be live at: `https://your-project.vercel.app`**

---

## 🔧 Option 2: Deploy to Railway (Full Stack)

### Prerequisites
- GitHub account
- Railway account
- OpenAI API key

### Steps

1. **Connect GitHub to Railway:**
   - Go to [Railway](https://railway.app)
   - Connect your GitHub repository

2. **Deploy Services:**
   - Railway will auto-detect your services
   - Add the following environment variables:
     - `OPENAI_API_KEY`: Your OpenAI API key
     - `POSTGRES_PASSWORD`: Secure password for database
     - `SECRET_KEY`: Secure secret key (256-bit)

3. **Database Setup:**
   - Railway will provision PostgreSQL automatically
   - Redis and other services will be auto-configured

**✅ Your full-stack app will be live with all services**

---

## 🏢 Option 3: DigitalOcean App Platform

### Prerequisites
- DigitalOcean account
- GitHub account
- OpenAI API key

### Steps

1. **Create App:**
   - Go to DigitalOcean → Apps → Create App
   - Connect your GitHub repository

2. **Configure Services:**
   - App will detect `docker-compose.production.yml`
   - Add environment variables in App settings

3. **Add Managed Database:**
   - Add PostgreSQL and Redis from DigitalOcean marketplace
   - Update DATABASE_URL and REDIS_URL

**✅ Production-ready deployment with managed services**

---

## 🔧 Local Production Testing

Before deploying, test the production build locally:

### Frontend Only
```bash
cd frontend
npm run build
npm start
```

### Full Stack
```bash
# Copy environment file
cp .env.production .env

# Update .env with your values
# Then run:
docker-compose -f docker-compose.production.yml up --build
```

---

## 🔐 Environment Variables Checklist

### Required for Frontend
- ✅ `OPENAI_API_KEY`: Your OpenAI API key
- ✅ `NEXT_PUBLIC_APP_URL`: Your app URL

### Required for Full Stack
- ✅ `OPENAI_API_KEY`: Your OpenAI API key
- ✅ `DATABASE_URL`: PostgreSQL connection string
- ✅ `REDIS_URL`: Redis connection string
- ✅ `SECRET_KEY`: Secure secret key (256-bit minimum)
- ✅ `POSTGRES_PASSWORD`: Database password

### Optional
- `NEXTAUTH_SECRET`: For authentication
- `SMTP_*`: For email notifications
- `AWS_*`: For file uploads
- `SENTRY_DSN`: For error monitoring

---

## 🛠️ Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### OpenAI API Issues
- Verify API key is correctly set
- Check API quota and billing
- Ensure environment variable name matches exactly

### Database Connection
- Verify DATABASE_URL format
- Check firewall and network settings
- Ensure database is running and accessible

---

## 📊 Monitoring & Maintenance

### Health Checks
- Frontend: `https://your-app.com` should load
- API: `https://your-app.com/api/chat` should respond
- Database: Check connection logs

### Performance
- Use Vercel Analytics for frontend metrics
- Monitor API response times
- Set up error tracking with Sentry

### Updates
```bash
git pull origin master
# Deploy updates through your chosen platform
```

---

## 🎯 Next Steps After Deployment

1. **Custom Domain**: Set up your domain (policylabs.com.br)
2. **SSL Certificate**: Ensure HTTPS is enabled
3. **Monitoring**: Set up uptime monitoring
4. **Backups**: Configure database backups
5. **CDN**: Use CDN for static assets
6. **Analytics**: Add Google Analytics or similar

---

**🚀 Ready to deploy? Choose your option and follow the steps above!**