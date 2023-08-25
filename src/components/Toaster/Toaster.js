import toast from 'react-hot-toast';

const toastOptions = { position: 'top-right', duration: 1500 };

export const error = () =>
  toast.error(
    'Sorry, there are no results on your query request. Please, try again!',
    toastOptions
  );
export const success = () =>
  toast.success(
    'Hooray! We found images upon your query request!',
    toastOptions
  );

export const warning = () =>
  toast.error(
    'Please,enter valid value! Input field is empty or contains only spaces.',
    toastOptions
  );
