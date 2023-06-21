import React, { useState } from 'react';
import useSound from 'use-sound';
import { ActionIcon } from '@mantine/core';

function SoundButton({ sound }: any) {
    const [play, { stop: stop }] = useSound(sound, { volume: 0.1 });
    const [isPlay, setIsPlay] = useState(false);
    const iconSize = 42;

    const handleSound = () => {
        if (isPlay) {
            setIsPlay(false);
            stop();
        } else {
            setIsPlay(true);
            play();
        }
    };

    return (
        <>
            {isPlay ?
                <ActionIcon size={iconSize} variant="default" onClick={() => handleSound()}>
                    <img src='./img/no-audio.png' height={iconSize} />
                </ActionIcon>
                :
                <ActionIcon size={iconSize} variant='light' onClick={() => handleSound()}>
                    <img src='./img/voice.png' height={iconSize} />
                </ActionIcon>
            }
        </>
    )
}

export default SoundButton;