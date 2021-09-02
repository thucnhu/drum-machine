import React, { useState, useEffect } from "react"
import "./Pad.css"


export default function Pad(props) {
    const audio = props.audio // access the 'audio' prop
    const [active, setActive] = useState(false)

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [handleKeyPress])

    function handleKeyPress(event) {
        if (event.keyCode === audio.keyCode) playSound()
    }

    function playSound() {
        if (props.power) {
            const sound = document.getElementById(audio.keyTrigger)
            setActive(true)
            setTimeout(() => setActive(false), 300)
            sound.volume = props.vol
            sound.currentTime = 0
            sound.play()
            props.updateText()
        }
    }

    return (
        <div 
            className="drum-pad" 
            onClick={playSound}
            id={audio.id}
            style={{backgroundColor: active ? "orange" : "grey"}}
        >
            <audio className="clip" id={audio.keyTrigger} src={audio.url} />
            <p>{audio.keyTrigger}</p>
        </div>
    )
}