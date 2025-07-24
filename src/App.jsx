import React, { useContext } from 'react';
import "./App.css";
import va from "./assets/download.jpg";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";

function App() {
  const {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    response,
    setPrompt,
    setResponse
  } = useContext(datacontext);

  return (
    <div className="main-container">
      <div className="assistant-box">
        <img src={va} alt="Tiva Avatar" className="avatar" />
        <span className="assistant-intro">I'm Tiva, Your Advanced Virtual Assistant</span>

        {!speaking ? (
          <button
            className="mic-button"
            onClick={() => {
              setPrompt("Listening...");
              setSpeaking(true);
              setResponse(false);
              recognition.start();
            }}
          >
            Click Here <CiMicrophoneOn size={24} />
          </button>
        ) : (
          <div className="response-section">
            {!response ? (
              <img src={speakimg} alt="Speaking..." className="speak-img" />
            ) : (
              <img src={aigif} alt="AI Response" className="ai-gif" />
            )}
            <p className="response-text">{prompt}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
