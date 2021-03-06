import React from 'react'
import {Switch,Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header-component'
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      currentUser : 'null'
    }
  }

  unsubsribeFromAuth = null 

  componentDidMount()
  {
      this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth=>
      {
        if (userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => 
            {
            this.setState({ currentUser: 
              {
              id: snapShot.id,
              ...snapShot.data()
              }
              })

              console.log(this.state)
            });    
         
        }
        else{
          this.setState({currentUser: userAuth})
        }
      });
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render()
  {
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
       <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route path='/shop' component={ShopPage} /> 
         <Route path='/signin' component={SignInSignUp} /> 
      </Switch> 
      </div>
    )
  }
}

export default App;
