import { CardWrapper } from "./card-wrapper"

const LoginForm = () => {
 return (
   <CardWrapper
     headerLabel="Welcome back" 
     backButtonLabel="Don't have an account?" 
     backButtonHref="/auth/register"
     showSocial
   >
    <h3>Hello Formulaire</h3>
   </CardWrapper>
 )
}

export default LoginForm;
