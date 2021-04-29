import React, {useState} from 'react';


interface Props {
    addTodo: AddTodo;
  }


export const AddTodoForm: React.FunctionComponent<Props> = ({ addTodo }) => {
    const [text,setText] = useState('');
    return(
        <ul>
            <input type="text" 
                value={text}
                onChange={e => {
                    e.preventDefault();
                    setText(e.target.value);}}/>
            <button
                type="button"
                onClick={e => {
                e.preventDefault();
                addTodo(text);
                setText('');
                }}>
                Add Todo
            </button>
        </ul>
    )
}