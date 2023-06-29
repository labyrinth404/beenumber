import React, { useState, useContext, useRef } from 'react';
import useSound from 'use-sound';
import { NumberInputHandlers } from '@mantine/core';
import ParametersContext from '../../context/ParametersContext';
import SubModeContext from '../../context/SubModeContext'
import { IActionTypeParameters } from '../../constant';
import ComplexityBar from '../ComplexityBar';
import CounterBar from '../CounterBar';
import ControlBar, { YouControl } from '../ControlBar';
import ResultBar from '../ResultBar';

function YouModePanel() {
    const { state, dispatch } = useContext(ParametersContext);
    const { state: stateSubMode } = useContext(SubModeContext);
    const handlers = useRef<NumberInputHandlers>();
    const ref1 = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [value, setValue] = useState(state!.variant);
    const [playVariant] = useSound('./sound/click2.mp3', { volume: 0.1 });
    const [play] = useSound('./sound/click_coin.mp3', { volume: 0.1 });

    const handleButton = () => {
        if (dispatch) {
            dispatch({
                type: IActionTypeParameters.setVariant,
                payload: value
            });
            setValue(-1);
            ref1.current.focus();
        };
        playVariant();
    };

    return (
        <>
            <ComplexityBar max={state!.max} name={stateSubMode?.complexity} />
            {/* 2 - ResultBar*/}
            <ResultBar>
                <></>
            </ResultBar>
            <CounterBar all={state?.interation} fact={state?.stackVariant.length} />
            <ControlBar>
                <YouControl disabled={state?.stackVariant.length === state?.interation} onClick={() => console.log('hi')} />
            </ControlBar>
        </>
    );
}

export default YouModePanel;