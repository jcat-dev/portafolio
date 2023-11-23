import { createRoot } from 'react-dom/client'
import Routers from './routers/Routers'
import './global.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Routers />
)