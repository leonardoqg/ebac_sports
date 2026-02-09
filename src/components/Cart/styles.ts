import styled from 'styled-components';

export const Container = styled.div`
    padding: 16px;
    border: 1px solid #ccc;
    margin-top: 20px;
    `;

    export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    `;

    export const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 6px 12px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;