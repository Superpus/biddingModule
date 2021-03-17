import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import MarketWidget from "./components/MarketWidget";

const propsData = {
    tradeType: "limit",
    tradeSpeed: "quick",
    tradeMarket: "stop market",
    buyDataTracked: false,
    buyDataValue: 48.0,
    sellDataTracked: false,
    sellDataHeaderValue: -48.0,
    val1: 380000,
    val2: 55000.3,
    val3: 0.0374,
    val4: -0.1737,
    buyDataPostChecked: false,
    buyDataReduceChecked: false,
    sellDataPostChecked: false,
    sellDataReduceChecked: false,
    buyDataTrackValue: 48.0,
    sellDataTrackValue: -48.0,
    currentLimitBuyValue: 54998.5,
    currentLimitBuyVolume: 20000,
    currentLimitSellValue: 54903.0,
    currentLimitSellVolume: 20000
}

const initState = {
    tradeType: "",
    tradeSpeed: "",
    tradeMarket: "",
    buyDataTracked: false,
    buyDataValue: 0,
    sellDataTracked: false,
    sellDataHeaderValue: 0,
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0,
    buyDataPostChecked: false,
    buyDataReduceChecked: false,
    sellDataPostChecked: false,
    sellDataReduceChecked: false,
    buyDataTrackValue: 0,
    sellDataTrackValue: 0,
    currentLimitBuyValue: 0,
    currentLimitBuyVolume: 0,
    currentLimitSellValue: 0,
    currentLimitSellVolume: 0
}

function App() {
    const [state, setState] = useState({...initState});

    const handleStateChange = (val) => {
        setState({
            ...state,
            ...val
        })
    }


    useEffect(() => {
        setState({...propsData})
    }, []);

    return (
        <div className="App">
            <div className="cellContainer">
                <div className="cell1"/>
                <div className="cell2">
                    <MarketWidget
                        state={state}
                        handleStateChange={handleStateChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
