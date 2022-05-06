import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from "react";

const NewExpense = (props) => {

    const [formEditMode, setExpenseFormVisible] = useState(false)

    const saveExpenseDataHandler = (expenseDataInputs) => {
        const expenseData = {
            ...expenseDataInputs,
            id: Math.random().toString()
        }

        props.onAddExpenses(expenseData)

        setExpenseFormVisible(false)

    }

    const formVisibilityHandler = () => {
        setExpenseFormVisible(true)
    }

    const hideForm = () => {
        setExpenseFormVisible(false)
    }

    return (
        <div className='new-expense'>
            {formEditMode && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancell={hideForm} />
            )}

            {!formEditMode && (
                <button
                    type="button"
                    onClick={formVisibilityHandler}
                >
                    Add New Expense
                </button>
            )}
        </div>
    )

}

export default NewExpense