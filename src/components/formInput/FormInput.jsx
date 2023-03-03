import styles from "./formInput.module.css"
import React, { useReducer, useState } from 'react'

const FormInput = () => {

    const [input, setInput] = useState("good")



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input);
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <div className={styles.container}>
            <div className={styles.textDisplay}>
                <h3>{input}</h3>
            </div>
            <div className={styles.formField}>
                <form >
                    <div>
                        <input onChange={handleInputChange} />
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </form>

            </div>


        </div>

    )
}

export default FormInput