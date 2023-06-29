import React from 'react';
import ImModePanel from '../ImModePanel';
import YouModePanel from '../YouModePanel';
import { Mode } from '../../constant';
import type { GameProps } from '../../types';

function GameDisplay({ mode }: GameProps) {
    switch (mode) {
        case Mode.imOracle:
            return <ImModePanel />
        case Mode.youOracle:
            return <YouModePanel />
        default: return <></>
    };
}

export default GameDisplay;