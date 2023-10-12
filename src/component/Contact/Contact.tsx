import FormikForm from './FormikForm'
import './index.css'

const Contact = () => { 
  return (
    <section 
      id="contacto" 
      className='contact-container'
    >
      <h2
        className='contact-title'
      >
        Contacto
      </h2>

      <FormikForm />
    </section>
  )
}

export default Contact