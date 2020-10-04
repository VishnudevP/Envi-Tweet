import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Login.css"
import { auth , provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [ state , dispatch] = useStateValue();

   const SignIn = () => {
   
    auth.signInWithPopup(provider).then(result => {

      dispatch({
        type : actionTypes.SET_USER ,
        user : result.user
      })

      console.log(result)
    }).catch((error) => alert(error.message));
   }

   const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

    return <div className="login">
             <div className="login__logo">
             <img className="etLogo" src="https://www.flaticon.com/svg/static/icons/svg/1598/1598431.svg" 
                alt="facebook logo" height="75px" width="100"
                />

               <StyledButton onClick={ SignIn} > Log In </StyledButton>
             </div>
           
        </div>
}

export default Login
