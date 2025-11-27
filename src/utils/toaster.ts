// src/utils/toaster.ts

import { useToast } from '@/components/ui/toast/use-toast'
import type { ToastAction } from '@/components/ui/toast' // Import the type for better safety

/**
 * Utility functions to trigger toasts using the shadcn-vue useToast composable.
 * This centralizes the toast logic and provides simple interfaces for common toast types.
 */

const { toast } = useToast()

/**
 * Displays a success toast notification.
 * @param title The main title of the toast.
 * @param description Optional detailed message.
 */
export function toastSuccess(title: string, description?: string) {
  toast({
    title: title,
    description: description,
    variant: 'default', // Typically 'default' or a custom success variant
    duration: 3000,
  })
}

/**
 * Displays an error toast notification.
 * @param title The main title of the toast (e.g., "Operation Failed").
 * @param description Optional detailed error message.
 * @param action Optional action button configuration.
 */
export function toastError(title: string, description?: string, action?: ToastAction) {
  toast({
    title: title,
    description: description,
    variant: 'destructive', // Uses the built-in destructive variant for errors
    duration: 5000, // Longer duration for errors
    action: action,
  })
}

/**
 * Displays an information or warning toast notification.
 * @param title The main title of the toast.
 * @param description Optional detailed message.
 */
export function toastInfo(title: string, description?: string) {
  toast({
    title: title,
    description: description,
    // Note: You might need a custom 'info' or 'warning' variant defined in your component setup
    variant: 'default',
    duration: 4000,
  })
}

// Example of a custom toast with an action button
export function toastWithAction(
  title: string,
  description: string,
  actionLabel: string,
  actionCallback: () => void,
) {
  toast({
    title: title,
    description: description,
    duration: 10000,
    action: {
      label: actionLabel,
      onClick: actionCallback,
    } as ToastAction, // Type assertion for safety
  })
}
