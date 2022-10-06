import React from "react";
import myHOC from "./myHOC";

class HoverElement extends React.Component<any, any>{
    constructor(props: any){
        super(props);
    }
    render(){
        return(
            <div>
                <h1 onMouseOver={this.props.inc}>Hover on {this.props.cnt} times</h1>
                <p>Here, we declare the props object and state object as any ---&gt; Generic</p>
            </div>
        );
    }
}

export default myHOC(HoverElement);