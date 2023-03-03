import React, { useState } from 'react'
import Axios from 'axios'
import styles from "./textGenerator.module.css"


const EndpointAPI = "https://api.quotable.io/random"

const TextGenerator = ({ getParagraph }) => {

    const [displayText, setDisplayText] = useState("")

    const getText = async () => {
        let paragraph = ""
        for (let i = 0; i < 5; i++) {
            const response = await Axios.get(EndpointAPI);
            let new_paragraph = response.data.content
            paragraph = paragraph + " " + new_paragraph
            setDisplayText(paragraph)
        }
        return paragraph
    }

    const sendDataUp = async () => {
        const value = await getText()
        getParagraph(value)
    }


    return (
        <>
            <div className={styles.container}>
                <article>
                    <p>
                        {displayText}
                    </p>
                </article>
                <button onClick={sendDataUp} className={styles.btn}>get text</button>

            </div>




        </>
    )
}

export default TextGenerator