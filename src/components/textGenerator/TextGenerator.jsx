import React, { useState } from 'react'
import Axios from 'axios'
import styles from "./textGenerator.module.css"



const EndpointAPI = "https://api.quotable.io/random"

const TextGenerator = () => {

    const [text, setText] = useState("")


    const getText = () => {
        let paragraph = ""

        for (let i = 0; i < 5; i++) {
            Axios.get(EndpointAPI).then(
                (response) => {
                    console.log(response);
                    let new_paragraph = response.data.content
                    paragraph = paragraph + " " + new_paragraph
                    console.log(paragraph);
                    setText(paragraph)
                }
            )
        }
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
                <h1>Start typing</h1>

                <article>
                    <p>
                        {text}
                    </p>
                </article>
                <button onClick={getText}>get text</button>

            </div>




        </>
    )
}

export default TextGenerator