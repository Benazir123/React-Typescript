import React from "react";

const myHOC = (MyComponent: any) => {
      class NewComponent extends React.Component<{}, {count: number }>{
          constructor(props: any){
              super(props);
              this.state = {count: 0}
          }
            incCounter = () => {
                this.setState({
                    count: this.state.count + 1
                })
            }
          render(){
              return(
                  <MyComponent cnt={this.state.count} inc={this.incCounter} />
              );
          }
      }
      return NewComponent;
};

export default myHOC;