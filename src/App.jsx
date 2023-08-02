/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import KeyboardKey from './components/KeyboardKey';

const soundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const Keyboard = ({ play, power }) => {
  return (
    <div>
      { power 
        ? soundsGroup.map(sound => <KeyboardKey key={sound.id} play={play} sound={sound} />) 
        : soundsGroup.map(sound => <KeyboardKey key={sound.id} play={play} sound={{...sound, url: '#'}} />)
      }
    </div>
  ) 
}

function App() {
  const [soundName, setSoundName] = useState("")
  const [power, setPower] = useState(true)

  const togglePower = () => {
    setPower(() => !power)
  }

  const playSound = (key, sound) => {
    setSoundName(sound)
    const audio = document.getElementById(key)
    audio.currentTime = 0;
    audio.play()
  }

  return (
    <>
      <div id="drum-machine">
        <div className="keyboard-wrapper">
          <Keyboard play={playSound} power={power} />
        </div>
        <div className="controls-container">
          <button className='power-btn' onClick={() => togglePower()}>Sound {power ? 'ON' : 'OFF'}</button>
          <p id="display">&nbsp;{soundName}</p>
        </div>
      </div>
    </>
  )
}

export default App
