import { useEffect } from "react";
import { useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
        }, 100);
    }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    );
}