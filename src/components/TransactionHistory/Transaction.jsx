import { TransactionRow, TransactionValue } from './Transactions.styled';

export const Transaction = ({item:{type,amount,currency}}) => {

    return (
    <TransactionRow>
      <TransactionValue>{type}</TransactionValue>
      <TransactionValue>{amount}</TransactionValue>
      <TransactionValue>{currency}</TransactionValue>
    </TransactionRow>
    )

}

