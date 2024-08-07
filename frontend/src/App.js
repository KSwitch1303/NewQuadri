
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL || 'https://quadri-project.onrender.com';
function App() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        console.log(inputValue);
        const response = axios.get(`${apiUrl}/getmeanings/${inputValue}`);
        response.then((res) => {
            console.log(res.data);
            if (res.status === 201) {
                alert('Word Not In The Database')
                return
            }
            setResult(res.data);
        });
    };

    const handleCheck = () => {
        const inputElement = document.getElementById('input');
        const selectedText = inputElement.value.substring(inputElement.selectionStart, inputElement.selectionEnd);

        if (selectedText) {
            console.log(selectedText);
            const response = axios.get(`${apiUrl}/getmeanings/${selectedText}`);
            response.then((res) => {
                console.log(res.data);
                if (res.status === 201) {
                    alert('Word Not In The Database');
                    return;
                }
                setResult(res.data);
            });
        } else {
            alert('Please select a word to check.');
        }
    };

    const handleReplaceWord = (replacementWord) => {
        const inputElement = document.getElementById('input');
        const selectedText = inputElement.value.substring(inputElement.selectionStart, inputElement.selectionEnd);
        const beforeSelection = inputElement.value.substring(0, inputElement.selectionStart);
        const afterSelection = inputElement.value.substring(inputElement.selectionEnd);

        setInputValue(beforeSelection + replacementWord + afterSelection);
        setResult([]);
    };

    return (
        <div className="container">
            <div className="heading">
                <h1>YORUBA ORTHOGRAPHY SYSTEM</h1>
            </div>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Type here" 
                    id="input" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
            </div>
            <button id="searchBtn" onClick={handleSearch}>Search</button>
            <button className="addBtn" onClick={() => navigate('/add')}>Add Word</button>
            <button className="check" onClick={handleCheck}>Check</button>
            {result ? (
                <div className="result" id="result">
                    {result.map((word) => (
                        <div key={word.tone} className="word" onClick={() => handleReplaceWord(word.tone)}>
                            <h3>{word.tone}</h3>
                            <p>{word.definition}</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default App;
