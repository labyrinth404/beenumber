import React, { useState, useContext, useRef } from 'react';
import useSound from 'use-sound';
import { NumberInputHandlers } from '@mantine/core';
import ParametersContext from '../../context/ParametersContext';
import SubModeContext from '../../context/SubModeContext'
import Result from '../Result';
import ButtonWithSound from '../ButtonWithSound';
import ComplexityBar from '../ComplexityBar';
import ResultBar from '../ResultBar';
import CounterBar from '../CounterBar';
import ControlBar, { ImControl } from '../ControlBar';
import { IActionTypeParameters } from '../../constant';

function ImModePanel() {
    const { state, dispatch } = useContext(ParametersContext);
    const { state: stateSubMode } = useContext(SubModeContext);
    const handlers = useRef<NumberInputHandlers>();
    const ref1 = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [value, setValue] = useState<number | ''>("");
    const [playVariant] = useSound('./sound/click2.mp3', { volume: 0.1 });

    const handleButton = () => {
        if (dispatch) {
            ref1.current.blur();
            dispatch({
                type: IActionTypeParameters.setVariant,
                payload: value
            });
            setValue("");
            setTimeout(() => ref1.current.focus());
        };
        playVariant();
    };

    return (
        <>
            <ComplexityBar max={state?.max} name={stateSubMode?.complexity} />
            <ResultBar>
                <Result />
            </ResultBar>
            <CounterBar all={state?.interation} fact={state?.stackVariant.length} />
            <ControlBar >
                <ImControl refer={ref1}
                    disabled={state?.stackVariant.length === state?.interation}
                    min={state?.min}
                    max={state?.max}
                    handlers={handlers}
                    value={value}
                    setValue={setValue}
                    handleButton={handleButton}
                />
            </ControlBar>
            <ButtonWithSound sound='./sound/click2.mp3'
                disabled={+value <= 0 ? true : false}
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => handleButton()}>
                Проверим
            </ButtonWithSound>
        </>
    );
}

export default ImModePanel;

