import React from "react";
import { ReactDOM } from "react";



var Counter = () => {

   
    let [displayCount0, setCount0] = React.useState(5);
    let [displayCount1, setCount1] = React.useState(10);
    let [displayCount2, setCount2] = React.useState(10);
    let [displayCount3, setCount3] = React.useState(15);


    function change0(val, num){
       setCount0((e) => e+val);
    }
    function change1(val, num){
        setCount1((e) => e+val);
     }
     function change2(val, num){
        setCount2((e) => e+val);
     }
     function change3(val, num){
        setCount3((e) => e+val);
     }


    return(
        <div className="counterBody">
            <div className="food">
            <div className="title">Potato</div>
         <div className="buttonContainer">
         <button onClick={() =>change0(1,0)}> + </button>
         <div className="remaining">{displayCount0}</div>
         <button onClick={() =>change0(-1,0)}> - </button>
         </div>
            </div>
         
            <div className="food">
            <div className="title">Tomatoes</div>
         <div className="buttonContainer">
         <button onClick={() =>change1(1,1)}> + </button>
         <div className="remaining">{displayCount1}</div>
         <button onClick={() =>change1(-1,1)}> - </button>
         </div>
            </div>

            <div className="food">
            <div className="title">Carrot</div>
         <div className="buttonContainer">
         <button onClick={() =>change2(1,2)}> + </button>
         <div className="remaining">{displayCount2}</div>
         <button onClick={() =>change2(-1,2)}> - </button>
         </div>
            </div>

            <div className="food">
            <div className="title">Onions</div>
         <div className="buttonContainer">
         <button onClick={() =>change3(1,3)}> + </button>
         <div className="remaining">{displayCount3}</div>
         <button onClick={() =>change3(-1,3)}> - </button>
         </div>
            </div>

          
         
        </div>
     

    )
}
export default Counter;