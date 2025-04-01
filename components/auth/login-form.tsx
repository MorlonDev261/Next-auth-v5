import { CardWrapper } from "./card-wrapper"

const LoginForm = () => {
 return (
   <CardWrapper
     headerLabel="Welcome back" 
     backButtonLabel="Don't have an account?" 
     backButtonHref="/auth/register"
     showSocial
   >
   </CardWrapper>
 )
}

export default LoginForm;
