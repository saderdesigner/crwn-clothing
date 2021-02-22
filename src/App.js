import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const Hats = () => {
  return (
    <div>
      <h1>This is hats page</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={Hats} />
    </Switch>
  );
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
