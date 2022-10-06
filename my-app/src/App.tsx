import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Counter';
import Counter from './Counter';
import Hello from "./ListItem";
import ExampleOne from "./PropsandState";
import Header from './Header';
import Main from './Main';


// interface AppProps {}
// interface AppState {
//   name: string;
// }

class App extends Component{
  // state: { name: string; };
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     name: "React"
  //   };
  // }
  // render() {
  //   return (
  //     <div>
  //       <Hello />
  //     </div>
  //   );
  // }
  render(){
    return(
        <div>
            <Header />
            <hr />
            <Main />
        </div>
    );
  }
}

export default App;
