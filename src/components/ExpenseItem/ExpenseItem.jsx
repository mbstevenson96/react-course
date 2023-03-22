import styles from './ExpenseItem.module.css'

const ExpenseItem = (props) => {

  return ( 
    <div className={styles.expenseItem}>
      <div>{props.expenses.date.toISOString()}</div>
      <div className={styles.expenseItemDescription}>
        <h2>{props.expenses.title}</h2>
        <div className={styles.expenseItemPrice}>${props.expenses.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;