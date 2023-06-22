import React from 'react';
import useSound from 'use-sound';
import { ActionIcon } from '@mantine/core';

function ActionIconWithSound(props: any) {
    const { disabled, size, variant, onClick, children } = props;
    const [playClick] = useSound('./sound/click_coin.ogg', { volume: 0.3 });

    const handleActionIcon = () => {
        onClick();
        playClick();
    };

    return (
        <ActionIcon disabled={disabled} size={size} variant={variant} onClick={() => handleActionIcon()}>
            {children}
        </ActionIcon>
    );
};

export default ActionIconWithSound;