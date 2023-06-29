import React, { useContext, useState } from 'react';
import useSound from 'use-sound';
import { Card, NumberInput, SegmentedControl, Text } from '@mantine/core';
import SubModeContext from '../../context/SubModeContext';
import ModeContext from '../../context/ModeContext';
import ParametersContext from '../../context/ParametersContext';
import { IActionTypeMode, IActionTypeParameters, complexity, complexityName, DEFAULT_MAX, complexityShemes, settingShemes } from "../../constant"
import type { dataSwitch, GameProps } from "../../types";
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

function SettingDisplay({ mode }: GameProps) {
    const [play] = useSound('./sound/click.mp3', { volume: 0.3 });

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
                payload: settingShemes[mode].dispatchParamPayload(value as number, calculateIteration, complexityShemes[state!.complexity].interationInc)
            });
            dispatchMode({
                type: IActionTypeMode.setMode,
                payload: settingShemes[mode].dispatchModePayload
            });
        }
    }

    return (
        <>
            <Card.Section>
                <div className='settingStatus'>
                    <img src={settingShemes[mode].icon} height={40} alt="Настройки игры" style={{ paddingRight: 10 }} />
                    <Text fz="xs" fw={900} style={{ color: 'cadetblue' }}>Настройки игры</Text>
                </div>
            </Card.Section>
            <NumberInput
                description={`В режиме ${complexityName[state?.complexity as complexity]} можно выбрать от 16 до ${state?.maxСonstraint ? state?.maxСonstraint : 'бесконечности'}`}
                value={value}
                placeholder={settingShemes[mode].label}
                label={settingShemes[mode].label}
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

export default SettingDisplay;
