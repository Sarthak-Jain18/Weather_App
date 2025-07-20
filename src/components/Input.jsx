import { useState } from "react"

export default function Input({ setLocation }) {

    const [data, setData] = useState("");

    function updateInput(event) {
        setData(event.target.value);
    }

    function btnClicked() {
        if (data.trim() === "") {
            return;
        }
        setLocation(data);
        setData("");
    }

    return (
        <div className="Input">
            <div className="takeInput"><input type="text" placeholder="Enter city name (e.g., Delhi, Mumbai, Jaipur)" value={data} onChange={updateInput} /></div>
            <div className="inputBtn"><button onClick={btnClicked}><i className="fa-solid fa-magnifying-glass"></i></button></div>
        </div>
    )
}