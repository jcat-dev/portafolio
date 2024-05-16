import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faServer } from '@fortawesome/free-solid-svg-icons/faServer'
import { faCode, faDatabase, faGears, faUserLock, faVial } from '@fortawesome/free-solid-svg-icons'
import { faDev } from '@fortawesome/free-brands-svg-icons'

interface Icons {
  title: string
  icon: IconProp
}

export const icons: Icons[] = [
  {
    title: 'AUTH',
    icon: faUserLock
  },
  {
    title: 'TEST',
    icon: faVial
  },
  {
    title: 'BASEDATO',
    icon: faDatabase
  },
  {
    title: 'FRONTEND',
    icon: faCode
  },
  {
    title: 'BACKEND',
    icon: faServer
  },
  {
    title: 'LENGUAJES',
    icon: faDev
  },
  {
    title: 'HERRAMIENTAS',
    icon: faGears
  }
]