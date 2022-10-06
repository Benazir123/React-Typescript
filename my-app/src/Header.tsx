import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component{
     render(){
         return(
             <header>
              <nav>
                  <ul>
                      <li>
                        <Link to="/">Counter</Link> 
                      </li>
                      <li>
                        <Link to="listItem">ListItem</Link> 
                      </li>
                      <li>
                        <Link to="propsandstate">PropsandState</Link> 
                      </li>
                      <li>
                        <Link to="hoc">HOC</Link> 
                      </li>
                  </ul>
              </nav>
            </header>
         );
     }
}

export default Header;