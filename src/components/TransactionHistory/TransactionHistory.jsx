import { Transaction } from './Transaction';
import { TransactionTable, TransactionTableBody,TableTitle } from './Transactions.styled';
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};