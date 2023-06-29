import React from "react";
import { Card } from "@mantine/core";

function ResultBar({ children }: any) {
    return (
        <Card.Section>
            {children}
        </Card.Section>
    )
};

export default ResultBar;