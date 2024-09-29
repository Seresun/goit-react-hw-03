import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './ContactForm.module.css'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Must be at least 7 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
})

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number)
    resetForm()
  }

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default ContactForm
