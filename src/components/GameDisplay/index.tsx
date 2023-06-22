import React, { useState, useContext, useRef } from 'react';
import useSound from 'use-sound';
import { Card, NumberInput, Badge, Group, NumberInputHandlers, rem } from '@mantine/core';
import Result from '../Result';
import ActionIconWithSound from '../ActionIconWithSound';
import ButtonWithSound from '../ButtonWithSound';
import ParametersContext from '../../context/ParametersContext';
import { IActionTypeParameters } from '../../constant';

function GameDisplay() {
    const { state, dispatch } = useContext(ParametersContext);
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
            <Card.Section>
                <Result />
                {/* {`${state?.variant} против ${state?.selectNumber}`} */}
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Badge color="pink" variant="light">
                    {`Попытока: ${state?.stackVariant.length}`}
                </Badge>
                <Badge color="green" variant="light">
                    {`Всего: ${state?.interation}`}
                </Badge>
            </Group>
            <Group spacing={5} position='center' mt="md" mb="xs">
                <ActionIconWithSound disabled={state?.stackVariant.length === state?.interation} size={42} variant="default" onClick={() => handlers.current?.decrement()}>
                    –
                </ActionIconWithSound>
                <NumberInput
                    ref={ref1}
                    disabled={state?.stackVariant.length === state?.interation}
                    autoFocus
                    hideControls
                    defaultValue={value <= 0 ? undefined : value}
                    onChange={(num) => {
                        play();
                        if (typeof num === 'number') {
                            setValue(num);
                        }
                    }}
                    handlersRef={handlers}
                    min={state?.min}
                    max={state?.max}
                    step={1}
                    styles={{ input: { width: rem(54), textAlign: 'center' } }}
                />
                <ActionIconWithSound disabled={state?.stackVariant.length === state?.interation} size={42} variant="default" onClick={() => handlers.current?.increment()}>
                    +
                </ActionIconWithSound>
            </Group>
            <ButtonWithSound sound='./sound/click2.wav' disabled={value <= 0 ? true : false} variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => handleButton()}>
                Проверим
            </ButtonWithSound>
        </>
    );
}

export default GameDisplay;

