import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import useTimer from 'easytimer-react-hook';

function Timer() {
  const [timer, isTargetAchived] = useTimer({ countdown: true });
  const [time, setTime] = useState(60);

  function startTimer() {
    console.log('timer');
    timer.start({ countdown: true, startValues: { seconds: time } });
  }

  function handleTimerChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.value.length === 0) {
      setTime(0);
      return;
    }
    setTime(parseInt(event.target.value));
  }

  return (
    <div className={'my-1.5'}>
      <TextField
        value={time}
        placeholder={'in seconds'}
        label={'Timer'}
        onChange={handleTimerChange}
      />
      <div className={'my-1.5'}>
        <Button onClick={startTimer} variant={'contained'}>
          Start timer
        </Button>
        <Button onClick={timer.stop} variant={'contained'}>
          Stop timer
        </Button>
        <Button onClick={timer.reset} variant={'contained'}>
          Reset timer
        </Button>
      </div>
      <p>{timer.getTimeValues().toString()}</p>
    </div>
  );
}

export default Timer;
