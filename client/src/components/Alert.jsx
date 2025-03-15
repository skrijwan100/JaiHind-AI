import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: 'top-center',
    style: { backgroundColor: '#2C3333', color: '#fff' } // Green background
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: 'top-center',
    style: { backgroundColor: '#2C3333', color: '#fff' } // Red background
  });
};
