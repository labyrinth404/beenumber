import React, { useContext } from "react";
import { Button, Group, Image } from '@mantine/core';
import ModeContext from '../../context/ModeContext';
import { menuShemes } from '../../constant';

function ModeDisplay() {
    const { dispatch } = useContext(ModeContext);

    return (
        <Group position="center">
            {menuShemes.map((e) => {
                return (
                    <div key={e.text} className={e.class} onClick={() => {
                        if (dispatch) {
                            dispatch(e.params);
                        }
                    }}>
                        <Image width={e.width} height={e.height} src={e.icon} />
                        <Button fullWidth variant="gradient" gradient={e.gradient} >
                            {e.text}
                        </Button>

                    </div>
                )
            })}
        </Group >
    )
};

export default ModeDisplay;