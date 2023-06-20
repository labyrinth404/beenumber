import React, { useContext, useState } from 'react';
import { Card, NumberInput, Button, SegmentedControl, Text } from '@mantine/core';
import SubModeContext from '../../context/SubModeContext';
import ParametersContext from '../../context/ParametersContext';
import { IActionTypeMode, IActionTypeParameters, complexity, complexityName, complexityImg, complexityShemes, heightIcon, DEFAULT_MAX } from "../../constant"
import type { dataSwitch } from "../../types";

const data: dataSwitch[] = Object.keys(complexity).map((name) => {
    return (
        {
            value: complexity[name as complexity],
            label:
                <>
                    <img src={complexityImg[name as complexity]} height={heightIcon}></img>
                    <Text tt="capitalize">{complexityName[name as complexity]}</Text>
                </>
        }
    )
});

function StartDisplay() {
    const { state, dispatch } = useContext(SubModeContext);
    const { dispatch: dispatchParam } = useContext(ParametersContext);
    const [value, setValue] = useState(state?.maxСonstraint);

    const saveForm = (mode: complexity) => {
        if (dispatch) {
            dispatch({
                type: IActionTypeMode.setMode,
                payload: complexityShemes[mode]
            });
        }
    };

    const startGame = () => {
        if (dispatchParam) {
            dispatchParam({
                type: IActionTypeParameters.setMax,
                payload: value
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
                value={defaultValue(state?.maxСonstraint)}
                placeholder="Максимальное число"
                label="Максимальное число"
                withAsterisk
                min={DEFAULT_MAX.MIN_VALUE}
                max={state?.maxСonstraint ? state?.maxСonstraint : undefined}
                onChange={(n: number) => setValue(n)}
            />
            <SegmentedControl
                data={data}
                onChange={(mode) => saveForm(mode as complexity)}
            />
            <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => startGame()}>
                Поехали
            </Button>
        </>
    );
}

export default StartDisplay;
