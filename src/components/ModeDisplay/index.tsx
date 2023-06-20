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
                payload: Mode.imOracle
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
                    <Image width={200} height={200} src='./day22-owl.svg' />
                    <Button fullWidth variant="gradient" gradient={GRADIENT.imOracle} >
                        Угадаю
                    </Button>

                </div>
                <div className="img-menu" onClick={() => handleYouOracle()}>
                    <Image width={200} height={200} src='./day27-my-robot.svg' />
                    <Button fullWidth variant="gradient" gradient={GRADIENT.youOracle} >
                        Загадываю
                    </Button>

                </div >

            </Group >

        </>
    )
};

export default ModeDisplay;