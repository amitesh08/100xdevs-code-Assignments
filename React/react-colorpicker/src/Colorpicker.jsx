import { useState } from "react";

export default function ColorPicker(){
    const [color, setColor] = useState("#000000");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <>
            <div className="color-picker-container">

                <h1>Color Picker </h1>
                <div className="color-display" style= {{ backgroundColor: color}}>
                    <p>color: {color}</p>
                </div>
                <label>choose a color </label>
                <input type="color" value={color} onChange={handleColorChange}/>
                
            </div>
        </>
    )
}