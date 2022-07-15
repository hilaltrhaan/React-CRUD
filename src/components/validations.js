import * as yup from "yup"


const validations = yup.object().shape({

  email: yup.string().email('enter a valid email').required('required field'),
  password: yup.string().min(5, 'your password must be at least 5 characters').required('required field'),
  passwordConfirm: yup.string().oneOf([yup.ref("password")], 'passwords do not match').required('required field')
})

export default validations;