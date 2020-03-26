import React from "react";
import {Link} from "react-router-dom";

export default function ParkImage(props) {
    return(
        <Link to={`/${props.parkCode}`}>
            <img src={props.mainImage} className="thumb-image"/>
        </Link>
    )
}
