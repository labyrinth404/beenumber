import React, { useContext, useRef } from 'react';
import { Card, NumberInput, Badge, Button, Group, ActionIcon, NumberInputHandlers, rem } from '@mantine/core';
import Result from '../Result';
import ParametersContext from '../../context/ParametersContext';
import { IActionTypeParameters } from '../../constant';

function GameDisplay() {
    const { state, dispatch } = useContext(ParametersContext);
    const handlers = useRef<NumberInputHandlers>();
    const minusRef = useRef();

    let number = state!.variant;

    const handleButton = () => {
        if (dispatch) {
            dispatch({
                type: IActionTypeParameters.setVariant,
                payload: number
            })
        }
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
            {/*             <NumberInput
                autoFocus
                placeholder="Твое число"
                label="Твое число"
                withAsterisk
                min={state?.min}
                max={state?.max}
                onChange={(num) => {
                    if (typeof num === 'number') {
                        number = num
                    }
                }}
            /> */}
            <Group spacing={5} position='center' mt="md" mb="xs">
                <ActionIcon size={42} variant="default" onClick={() => handlers.current?.decrement()}>
                    –
                </ActionIcon>
                <NumberInput
                    autoFocus
                    hideControls
                    value={number < 0 ? undefined : number}
                    onChange={(num) => {
                        if (typeof num === 'number') {
                            number = num
                        }
                    }}
                    handlersRef={handlers}
                    min={state?.min}
                    max={state?.max}
                    step={1}
                    styles={{ input: { width: rem(54), textAlign: 'center' } }}
                />
                <ActionIcon size={42} variant="default" onClick={() => handlers.current?.increment()}>
                    +
                </ActionIcon>
            </Group>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => handleButton()}>
                Проверим
            </Button>
        </>
    );
}

export default GameDisplay;
