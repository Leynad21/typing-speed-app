import React, { useState } from 'react'
import "./main.css"
import TextGenerator from '../../components/textGenerator/TextGenerator'
import FormInput from "../../components/formInput/FormInput"

const Main = () => {


    const getParagraph = (paragraph) => {
        console.log(paragraph)
        return paragraph
    }


    const that = getParagraph()

    const printThat = () => {
        alert(that);
    }




    // const updateState = () => {
    //     return (
    //         setNewData(1)
    //     )
    // }








    return (
        <div>
            <h1 className='app-title'>Typing Master</h1>
            <TextGenerator
                getParagraph={getParagraph} />
            <FormInput />

        </div>
    )
}

export default Main