import React from "react";
import { Text } from "@mantine/core";
import Complexity from "../Complexity";

function ComplexityBar({ max, name }: any) {
    return (
        <div className='subModeGameStatus'>
            <Complexity name={name} />
            <Text fz="xs" c="dimmed">{`Угадай число от 1 до ${max}`}</Text>
        </div>
    )
};

export default ComplexityBar;