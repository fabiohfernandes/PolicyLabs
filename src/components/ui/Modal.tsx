import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import { Button } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  panelClassName?: string;
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  '2xl': 'max-w-6xl',
  full: 'max-w-full mx-4',
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className,
  panelClassName,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeOnOverlayClick ? onClose : () => {}}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal container */}
        <div className={cn('fixed inset-0 overflow-y-auto', className)}>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cn(
                  'w-full transform overflow-hidden rounded-2xl text-left align-middle transition-all',
                  'card-glass p-6 shadow-glass-xl',
                  sizeClasses[size],
                  panelClassName
                )}
              >
                {/* Header */}
                {(title || showCloseButton) && (
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      {title && (
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-semibold leading-6 text-secondary-900 dark:text-secondary-100"
                        >
                          {title}
                        </Dialog.Title>
                      )}
                      {description && (
                        <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">
                          {description}
                        </p>
                      )}
                    </div>

                    {showCloseButton && (
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={onClose}
                        className="ml-4 flex-shrink-0 text-secondary-400 hover:text-secondary-600"
                        aria-label="Fechar modal"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="relative">
                  {children}
                </div>

                {/* Glassmorphic shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// Modal composition components
export function ModalHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

export function ModalBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('text-secondary-700 dark:text-secondary-300', className)}>
      {children}
    </div>
  );
}

export function ModalFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-6 flex justify-end space-x-3', className)}>
      {children}
    </div>
  );
}

// Preset modal variants
export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirmar ação',
  message = 'Tem certeza que deseja continuar?',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  variant = 'primary',
  loading = false,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'primary' | 'destructive' | 'warning';
  loading?: boolean;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" title={title}>
      <ModalBody>
        <p>{message}</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose} disabled={loading}>
          {cancelText}
        </Button>
        <Button
          variant={variant}
          onClick={onConfirm}
          loading={loading}
        >
          {confirmText}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export function AlertModal({
  isOpen,
  onClose,
  title = 'Atenção',
  message,
  type = 'info',
  buttonText = 'OK',
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  buttonText?: string;
}) {
  const iconMap = {
    info: (
      <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg className="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="h-6 w-6 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    error: (
      <svg className="h-6 w-6 text-error-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" title={title}>
      <ModalBody>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {iconMap[type]}
          </div>
          <p className="text-sm">{message}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose} variant="primary">
          {buttonText}
        </Button>
      </ModalFooter>
    </Modal>
  );
}