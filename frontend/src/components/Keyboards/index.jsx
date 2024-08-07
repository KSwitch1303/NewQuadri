import React, { useState } from 'react';
import './index.css';
const Keyboards = ({ handleKeyboardInput, handleKeyboardDelete, handleKeyboardSpace }) => {
  const [isUppercase, setIsUppercase] = useState(true);

  const handleKeyPress = (key) => {
    handleKeyboardInput(key);
  };

  const handleDelete = () => {
    handleKeyboardDelete();
  };

  const handleSpace = () => {
    handleKeyboardSpace();
  };

  const handleCaseSwitch = () => {
    setIsUppercase(!isUppercase);
  };

  const renderKeys = (keys) => {
    return keys.map((key, index) => (
      <button key={index} className="key" onClick={() => handleKeyPress(key)}>
        {key}
      </button>
    ));
  };

  const uppercaseKeys = [
    ['A', 'B', 'D', 'E', 'Ẹ', 'F', 'G', 'GB', 'H', 'I', 'J', 'K', 'L', 'M'],
    ['N', 'O', 'Ọ', 'P', 'R', 'S', 'Ṣ', 'T', 'U', 'W', 'Y'],
    ['Á', 'À', 'Ā', 'É', 'È', 'Ē', 'Ẹ́', 'Ẹ̀', 'Ẹ̄', 'Í', 'Ì', 'Ī'],
    ['Ó', 'Ò', 'Ō', 'Ọ́', 'Ọ̀', 'Ọ̄', 'Ú', 'Ù', 'Ū']
  ];

  const lowercaseKeys = [
    ['a', 'b', 'd', 'e', 'ẹ', 'f', 'g', 'gb', 'h', 'i', 'j', 'k', 'l', 'm'],
    ['n', 'o', 'ọ', 'p', 'r', 's', 'ṣ', 't', 'u', 'w', 'y'],
    ['á', 'à', 'ā', 'é', 'è', 'ē', 'ẹ́', 'ẹ̀', 'ẹ̄', 'í', 'ì', 'ī'],
    ['ó', 'ò', 'ō', 'ọ́', 'ọ̀', 'ọ̄', 'ú', 'ù', 'ū']
  ];

  const keysToRender = isUppercase ? uppercaseKeys : lowercaseKeys;

  return (
    <div className="keyboard-container">
      {keysToRender.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {renderKeys(row)}
        </div>
      ))}
      <div className="row space-row">
        <button id="delete" className="key special-key" onClick={handleDelete}>⌫</button>
        <button id="space" className="key special-key" onClick={handleSpace}>Space</button>
        <button id="caseSwitch" className="key special-key" onClick={handleCaseSwitch}>⇧</button>
      </div>
    </div>
  );
};

export default Keyboards;
