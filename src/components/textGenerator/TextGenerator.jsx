import React, { useState } from 'react'
import Axios from 'axios'
import styles from "./textGenerator.module.css"


const EndpointAPI = "https://api.quotable.io/random"

const TextGenerator = ({ getParagraph }) => {

    const [text, setText] = useState("")

    const getText = async () => {
        let paragraph = ""

        for (let i = 0; i < 5; i++) {
            const response = await Axios.get(EndpointAPI);
            console.log(response);
            let new_paragraph = response.data.content
            paragraph = paragraph + " " + new_paragraph
            console.log(paragraph);
            setText(paragraph)
        }
    }

    const sendDataToParent = () => {
        getText()
        getParagraph(text)
    }


    // const getText2 = async () => {
    //     let paragraph = "";
    //     const getParagraphs = async () => {
    //         for (let i = 0; i < 5; i++) {
    //             const response = await Axios.get(EndpointAPI);
    //             const new_paragraph = response.data.content;
    //             paragraph = paragraph + " " + new_paragraph;
    //         }
    //         return paragraph;
    //     };
    //     const finalParagraph = await getParagraphs();
    //     setText(finalParagraph);
    // };


    return (
        <>
            <div className={styles.container}>
                <article>
                    <p>
                        {text}
                    </p>
                </article>
                <button onClick={sendDataToParent} className={styles.btn}>get text</button>

            </div>




        </>
    )
}

export default TextGenerator