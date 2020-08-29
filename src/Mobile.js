import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const mobile = (props) =>{
    return(
        <div className='card'>
            <div className='card-body'>
                <h3>Inside Mobile Component by {props.name}</h3>
            </div>
        </div>
    );
};

export default mobile;