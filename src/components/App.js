import React, { useState, useEffect } from "react"
import "./App.css"
import { audioBank1, audioBank2 } from "../api/audio"
import { Pad } from "./"


export default function App() {
    const [power, setPower] = useState(true)
    const [audioBank, setAudioBank] = useState(audioBank1)
    const [vol, setVol] = useState(0.3)
    const [text, setText] = useState("")

    function handleChangeBank() {
        if (power) {
            if (audioBank === audioBank1) {
                setAudioBank(audioBank2)
                setText("Smooth Piano Kit")
            } else {
                setAudioBank(audioBank1)
                setText("Heater Kit")
            }
        }
    }

    function handleChangePower() {
        setPower(!power)
        setText("")
    }

    function handleChangeVol(event) {
        if (power) {
            setVol(event.target.value)
            setText("Volume: " + Math.round(event.target.value * 100))
            setTimeout(() => setText(""), 800)
        }
    }

    return (
        <div id="drum-machine">
            <div id="keypad">
                {audioBank.map(audio => (
                    <Pad 
                        key={audio.id} 
                        audio={audio} 
                        vol={vol}
                        power={power}
                        updateText={() => setText(audio.id)}
                    />
                ))}
            </div>
            <div id="control">
                <div className="switch">
                    <p>Power</p>
                    <div className="switch-outer" onClick={handleChangePower}>
                        <div 
                            className="switch-inner" 
                            style={{float: power ? "right" : "left"}} 
                        />
                    </div>
                </div>

                <div id="display">
                    <p>{text}</p>
                </div>

                <input 
                    id="vol"
                    max="1" 
                    min="0"
                    type="range" 
                    step="0.01" 
                    value={vol} 
                    onChange={handleChangeVol} 
                />

                <div className="switch">
                    <p>Bank</p>
                    <div className="switch-outer" onClick={handleChangeBank}>
                        <div 
                            className="switch-inner" 
                            style={{float: audioBank === audioBank1 ? "left" : "right"}} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}