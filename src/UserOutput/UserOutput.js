import React from 'react';
import './UserOutput.css'

const UserOutput = (props) =>{
    return(
        <div className="Useroutput">
            <p> Username: {props.username}</p>
            <p> Trying React basic functionality</p>
        </div>
    );
}

export default UserOutput;