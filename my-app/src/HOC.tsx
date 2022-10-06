import React from "react";
import Buttonelement from "./Buttonelement";
import HoverElement from "./HoverElement";

class HOC extends React.Component{
     constructor(props: any){
         super(props);
         this.state = {name:"React"}
     }

     render(){
         return(
             <>
                <Buttonelement />
                <HoverElement/>
             </>      
         );
     }
}

export default HOC;
