import React, { useState, useEffect } from 'react'
import { RecordBody, Record, Arm, Center } from './RecordPlayerStyle'
import music from './music/song.mp3'

export default function RecordPlayer() {
  const [audio] = useState(new Audio(music))
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    isPlay ? audio.pause() : audio.play();
    setIsPlay(!isPlay)
  }

  return (
    <RecordBody>
      <div>
        <button onClick={togglePlay}>{isPlay ? 'Pause' : 'Play'}</button>
      </div>
      <Record></Record>
      <Arm></Arm>
      <Center></Center>
    </RecordBody>
  )
}
