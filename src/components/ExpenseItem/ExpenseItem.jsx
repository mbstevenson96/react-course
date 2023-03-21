import styles from './ExpenseItem.module.css'

const ExpenseItem = () => {
  return ( 
    <div className={styles.expenseItem}>
      <div>March 28, 2021</div>
      <div className={styles.expenseItemDescription}>
        <h2>Car Insurance</h2>
        <div className={styles.expenseItemPrice}>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;