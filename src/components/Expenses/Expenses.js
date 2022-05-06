import ExpenseFilter from "./ExpenseFilter"
import Card from "../UI/Card"
import './Expenses.css'
import { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2020')

    const addSelectedYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
    }

    const filterExpensesByYear = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={selectedYear}
                onAddSelectedYear={addSelectedYearHandler}
            />
            <ExpensesChart expenses={filterExpensesByYear} />
            <ExpensesList items={filterExpensesByYear} />
        </Card>
    )
}

export default Expenses