import React from 'react';
import './Userinput.css'

const UserInput = (props) =>{
    return(
        <div className="Userinput">
            Enter username: <input type="text" onChange ={props.changed} value={props.currentName}/>
        </div>
    );
}
export default UserInput;