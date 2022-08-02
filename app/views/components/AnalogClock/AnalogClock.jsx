import { AnalogClock as ReactAnalogClock } from 'analog-clock-react';


let options = {
    width: "50px",
    border: true,
    borderColor: "#000000",
    baseColor: "#000000",
    centerColor: "#FFFFFF",
    centerBorderColor: "#ffffff",
    handColors: {
        second: "#FFFFFF",
        minute: "#ffffff",
        hour: "#ffffff"
    }
};


const AnalogClock = () => {

    return (
        <ReactAnalogClock {...options} />
    )
}

export default AnalogClock