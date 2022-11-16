import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'minimo 4 letras')
        .max(8, 'maximo 8 letras')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').max(8, 'Maximo 8 caracteres'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirm is required'),
});
