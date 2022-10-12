import React from "react";
import "./App.css";
import HouseKeeping from "./assets/housekeeping.png"

import { ImageMap } from "@qiuz/react-image-map";
import { AreaType } from "./AreaType";

const onMapClick = (area: AreaType, index: number) => {
  const tip = `click map${area.href || index + 1}`;
  console.log(tip);
  alert(tip);
};

const mapArea: any[] = [
  {
    left: "0%",
    top: "10%",
    right: "10%",
    height: "100%",
    width: "30%",
    onMouseOver: () => console.log("map onMouseOver, You hovered on the face")

  }
];

// in hooks 
class Example extends React.Component{
   constructor(props: {} | Readonly<{}>){
       super(props)
   }

   render(){
    const img = HouseKeeping;
    return(
        <>
         <ImageMap className="usage-map" src={img} map={mapArea} onMapClick={onMapClick} />
        </>
     );
   }
}

export default Example;
// export default function Example() {
//   const img = HouseKeeping;

//   const ImageMapComponent = React.useMemo(
//     () => (
//       <ImageMap
//         className="usage-map"
//         src={img}
//         map={mapArea}
//         onMapClick={onMapClick}
//       />
//     ),
//     [img]
//   );

//   return <div>{ImageMapComponent}</div>;
// }
