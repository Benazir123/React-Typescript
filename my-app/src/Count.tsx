import React from "react";

interface Props{
    count: number;
}
export default class Count extends React.Component<any, any>{
    static defaultProps: Props = {
         count: 10
    };

    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
            </div>
        );
    }
    
}