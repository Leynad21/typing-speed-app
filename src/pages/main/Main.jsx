import React, { useState } from 'react'
import "./main.css"
import TextGenerator from '../../components/textGenerator/TextGenerator'
import FormInput from "../../components/formInput/FormInput"

const Main = () => {

    const [text, setText] = useState("")

    const getParagraph = (paragraph) => {
        setText(paragraph)
        console.log(paragraph)
    }

    return (
        <div>
            <h1 className='app-title'>Typing Master</h1>
            <TextGenerator
                getParagraph={setText}
                text={text}
            />
            <FormInput
                text={text}
            />

        </div>
    )
}

export default Main