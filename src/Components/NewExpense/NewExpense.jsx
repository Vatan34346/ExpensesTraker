import './NewExpense.css'
import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';

const NewExpense =(props)=>
{

    const SaveExpenseDataHandler =(data)=>{
      
        const expenseData={...data,id:Math.random().toString()}
       // console.log(expenseData);

        props.onAddExpense(expenseData);
        setIsEdiditng(false)
    }

const [isEditing,setIsEdiditng]=useState(false);

const startEditingHandler=()=>{
    setIsEdiditng(true)
}

const cancelStopEditing =()=>{
    setIsEdiditng(false)
}

return (

    <div className="new-expense">
        {!isEditing&&<button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing &&<ExpenseForm canselEditing={cancelStopEditing} onSaveExpenseData={SaveExpenseDataHandler}/>}
    </div>
);
}




export default NewExpense;
