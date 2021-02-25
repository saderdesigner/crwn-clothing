import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscriptFromAuth = null;

  componentDidMount() {
    this.unsubscriptFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscriptFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

// rsf ----------------------------------------------------
// import React from 'react';

// function App(props) {
//   return (
//     <div>

//     </div>
//   );
// }

// export default App;
// --------------------------------------------------------

// rsc ----------------------------------------------------
// import React from 'react';

// const name = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default name;
// -------------------------------------------------------

// rcc ---------------------------------------------------
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default App;
