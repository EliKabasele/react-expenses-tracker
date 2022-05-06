import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    // const [userInput, setUserInput] = useState({
    //     titleInput: '',
    //     amountInput: '',
    //     dateInput: ''
    // })

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value);

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         titleInput: event.target.value
        //     }
        // })
    }


    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value);

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amountInput: event.target.value
        //     }
        // })
    }


    const dateChangeHandler = (event) => {
        setDateInput(event.target.value);

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         dateInput: event.target.value
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: titleInput,
            amount: +amountInput,
            date: new Date(dateInput)
        }

        // reset the form
        setTitleInput('');
        setAmountInput('')
        setDateInput('')

        props.onSaveExpenseData(expenseData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={titleInput}
                        onChange={titleChangeHandler} />
                </div>


                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={amountInput}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={dateInput}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancell}>Cancel</button>
            </div>
        </form>

    )
}

export default ExpenseForm