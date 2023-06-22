import React, { useContext, useState } from 'react';
import useSound from 'use-sound';
import { Card, NumberInput, SegmentedControl, Text } from '@mantine/core';
import SubModeContext from '../../context/SubModeContext';
import ModeContext from '../../context/ModeContext';
import ParametersContext from '../../context/ParametersContext';
import { Mode, IActionTypeMode, IActionTypeParameters, complexity, complexityName, complexityShemes, heightIcon, DEFAULT_MAX } from "../../constant"
import type { dataSwitch } from "../../types";
import ButtonWithSound from '../ButtonWithSound';
import { calculateIteration } from '../../utils';
import Complexity from '../Complexity';

const data: dataSwitch[] = Object.keys(complexity).map((name) => {
    return (
        {
            value: complexity[name as complexity],
            label: <Complexity name={name} />

        }
    )
});

function StartDisplay() {
    const [play] = useSound('./sound/click.mp3', { volume: 0.3 })
    const { state, dispatch } = useContext(SubModeContext);
    const { dispatch: dispatchMode } = useContext(ModeContext);
    const { dispatch: dispatchParam } = useContext(ParametersContext);
    const [value, setValue] = useState(state?.maxСonstraint);

    const saveForm = (mode: complexity) => {
        if (dispatch) {
            dispatch({
                type: IActionTypeMode.setMode,
                payload: complexityShemes[mode]
            });
        }
        play();
    };

    const startGame = () => {
        if (dispatchParam && dispatchMode) {
            dispatchParam({
                type: IActionTypeParameters.setup,
                payload: {
                    min: 1,
                    max: value,
                    interation: calculateIteration(value as number, complexityShemes[state!.complexity].interationInc),
                    selectNumber: 0,
                    variant: -1,
                    stackVariant: [],
                }
            });
            dispatchMode({
                type: IActionTypeMode.setMode,
                payload: Mode.imOracle
            });
        }
    }

    const defaultValue = (num: any): number => {
        if (typeof num === 'number') {
            if (state?.complexity === complexity.hard) {
                return DEFAULT_MAX.HARD;
            } else if (state?.complexity === complexity.lucky) {
                return DEFAULT_MAX.LUCKY
            }
            return num;
        }
        return DEFAULT_MAX.MIN_VALUE;
    }

    return (
        <>
            <Card.Section>
                <Text >
                    Настройки игры
                </Text>
            </Card.Section>
            <NumberInput
                description={`В режиме ${complexityName[state?.complexity as complexity]} можно выбрать от 16 до ${state?.maxСonstraint ? state?.maxСonstraint : 'бесконечности'}`}
                value={value}
                placeholder="Максимальное число"
                label="Максимальное число"
                min={DEFAULT_MAX.MIN_VALUE}
                max={state?.maxСonstraint ? state?.maxСonstraint : undefined}
                onChange={(n: number) => setValue(n)}
            />
            <SegmentedControl
                data={data}
                onChange={(mode) => saveForm(mode as complexity)}
            />
            <ButtonWithSound variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => startGame()}>
                Поехали
            </ButtonWithSound>
        </>
    );
}

export default StartDisplay;
