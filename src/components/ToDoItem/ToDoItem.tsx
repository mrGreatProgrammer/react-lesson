import React from "react";

interface ToDoItemProps {
  title: string;
  id: number | string;
  completed: boolean;
}

const ToDoItem = ({title, id, completed}: ToDoItemProps) => {
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
