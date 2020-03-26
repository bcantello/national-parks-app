import React, {useState} from 'react';
import './styles.css';
import parksDataArr from "./ParksData";
import ParksList from "./Components/ParksList";
import Park from "./Components/Park";
import ParkDetails from "./Components/ParkDetails";
import Home from "./Components/Home";

function App() {
    const [parks, setParks] = useState(parksDataArr);

    return (
        <div className="App">
            <Home/>
            <ParksList/>
            <Park/>
            <ParkDetails parks={parks}/>
        </div>
    );
}

export default App;
