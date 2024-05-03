import { createRoot } from 'react-dom/client'
import Routers from './routers/Routers'
import LayoutToast from './layout/LayoutToast'
import './global.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <LayoutToast>
    <Routers />
  </LayoutToast>
)