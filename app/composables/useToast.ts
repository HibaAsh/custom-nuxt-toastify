// composables/useToast.ts
import { toast, type ToastOptions } from 'vue3-toastify'

export const useCustomToast = () => {
  // Simple toasts
  const success = (message: string, options?: ToastOptions) => {
    return toast.success(message, options)
  }

  const error = (message: string, options?: ToastOptions) => {
    return toast.error(message, options)
  }

  const info = (message: string, options?: ToastOptions) => {
    return toast.info(message, options)
  }

  const warning = (message: string, options?: ToastOptions) => {
    return toast.warning(message, options)
  }

  // Custom content toasts
  const custom = (content: any, options?: ToastOptions) => {
    return toast(content, {
      icon: false,
      closeButton: false,
      ...options
    })
  }

  const loading = (message: string, options?: ToastOptions) => {
    return toast.loading(message, options)
  }

  // Toast management methods
  const clearAll = () => {
    toast.clearAll()
  }

  const dismiss = (toastId?: string | number) => {
    toast.remove(toastId)
  }

  const update = (toastId: string | number, options: ToastOptions) => {    
    toast.update(toastId, options)
  }

  const isActive = (toastId: string | number) => {
    return toast.isActive(toastId)
  }

  const done = (toastId: string | number) => {
    return toast.done(toastId)
  }

  return {
    // Toast creators
    success,
    error,
    info,
    warning,
    custom,
    loading,
    
    // Toast management
    clearAll,
    dismiss,
    update,
    isActive,

    done,
    
    // Aliases for convenience
    clear: clearAll,
    remove: dismiss
  }
}