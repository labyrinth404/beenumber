import React, { useEffect, useState, useContext, useRef } from 'react';
import useSound from 'use-sound';
import { Card, NumberInput, Badge, Button, Group, ActionIcon, NumberInputHandlers, rem } from '@mantine/core';
import Result from '../Result';
import ParametersContext from '../../context/ParametersContext';
import { IActionTypeParameters } from '../../constant';
import backgroundMusic from '../../sound/background.mp3';

function GameDisplay() {
    const { state, dispatch } = useContext(ParametersContext);
    const handlers = useRef<NumberInputHandlers>();
    const ref1 = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [value, setValue] = useState(state!.variant);

    const [playBckg, { stop: stopBckg }] = useSound(backgroundMusic);


    const handleButton = () => {
        if (dispatch) {
            dispatch({
                type: IActionTypeParameters.setVariant,
                payload: value
            });
            setValue(-1);
            ref1.current.focus();
        };
    };


    useEffect(() => {
        setTimeout(() => playBckg(), 1000);
    }, []);

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
                <ActionIcon disabled={state?.stackVariant.length === state?.interation} size={42} variant="default" onClick={() => handlers.current?.decrement()}>
                    –
                </ActionIcon>
                <NumberInput
                    ref={ref1}
                    disabled={state?.stackVariant.length === state?.interation}
                    autoFocus
                    hideControls
                    defaultValue={value <= 0 ? undefined : value}
                    onChange={(num) => {
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
                <ActionIcon disabled={state?.stackVariant.length === state?.interation} size={42} variant="default" onClick={() => handlers.current?.increment()}>
                    +
                </ActionIcon>
            </Group>
            <Button disabled={value <= 0 ? true : false} variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => handleButton()}>
                Проверим
            </Button>
        </>
    );
}

export default GameDisplay;
