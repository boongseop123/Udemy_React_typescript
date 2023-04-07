import React, { useState } from "react"; //named import
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //새로운 변수 생성

  const clickHandler = () => {
    setTitle("update"); //이 함수를 호출하는 것은 새로운 값을 할당하는 것 아님
    console.log(title); //함수를 호출했을때 사실상 바로 값을 바꾸지 않고 state업데이트 예약
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
