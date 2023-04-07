import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //  enteredTitle: "",
  //  enteredAmount: "",
  //  enteredDate: "",
  //}); //한개의 state로 관리하는 방법

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    //  ...userInput, //모든 값들을 버려지게 하지 않는 새로운 문법
    //  enteredTitle: event.target.value,
    //});
    //setUserInput((prevState)=>{
    //  return {...prevState,enteredTitle:event.target.value};
    //});
  }; //항상 최신 상태의 스냅샷에서 처리를 보장하는 방법의 함수 구문

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
    //  ...userInput, //모든 값들을 버려지게 하지 않는 새로운 문법
    //  enteredAmount: event.target.value,
    //});
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
    //  ...userInput, //모든 값들을 버려지게 하지 않는 새로운 문법
    //  enteredDate: event.target.value,
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault(); //기본요청을 막을 수 있다->페이지 리로드를 막는다
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.001"
            step="0.001"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
