import styles from "./formInput.module.css"
import React, { useReducer, useState } from 'react'

const FormInput = ({ text }) => {

    const [input, setInput] = useState("good")

    const ConditionalFormatting = () => {
        const textArray = text.split("")
        console.log(textArray);
    }



    return (
        <div className={styles.container}>
            <div className={styles.textDisplay}>
                <h3>
                    {input}
                </h3>
            </div>
            <div className={styles.formField}>
                <form onSubmit={(e) => e.preventDefault()} >
                    <div>
                        <input onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <button onClick={ConditionalFormatting}>here</button>
                </form>

            </div>


        </div>

    )
}

export default FormInput