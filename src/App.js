// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import Reacty from 'react'

import SpeechRecognition , {useSpeechRecognition} from 'react-speech-recognition'

const App = () => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  if(!browserSupportsSpeechRecognition){
    return <span>Your Browser doesn't support Speech to Text</span>
  }

  return(
    <div>
       <p>Microphone: {listening ? 'on' : 'off'}</p>
       <button onClick = {SpeechRecognition.startListening}>Start</button>
       <button onClick = {SpeechRecognition.stopListening}>Stop</button>
       <button onClick = {resetTranscript}>Reset</button>
       <p>{transcript}</p>
    </div>
  )
}

export default App;