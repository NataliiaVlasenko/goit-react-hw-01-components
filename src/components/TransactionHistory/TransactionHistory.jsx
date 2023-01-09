import { Transaction } from './Transaction';
import { TransactionTable, TransactionTableBody,TableTitle } from './Transactions.styled';

export const TransactionHistory = ({items}) => {
  return (
    <TransactionTable>
      <TableTitle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableTitle>

      <TransactionTableBody>
      {items.map(item => (
          <Transaction key={item.id} item = {item}>    
          </Transaction>
        ))}
      </TransactionTableBody>
    </TransactionTable>
  );
};
