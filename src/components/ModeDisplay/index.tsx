import React, { useContext } from "react";
import { Button, Group, Image } from '@mantine/core';
import { GRADIENT, IActionTypeMode, Mode } from '../../constant';

import ModeContext from '../../context/ModeContext';
function ModeDisplay() {
    const { dispatch } = useContext(ModeContext);

    const handleImOracle = () => {
        if (dispatch) {
            dispatch({
                type: IActionTypeMode.setMode,
                payload: Mode.imOracleSetting
            })
        }
    };

    const handleYouOracle = () => {
        if (dispatch) {
            dispatch({
                type: IActionTypeMode.setMode,
                payload: Mode.youOracle
            })
        }
    };

    return (
        <>
            <Group position="center">
                <div className="img-menu" onClick={() => handleImOracle()}>
                    <Image width={200} height={200} src='./img/mode1.svg' />
                    <Button fullWidth variant="gradient" gradient={GRADIENT.imOracle} >
                        Угадаю
                    </Button>

                </div>
                <div className="img-menu disabled" onClick={() => false && handleYouOracle()}>
                    <Image width={200} height={200} src='./img/mode2.svg' />
                    <Button disabled fullWidth variant="gradient" gradient={GRADIENT.youOracle} >
                        Загадываю
                    </Button>

                </div >

            </Group >

        </>
    )
};

export default ModeDisplay;