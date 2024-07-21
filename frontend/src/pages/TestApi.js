import React, { useState } from "react";
import { apiPost } from "../app/api/POST";
import "../index.css";

function Title() {
    return (
        <div className="App">
            <h1>Calculate</h1>
        </div>
    );
}

function Input({ setNumber1, setOperator, setNumber2 }) {
    return (
        <div className="App input-container">
            <input type="number" onChange={(e) => setNumber1(e.target.value)} />
            <input type="text" onChange={(e) => setOperator(e.target.value)} />
            <input type="number" onChange={(e) => setNumber2(e.target.value)} />
        </div>
    );
}

function StartButton({ calculate }) {
    return (
        <div className="App">
            <input type="button" value="=" className="start-button" onClick={calculate} />
        </div>
    );
}

const TestApi = () => {
    const [number1, setNumber1] = useState('');
    const [operator, setOperator] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(null);

    const calculate = async () => {
        try {
            const response = await apiPost("cal", {
                a: parseFloat(number1),
                b: parseFloat(number2),
                c: operator,
            });
            setResult(response.result);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <Title />
            <p>안녕하세요</p>
            <Input setNumber1={setNumber1} setOperator={setOperator} setNumber2={setNumber2} />
            <StartButton calculate={calculate} />
            {result !== null && <div className="App result">Result: {result}</div>}
        </div>
    );
}

export default TestApi;
