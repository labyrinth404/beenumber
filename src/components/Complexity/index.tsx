import React from "react";
import { Text } from '@mantine/core';
import { complexity, complexityName, complexityImg, heightIcon } from "../../constant";

function Complexity(props: any) {
    const { name } = props;
    return (
        <>
            <img src={complexityImg[name as complexity]} height={heightIcon}></img>
            <Text tt="capitalize">{complexityName[name as complexity]}</Text>
        </>
    )
}

export default Complexity;