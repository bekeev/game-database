import React from 'react';
import { Placeholder, Table as BootstrapTable } from 'react-bootstrap';
import { TableFilter } from './TableFilter/TableFilter';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
`;

type TProps = {
    headRow: React.ReactNode;
    tableData: React.ReactNode;
    isLoading: boolean;
};

export const Table: React.FC<TProps> = ({ headRow, tableData, isLoading }) => {
    const renderTable = () => {
        if (isLoading) {
            return (
                <>
                    <Placeholder xs={6} />
                    <Placeholder className="w-75" />{' '}
                    <Placeholder style={{ width: '25%' }} />
                </>
            );
        }

        return (
            <BootstrapTable striped bordered hover>
                <thead>{headRow}</thead>
                <tbody>{tableData}</tbody>
            </BootstrapTable>
        );
    };

    return (
        <Container>
            <TableFilter />
            {renderTable()}
        </Container>
    );
};
