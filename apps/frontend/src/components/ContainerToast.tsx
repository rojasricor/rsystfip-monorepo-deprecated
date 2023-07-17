import { ToastContainer, Bounce } from "react-toastify";

function ContainerToast(): React.JSX.Element {
  return (
    <ToastContainer
      position={"top-right"}
      autoClose={3000}
      hideProgressBar
      newestOnTop
      transition={Bounce}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="dark"
    />
  );
}

export default ContainerToast;
