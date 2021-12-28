import { SUCCESS_TOAST, FAILURE_TOAST } from './types/toast.types';

export const successToast = (feedback) => ({
  type: SUCCESS_TOAST,
  feedback,
});

export const failureToast = (error) => ({
  type: FAILURE_TOAST,
  error,
});
