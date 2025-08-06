import * as Yup from 'yup';

export const aboutYouSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dob: Yup.string().required('Date of birth is required'),
  personalPhone: Yup.string().required('Phone is required'),
  address1: Yup.string().required('Address is required'),
  permission: Yup.string().required('Permission is required'),
});
