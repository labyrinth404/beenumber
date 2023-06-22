import React, { Children } from 'react';
import useSound from 'use-sound';
import { Button } from '@mantine/core';

function ButtonWithSound(props: any) {
    const { sound = './sound/click3.wav', disabled, color, variant, onClick, children, fullWidth, mt, radius } = props;
    const [playVariant] = useSound(sound, { volume: 0.3 });

    const handleButton = () => {
        onClick();
        playVariant();
    };

    return (
        <Button disabled={disabled} variant={variant} color={color} fullWidth={fullWidth} mt={mt} radius={radius} onClick={() => handleButton()}>
            {children}
        </Button>
    );
};

export default ButtonWithSound;