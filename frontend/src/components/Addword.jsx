
import React, { useState, useRef } from 'react';
import './addword.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Keyboards from './Keyboards';

const apiUrl = process.env.REACT_APP_API_URL || 'https://quadri-project.onrender.com';

const AddWord = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState('');
  const [tones, setTones] = useState([{ tone: "", meaning: "" }]);
  const [focusedInput, setFocusedInput] = useState(null);
  const inputsRef = useRef([]);
  const keyboardUsedRef = useRef(false);

  const addYorubaWord = async (word, meanings) => {
    try {
      const response = await axios.post(`${apiUrl}/addword`, { word, meanings });
      if (response.data) {
        alert('Word added to database');
        window.location.reload(); // Refresh the page
      }
    } catch (error) {
      console.error('Error adding word:', error.response ? error.response.data : error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meanings = tones.map(t => ({ tone: t.tone, definition: t.meaning }));
    await addYorubaWord(word, meanings);
  };

  const addTone = () => {
    setTones([...tones, { tone: "", meaning: "" }]);
  };

  const removeTone = (index) => {
    const newTones = tones.filter((_, i) => i !== index);
    setTones(newTones);
  };

  const handleInputChange = (index, event) => {
    if (keyboardUsedRef.current) {
      keyboardUsedRef.current = false;
      return;
    }
    const { name, value } = event.target;
    const newTones = tones.map((tone, i) => {
      if (i === index) {
        return { ...tone, [name]: value };
      }
      return tone;
    });
    setTones(newTones);
  };

  const handleFocus = (index, field) => {
    setFocusedInput({ index, field });
  };

  const handleKeyboardInput = (input) => {
    keyboardUsedRef.current = true;
    if (focusedInput !== null) {
      if (focusedInput.field === 'word') {
        setWord((prev) => prev + input);
      } else {
        setTones((prev) => {
          const newTones = [...prev];
          newTones[focusedInput.index][focusedInput.field] += input;
          return newTones;
        });
      }
    }
  };

  const handleKeyboardDelete = () => {
    keyboardUsedRef.current = true;
    if (focusedInput !== null) {
      if (focusedInput.field === 'word') {
        setWord((prev) => prev.slice(0, -1));
      } else {
        setTones((prev) => {
          const newTones = [...prev];
          newTones[focusedInput.index][focusedInput.field] = newTones[focusedInput.index][focusedInput.field].slice(0, -1);
          return newTones;
        });
      }
    }
  };

  const handleKeyboardSpace = () => {
    handleKeyboardInput(' ');
  };

  return (
    <div className="popup" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="popup-inner">
        <form onSubmit={handleSubmit}>
          <div className='formHead'>
            <h1>Add Word</h1>
          </div>

          <div className="wod">
            <div className="form-group">
              <label htmlFor="word">Word:</label>
              <input 
                type="text" 
                name="word" 
                id="word" 
                value={word}
                onFocus={() => handleFocus(null, 'word')}
                onChange={(e) => setWord(e.target.value)}
              />
            </div>
          </div>

          {tones.map((tone, index) => (
            <div className="formBody" key={index}>
              <div className="form-group">
                <label htmlFor={`tone-${index}`}>Tone:</label>
                <input 
                  type="text" 
                  name="tone" 
                  id={`tone-${index}`} 
                  value={tone.tone}
                  ref={(el) => (inputsRef.current[`tone-${index}`] = el)}
                  onFocus={() => handleFocus(index, 'tone')}
                  onChange={(e) => handleInputChange(index, e)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor={`meaning-${index}`}>Meaning:</label>
                <input 
                  type="text" 
                  name="meaning" 
                  id={`meaning-${index}`} 
                  value={tone.meaning}
                  ref={(el) => (inputsRef.current[`meaning-${index}`] = el)}
                  onFocus={() => handleFocus(index, 'meaning')}
                  onChange={(e) => handleInputChange(index, e)} 
                />
              </div>
              <button className="delete-button" type="button" onClick={() => removeTone(index)}>Delete</button>
            </div>
          ))}

          <div className="button-group">
            <button type="button" onClick={addTone}>More Tone</button>
            <button type="submit">ADD</button>
            <button type="button" onClick={() => navigate('/')}>Home</button>
          </div>
        </form>
      </div>
      <Keyboards 
        handleKeyboardInput={handleKeyboardInput} 
        handleKeyboardDelete={handleKeyboardDelete}
        handleKeyboardSpace={handleKeyboardSpace}
      />
    </div>
  );
};

export default AddWord;
