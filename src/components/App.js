import React, { useState, useEffect } from "react"
import "./App.css"
import { audioBank1, audioBank2 } from "../api/audio"
import { Pad } from "./"


export default function App() {
    const [power, setPower] = useState(true)
    const [audioId, setAudioId] = useState("")
    const [audioBank, setAudioBank] = useState(audioBank1)
    const [audioBankId, setAudioBankId] = useState("Heater Kit")
    const [vol, setVol] = useState(0.3)


    return (
        <div id="drum-machine">
            <div id="keypad">
                {audioBank.map(audio => (
                    <Pad key={audio.id} audio={audio} vol={vol} />
                ))}
            </div>
            <div id="control">
                <div className="switch">
                    <p>Power</p>
                    <div className="switch-outer">
                        <div 
                            className="switch-inner" 
                            style={{float: power ? "right" : "left"}} 
                        />
                    </div>
                </div>

                <div id="display">
                    <p>Nhu</p>
                </div>

                <input 
                    id="vol"
                    type="range" 
                    step="0.01" 
                    value={vol} 
                    max="1" 
                    min="0" 
                    onChange={event => setVol(event.target.value)} 
                />

                <div className="switch">
                    <p>Bank</p>
                    <div className="switch-outer">
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