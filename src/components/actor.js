import React from 'react';
import {Link} from 'react-router-dom';


const Actor = (props) => {
    return (
    <div className="main-content">
        <div><Link className="back" to="/actors">Back</Link></div>

        <div className="container">
            <div className="image_profile" style={{backgroundImage:"url(" + props.image + ")"}}></div>   
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>
            <p>{props.details}</p>
            </div>
            
            
            
        </div>
    </div>
    );
};

export default Actor;