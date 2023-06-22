import React, { useContext, useReducer } from 'react';
import './App.css';
import useSound from 'use-sound';
import { Card } from '@mantine/core';
import { subModeReducer, modeReducer, parametersReducer } from '../../reducer';
import GameDisplay from '../GameDisplay';
import StartDisplay from '../StartDisplay';
import ModeDisplay from '../ModeDisplay';
import SoundButton from '../SoundButton';

import ParametersContext from '../../context/ParametersContext'
import ModeContext from '../../context/ModeContext';
import SubModeContext from '../../context/SubModeContext';
import { IActionTypeParameters, Mode, initialState } from '../../constant';

function App() {
  const [play, { stop: stop, ...arg }] = useSound('./sound/background.mp3', { volume: 0.1 });
  const [state, dispatch] = useReducer(parametersReducer, initialState.parameters);
  const [mode, dispatchMode] = useReducer(modeReducer, initialState.mode);
  const [subMode, dispatchSubMode] = useReducer(subModeReducer, initialState.subMode);

  const handleMode = (selectMode: Mode) => {
    switch (selectMode) {
      case Mode.imOracle:
        if (!state.selectNumber) {
          dispatch({
            type: IActionTypeParameters.init,
            payload: {
              ...initialState.parameters,
              max: 128,
            }
          });
        };
        return <Card shadow="sm" padding="lg" radius="md" withBorder>
          <GameDisplay />
        </Card>
          ;
      case Mode.youOracle:
        return <Card shadow="sm" padding="lg" radius="md" withBorder >
          <StartDisplay />
        </Card>
      default: return <ModeDisplay />

    }
  }

  return (
    <ModeContext.Provider value={{ dispatch: dispatchMode, state: mode }}>
      <SubModeContext.Provider value={{ dispatch: dispatchSubMode, state: subMode }}>
        <ParametersContext.Provider value={{ dispatch, state }}>
          <SoundButton play={play} stop={stop} />
          <div className='main'>
            {handleMode(mode)}
          </div>
        </ParametersContext.Provider>
      </SubModeContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
