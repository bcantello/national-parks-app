import React from 'react';
import './styles.css';
import parksDataArr from "./ParksData";
import Header from "./Components/Header";
import ParksList from "./Components/ParksList";
import Footer from "./Components/Footer";

function App() {

    return (
        <div className="App">
            <Header/>
            <div className="main-container">
                <ParksList parks={parksDataArr} />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
