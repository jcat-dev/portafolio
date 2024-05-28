import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import Routers from './routers/Routers'
import './global.css'
import 'react-toastify/dist/ReactToastify.min.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <>
    <Routers />
    <ToastContainer position='bottom-right' />
  </>
)