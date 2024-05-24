import authList from './auth/authList'
import backendList from './backend/backendList'
import dbList from './db/dbList'
import frontendList from './frontend/frontendList'
import languageList from './language/languageList'
import testList from './test/testList'
import toolList from './tool/toolList'

interface SvgDictionary {
  [key: string]: string;
}

const svgs: SvgDictionary = {
  ...authList,
  ...backendList,
  ...dbList,
  ...frontendList,
  ...languageList,
  ...testList,
  ...toolList
}

export default svgs