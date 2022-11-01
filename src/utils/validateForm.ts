import * as yup from 'yup';

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required("Email o usuario es obligatorio"),
  password: yup.string().trim().required("Contraseña obligatoria"),
})
