import React from "react";
import useSound from 'use-sound';
import { Group, NumberInput, rem } from '@mantine/core';
import ActionIconWithSound from "../ActionIconWithSound";

function ControlBar({ children }: any) {
    return (
        <Group spacing={5} position='center' mt="md" mb="xs">
            {children}
        </Group>
    )
}

function ImControl({ disabled, min, max, handlers, value, setValue, refer }: any) {
    const [play] = useSound('./sound/click_coin.mp3', { volume: 0.1 });

    return (
        <>
            <ActionIconWithSound disabled={disabled} size={42} variant="default" onClick={() => handlers.current?.decrement()}>
                –
            </ActionIconWithSound>
            <NumberInput
                ref={refer}
                disabled={disabled}
                autoFocus
                hideControls
                value={value}
                onChange={(num) => {
                    play();
                    if (typeof num === 'number') {
                        setValue(num);
                    }
                }}
                handlersRef={handlers}
                min={min}
                max={max}
                step={1}
                styles={{ input: { width: rem(54), textAlign: 'center' } }}
            />
            <ActionIconWithSound disabled={disabled} size={42} variant="default" onClick={() => handlers.current?.increment()}>
                +
            </ActionIconWithSound>
        </>
    )
}

function YouControl({ disabled, onClick }: any) {
    return (
        <>
            <ActionIconWithSound disabled={disabled} size={42} variant="default" onClick={onClick}>
                <img src='./img/prev.png' height={40} alt="меньше" />
            </ActionIconWithSound>
            <ActionIconWithSound disabled={disabled} size={42} variant="default" onClick={onClick}>
                <img src='./img/ok.png' height={40 - 10} alt="равно" />
            </ActionIconWithSound>
            <ActionIconWithSound disabled={disabled} size={42} variant="default" onClick={onClick}>
                <img src='./img/next.png' height={40} alt="больше" />
            </ActionIconWithSound></>
    )
}

export { ImControl, YouControl };
export default ControlBar;
