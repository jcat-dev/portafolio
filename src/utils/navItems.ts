export const navDev: NavItems = {
  items: [
    { title: 'PERFIL', link: '/api/profile' },
    { title: 'PROYECTOS', link: '/api/projects' },
    { title: 'HABILIDADES', link: '/api/skills'}
  ],
  extraLink: {
    link: '/profile',
    title: 'INICIO'
  }
}

export const navHome: NavItems = {
  items: [
    { title: 'PERFIL', link: 'profile'},
    { title: 'PROYECTOS', link: 'projects' },
    { title: 'HABILIDADES', link: 'skills' },
    { title: 'CONTACTO', link: 'contact' }
  ],
  extraLink: {
    link: '/api/profile',
    title: 'DEV'
  }
}