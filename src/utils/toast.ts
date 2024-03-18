import { toast, Id, TypeOptions } from 'react-toastify'

export const updateToastLoading = (id: Id, type: TypeOptions, msg?: string) => {  
  return toast.update(id, {
    render: msg ?? 'Oops, algo salió mal. Por favor, inténtalo de nuevo 🤯', 
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