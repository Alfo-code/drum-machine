/* eslint-disable react/prop-types */
import { useEffect } from "react"

const KeyboardKey = ({ play, sound: { key, url, id, keyCode }}) => {
    const handleKeydown = (e) => {
        if(e.keyCode === keyCode){
          play(key, id)
        }
      }
    
      useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
      },[])
    
  return (
    <div key={key} className='drum-pad' id={id} onClick={() => play(key, id)}>
        <audio className='clip' id={key} src={url} ></audio>{key}
    </div>
  )
}

export default KeyboardKey