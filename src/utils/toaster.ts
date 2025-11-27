/**
 * Utility functions to trigger toasts using the shadcn-vue useToast composable.
 * This centralizes the toast logic and provides simple interfaces for common toast types.
 */

function useToast() {
  return {
    toast: (opts: {
      title?: string
      description?: string
      variant?: string
      duration?: number
    }) => {
      // Placeholder implementation — replace with the real shadcn-vue useToast call in your app
      // e.g. import { useToast } from 'shadcn-vue' and return useToast();
      console.log('toast', opts)
    },
  }
}

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
