import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface Props {
  children: React.ReactNode
}

const LayoutToast: React.FC<Props> = ({children}) => {
  return (
    <>
      {
        children
      }
      <ToastContainer position='bottom-right' />
    </>
  )
}

export default LayoutToast