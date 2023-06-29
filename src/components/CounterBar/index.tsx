import React from "react";
import { Group, Badge } from "@mantine/core";

function CounterBar({ all, fact }: any) {
    return (
        <Group position="apart" mt="md" mb="xs">
            <Badge color="pink" variant="light">
                {`Попытока: ${fact}`}
            </Badge>
            <Badge color="green" variant="light">
                {`Всего: ${all}`}
            </Badge>
        </Group>
    )
};

export default CounterBar;