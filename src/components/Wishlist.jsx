import React from "react";
import { ReactDOM } from "react";

var Wishlist = () => {
    var [inputText, setInputText ]= React.useState("");
    const [list, newList] = React.useState([]);

    let status;

    function addList(){
        // console.log(inputText);
        //  let inputContainerfalse = inputContainerfalse;
        //  let inputContainertrue = inputContainertrue;

        status = list.length > 2 ? false : true;



        let newUpdatedTast = [...list, inputText]
        newList(newUpdatedTast);
        console.log(status)
        
    }

    function show(event){
     setInputText(event);
    }

 

    return (
        <div className="wishlistMainBody">
            <h1>
                Wishlist
            </h1>
            <div className={status}>
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