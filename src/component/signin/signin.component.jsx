import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../button/custom-button-component'
import {signInWithGoogle} from '../../firebase/firebase.utils' 
import './signin.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

  handleSubmit = event => {
      event.preventDefault()

   this.setState({email:'', password:''})   
  }
  
  handleChange = event => {
      const {name,value} = event.target;

      this.setState({[name]:value})
  }
  
  render()
  {
    return (<div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={this.handleSubmit}>
        <FormInput 
        name='email'
        type="email" 
        value={this.state.email} 
        required
        label='Email'
        handleChange={this.handleChange}/>
        {/* <label>Email</label> */}

        <FormInput 
        name='password' 
        type="password" 
        value={this.state.password} 
        required 
        label='Password'
        handleChange={this.handleChange}/>
        {/* <label>Password</label> */}
        <div className="buttons"> 
        <CustomButton type="Submit">Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
        </CustomButton>
        </div>
        
    </form>
    
    </div>)
  }
}

export default SignIn;