import { Formik, Form } from "formik";
import { object, ref, string } from "yup";
import FormBtn from "../Form/FormButton";
import FormError from "../Form/FormError";
import FormInput from "../Form/FormInput";
import FormLabel from "../Form/FormLabel";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";
import InputContainer from "../Form/InputContainer";

const validationSchema = object({
  name: string().required(),
  surname: string().required(),
  email: string().email().required(),
  password: string().required(),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required(),
});

const RegisterForm: React.FC<{
  formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Registration</FormTitle>
        <InputContainer>
          <FormLabel htmlFor="name">Name*</FormLabel>
          <FormInput type="text" name="name" id="name" />
          <FormError name="name" />
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="email">E-mail*</FormLabel>
          <FormInput type="text" name="email" id="email" />
          <FormError name="email" />
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="password">Password*</FormLabel>
          <FormInput type="password" name="password" id="password" />
          <FormError name="password" />
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="repeatPassword">Repeat password*</FormLabel>
          <FormInput type="password" name="repeatPassword" id="repeatPassword" />
          <FormError name="repeatPassword" />
        </InputContainer>
        <FormBtn type="submit">Sign up</FormBtn>
        <FormTextLink onClick={() => formChangeHandler("login")}>
          Already have an account? Log in!
        </FormTextLink>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
