import React from 'react';
import { Form } from 'react-bootstrap';

type TOption = {
    value: number;
    label: string;
};

type SelectProps = {
    selectId: number;
    selectData?: TOption[];
    isLoading: boolean;
    isError: boolean;
    onChange: (id: number) => void;
};

export const TableSelect: React.FC<SelectProps> = ({
    selectId,
    selectData,
    isLoading,
    isError,
    onChange,
}) => {
    return (
        <Form.Select
            disabled={isLoading || isError}
            onChange={(event) => {
                onChange(parseInt(event.target.value));
            }}
            value={selectId}
        >
            <option key="0" value={0}>
                Все
            </option>
            {selectData?.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </Form.Select>
    );
};
