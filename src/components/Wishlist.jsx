import React from "react";
import { ReactDOM } from "react";

var Wishlist = () => {
    var [inputText, setInputText ]= React.useState("");
    const [list, newList] = React.useState([]);

    let status;
    let kuldeep = list.length > 2 ? {display: "none"} : {display: "block" };


    function addList(){
        // console.log(inputText);
        //  let inputContainerfalse = inputContainerfalse;
        //  let inputContainertrue = inputContainertrue;

        //  kuldeep =  list.length > 2 ? {display: "none"} : {display: "block" };



        let newUpdatedTast = [...list, inputText]
        newList(newUpdatedTast);
        // console.log(status)
        
    }

    function show(event){
     setInputText(event);
    }

 

    return (
        <div className="wishlistMainBody">
            <h1>
                Wishlist
            </h1>
            {list.length > 2 ? <h4>"You cannot add more than 3 items to wishlist".</h4> : true }
            <div className="inputBoxContainer" style={kuldeep}>
            <input onChange={e => show(e.target.value)} type="text"  /> <br />
            <button onClick = {addList} className="addBtn">ADD</button>
            </div>
        
            <div id="wishlistShow">
                {list.map((el) => <div key={el}>{el}</div>)
                
                }
            </div>
        </div>
    );
}

export default Wishlist;