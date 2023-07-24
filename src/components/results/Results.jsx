import styles from "./results.module.css"
import React, { useEffect, useState } from 'react'

const Results = ({ input, text, finished }) => {

  const textArray = text.split(" ").slice(1)
  const inputArray = input.split(" ")

  const [length, setLength] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)

  const accuracy = Math.round((correctWords / length) * 100)

  useEffect(() => {
    setLength(inputArray.length)
    let correctWordsCounter = 0
    inputArray.forEach((element, index) => {
      if (inputArray[index] === textArray[index]) {
        correctWordsCounter += 1
      }
      setCorrectWords(correctWordsCounter)
    })
  }, [finished])


  const test = () => {
    console.log(textArray, inputArray);
  }



  return (
    <>
      <div className={!finished && "hidden"}>
        <div className={styles.container}>
          <h2>
            Total: {length}
          </h2>
          <h2>
            Correct: {correctWords}
          </h2>
          <h2>
            Accuracy: {accuracy}%
          </h2>
        </div>
      </div>
    </>
  )
}

export default Results