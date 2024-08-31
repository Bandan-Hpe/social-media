import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string()
    .matches(/^\d{10}$/, "Number should be 10 digits")
    .required("Mobile number is required"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  interests: Yup.array()
    .of(Yup.string())
    .min(7, "Select at least seven interest"),
});
