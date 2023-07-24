import styles from "./formInput.module.css"
import React, { useReducer, useState } from 'react'

const FormInput = ({ text, input, setInput, textImported }) => {

    let textArray = text.split("")
    textArray = textArray.slice(1)

    const FormattedText = textArray.map((char, index) => {
        let color = ""
        if (index < input.length) {
            color = char === input[index] ? styles.correct : styles.wrong
        }
        return (<span key={`${char}_${index}`} className={color}>{char}</span>)
    })



    return (
        <div className={!textImported && "hidden"}>
            <div className={styles.container}>
                <div className={styles.textDisplay}>
                    <h3>
                        {FormattedText}
                    </h3>
                </div>
                <div className={styles.formField}>
                    <form onSubmit={(e) => e.preventDefault()} >
                        <div>
                            <input onChange={(e) => setInput(e.target.value)} placeholder="Type here" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FormInput