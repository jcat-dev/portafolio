import { Project, StackType } from '../../Types/Project'

const stackType: StackType = {
  name: 'Full Stack MERN',
  frontendSkills: ['JavaScript', 'React', 'HTML', 'CSS'],
  backendSkills: ['Node', 'Express', 'Mongoose', 'Node', 'Express', 'Mongoose', 'Node', 'Express', 'Mongoose', 'Node'],
  databaseSkills: ['MongoDB']
}

const todoApp: Project = {
  stackType,
  repository: 'https://github.com/jcat-dev/todo',
  pageName: 'Todo App',
  pageURL: 'https://todo-jec.vercel.app/',
  pageImg: 'https://drive.google.com/uc?id=19rtvPBgS2fe95Av1FaBuhaD0AyXbMrao',
  description: 'Mejora la productividad manteniendo un registro ordenado del día a día.'
}

export const proyectList = [
  todoApp,
  todoApp,
]