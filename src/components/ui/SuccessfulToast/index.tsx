import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SuccessfulToast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="colored"
    />
  );
}
