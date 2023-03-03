import React, { useState } from 'react'
import "./main.css"
import TextGenerator from '../../components/textGenerator/TextGenerator'
import FormInput from "../../components/formInput/FormInput"
import Results from '../../components/results/Results'
import CountdownTimer from '../../components/countdownTimer/CountdownTimer'

const Main = () => {

    const [text, setText] = useState("")
    const [input, setInput] = useState("")
    const [startTime, setStartTime] = useState(false);
    const [finished, setFinished] = useState(false)
    const [textImported, setTextImported] = useState(false)

    const getParagraph = (paragraph) => {
        setText(paragraph)
    }

    const startTyping = () => {
        return (
            setStartTime(!startTime)
        )
    }



    return (
        <>
            <h1 className='app-title'>Typing Pro</h1>
            <div className={textImported ? "hidden" : ""}>
                <div className='welcome-title'>
                    <h1>
                        Welcome to the Typing Master!
                    </h1>
                </div>
            </div>
            <TextGenerator
                getParagraph={getParagraph}
                textImported={textImported}
                setTextImported={setTextImported}
            />
            <CountdownTimer
                startTime={startTime}
                setStartTime={setStartTime}
                setFinished={setFinished}
            />
            <FormInput
                text={text}
                input={input}
                setInput={setInput}
                textImported={textImported}
            />
            <Results
                text={text}
                input={input}
                finished={finished}
            />
            <div className={!textImported && "hidden"}>
                <button onClick={startTyping} className={startTime && "hidden"}>Start Typing</button>
            </div>
            <div className={!finished && "hidden"}>
                <button onClick={() => window.location.reload(false)} className="btn-restart">Restart</button>
            </div>
        </>
    )
}

export default Main