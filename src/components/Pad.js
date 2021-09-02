import React, { useState, useEffect } from "react"
import "./Pad.css"


export default function Pad(props) {
    const audio = props.audio // access the 'audio' prop
    const [active, setActive] = useState(false)

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [])

    function handleKeyPress(event) {
        if (event.keyCode === audio.keyCode) playSound()
    }

    function playSound() {
        const audioTag = document.getElementById(audio.keyTrigger)
        setActive(true)
        setTimeout(() => setActive(false), 300)
        audioTag.volume = props.vol
        audioTag.currentTime = 0
        audioTag.play()
    }

    return (
        <div 
            className="drum-pad" 
            onClick={playSound} 
            style={{backgroundColor: active ? "orange" : "grey"}}
        >
            <audio className="clip" id={audio.keyTrigger} src={audio.url} />
            {audio.keyTrigger}
        </div>
    )
}