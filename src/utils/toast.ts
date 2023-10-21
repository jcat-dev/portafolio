import { toast, Id, TypeOptions } from 'react-toastify'

export const updateLoading = (id: Id, type: TypeOptions, msg?: string) => {
  const newMsg = type === 'success' ? 'La operación fue exitosa 👌' : 'Hubo un error inesperado 🤯'
  
  return toast.update(id, {
    render: msg ?? newMsg, 
    type, 
    isLoading: false,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true
  })
}

export const getToastLoading = () => {
  return toast.loading('Cargando...')
}

export const getToastInfo = (msg: string) => {
  return toast.info(msg)
}

export const getToastSuccess = (msg: string) => {
  return toast.success(msg)
}

export const getToastWarning = (msg: string) => {
  return toast.warning(msg)
}

export const getToastError= (msg: string) => {
  return toast.error(msg)
}