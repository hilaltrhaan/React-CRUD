import React from 'react'


function TodosCard({ todoTitle, todoContent }) {
  return (
    <>
      <div className="todoCartContainer">
        <h3 className="todoTitle text-white">{todoTitle}</h3>
        {/* <h3 className="todoTitle">{todoUserId}</h3> */}
        <p className="todoContent text-white">{todoContent}</p>
      </div>
    </>
  );

}

export default TodosCard