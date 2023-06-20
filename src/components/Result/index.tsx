import React, { useContext } from "react";
import './style.css';
import ParametersContext from '../../context/ParametersContext';
import { textResult, colorResult } from '../../constant';
import { Group, Kbd, Stack } from '@mantine/core';

type result = 'start' | 'win' | 'under' | 'more' | 'lose';

function Result() {
    const { state } = useContext(ParametersContext);

    const displayResult = (type: result): string => {
        if (textResult[type] === textResult.lose) {
            return `Ты ${textResult.lose}. Это было ${state?.selectNumber}`
        }
        return textResult[type];
    }

    const variant = (): result => {
        if (typeof state?.variant === 'number' && typeof state.selectNumber === 'number') {
            if (state.variant === state.selectNumber) {
                return 'win'
            }
            if (state.stackVariant.length === state.interation) {
                return 'lose';
            }
            if (state.variant < 0) {
                return 'start';
            } else if (state.variant > state.selectNumber) {
                return 'under';
            } else if (state.variant < state.selectNumber) {
                return 'more';
            }
        }
        return 'start'
    }

    return (
        <div className="result" style={{ color: colorResult[variant()] }}>
            <Stack>
                <Group position="center">
                    {state?.stackVariant.map((variant, index) => <Kbd key={index}>{variant}</Kbd>)}
                </Group>
                {displayResult(variant())}
            </Stack>
        </div>
    )
}
export default Result;