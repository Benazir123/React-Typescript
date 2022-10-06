import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import ListItem from "./ListItem";
import PropsandState from "./PropsandState";
import HOC from "./HOC";

class Main extends React.Component{
      render(){
          return(
              <main>
                  <Routes>
                      <Route path="/" element={<Counter />} />
                      <Route path="/listItem" element={<ListItem />} />
                      <Route path="/propsandState" element={<PropsandState message="React" />} />
                      <Route path="/hoc" element={<HOC />} />
                  </Routes>
              </main>
          );
      }
}

export default Main;