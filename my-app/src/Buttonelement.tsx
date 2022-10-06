import React from "react";
import myHOC from "./myHOC";

class ButtonElement extends React.Component<any, any>{
   constructor(props: any){
       super(props)
   }
   render(){
       return(
           <div>
               <button onClick={this.props.inc}>Button clicked {this.props.cnt} times</button>
           </div>
       );
   }
}

export default myHOC(ButtonElement);