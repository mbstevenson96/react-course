import styles from './ExpenseItem.module.css'

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 2, 21)
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 294.67

  return ( 
    <div className={styles.expenseItem}>
      <div>{expenseDate.toISOString()}</div>
      <div className={styles.expenseItemDescription}>
        <h2>{expenseTitle}</h2>
        <div className={styles.expenseItemPrice}>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;