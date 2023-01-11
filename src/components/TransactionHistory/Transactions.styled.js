import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin-top: 30px;
  width: 470px;

  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  border-collapse: collapse;
  color: #686461;
`;

export const TransactionRow = styled.tr`
  border-bottom: solid 1px #c6cccce6;
  &:nth-of-type(odd) {
    background: white;
  }
  &:nth-of-type(even) {
    background: #e8e6d1;
  }
`;

export const TransactionTableBody = styled.tbody`
  background-color: silver;
  margin-left: 20px;
`;

export const TableTitle = styled.thead`
  padding: 10px;
  color: white;
  background: #8fd4c1;
  font-size: 18px;
  text-align: left;
  font-weight: bold;
  text-align: center;
`;

export const TransactionValue = styled.td`
  padding: 10px;
  padding-left: 30px;
`;
