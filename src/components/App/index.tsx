import React, { useContext, useReducer } from 'react';
import './App.css';
import useSound from 'use-sound';
import { Card } from '@mantine/core';
import { subModeReducer, modeReducer, parametersReducer } from '../../reducer';
import GameDisplay from '../GameDisplay';
import SettingDisplay from '../SettingDisplay';
import ModeDisplay from '../ModeDisplay';
import SoundButton from '../SoundButton';

import ParametersContext from '../../context/ParametersContext'
import ModeContext from '../../context/ModeContext';
import SubModeContext from '../../context/SubModeContext';
import { Mode, initialState } from '../../constant';

function App() {
  const [play, { stop: stop }] = useSound('./sound/background_mario.mp3', { volume: 0.1 });
  const [state, dispatch] = useReducer(parametersReducer, initialState.parameters);
  const [mode, dispatchMode] = useReducer(modeReducer, initialState.mode);
  const [subMode, dispatchSubMode] = useReducer(subModeReducer, initialState.subMode);

  const handleMode = (selectMode: Mode) => {
    switch (selectMode) {
      case Mode.imOracleSetting:
        return <Card shadow="sm" padding="lg" radius="md" withBorder >
          <SettingDisplay mode={Mode.imOracle} />
        </Card>;
      case Mode.imOracle:
        return <Card shadow="sm" padding="lg" radius="md" withBorder>
          <GameDisplay mode={selectMode} />
        </Card>;
      case Mode.youOracleSetting:
        return <Card shadow="sm" padding="lg" radius="md" withBorder >
          <SettingDisplay mode={Mode.youOracle} />
        </Card>;
      case Mode.youOracle:
        return <Card shadow="sm" padding="lg" radius="md" withBorder >
          <GameDisplay mode={selectMode} />
        </Card>;
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
