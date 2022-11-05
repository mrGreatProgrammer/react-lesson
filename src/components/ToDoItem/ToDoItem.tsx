import React from "react";

const ToDoItem = ({title, id, completed}) => {
    const [checked, setChecked] = React.useState(completed);

    const cls = ['todo'];

    if (checked) {
        cls.push("completed")
    }

  return (
    <li className={cls.join(" ")} >
      <label>
        <input type="checkbox"
        checked={checked}
        onChange={()=>setChecked(!checked)}
        />
        <span>{title}</span>
      </label>
    </li>
  );
};

export default ToDoItem;
