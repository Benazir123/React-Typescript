import { count } from "console";
import React from "react";

class ExampleOne extends React.Component<{message: string}, {count: number}>{
   state = {count: 0}
   increment = (amt: number) => {
      this.setState((state) => ({
        count: state.count + amt
      }));
   }

    render(){
        return(
            <div>
                <h1>{this.props.message}</h1>
                <button onClick={() => this.increment(1)}>{this.state.count}</button>
                <p>Here we declare the message(React) as props into the component</p>
            </div>
        );
    }

}

export default ExampleOne;