import React from "react";
import ParkImage from "./ParkImage";

export default function ParksList(props) {
    console.log(props.parks);

    const allParks = props.parks.map(park => {
        console.log("park",park);
        return (
            <ParkImage mainImage={park.images[0].url} parkCode={park.parkCode}/>
        )
    });

    return(
        <div className="thumbs-container">{allParks}</div>
    )
}
