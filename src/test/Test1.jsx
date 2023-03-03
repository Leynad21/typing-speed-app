import { useState, useEffect } from 'react';

const TypingSpeedApp = () => {
    const textToType = 'The quick brown fox jumps over the lazy dog';
    const [userInput, setUserInput] = useState('');
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isWordCorrect, setIsWordCorrect] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsElapsed((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setUserInput(inputText);

        const words = textToType.trim().split(' ');
        const currentWord = words[currentWordIndex];
        const isInputWordCorrect = currentWord.startsWith(inputText.trim());
        setIsWordCorrect(isInputWordCorrect);

        if (inputText.endsWith(' ') && isInputWordCorrect) {
            const nextWordIndex = currentWordIndex + 1;
            setCurrentWordIndex(nextWordIndex);
            setUserInput('');
        }

        const seconds = secondsElapsed === 0 ? 1 : secondsElapsed;
        const wpm = Math.round((currentWordIndex / seconds) * 60);
        setTypingSpeed(wpm);
    };

    return (
        <div>
            <p>
                {textToType.split(' ').map((word, index) => {
                    const wordClass = index === currentWordIndex ? 'current' : '';
                    const isWordTyped = index < currentWordIndex;
                    const isWordIncorrect = !isWordTyped || (isWordTyped && !word.startsWith(userInput.trim()));
                    const wordColor = isWordIncorrect ? 'red' : 'black';
                    return (
                        <span key={index} className={`${wordClass} ${wordColor}`}>
                            {word}{' '}
                        </span>
                    );
                })}
            </p>
            <input type="text" value={userInput} onChange={handleInputChange} />
            <p>Time elapsed: {secondsElapsed} seconds</p>
            <p>Typing speed: {typingSpeed} WPM</p>
            {isWordCorrect ? null : <p className="error">Incorrect word</p>}
        </div>
    );
};


export default TypingSpeedApp