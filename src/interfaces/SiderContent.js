import React, {useState} from 'react';
import { Input } from 'antd';
import { Button, message, List} from 'antd';
import Todo from '../Composants/Todo';


export default function SiderContent() {

    const [todos, setTodo] = useState(['Faire du sport', 'Se former à React']);
    const [input, setInput] = useState('');

    const addTodo = event => {
        event.preventDefault();
        if(input){
            setTodo([...todos, input]);
            setInput('');
        }
        else {
            message.error('Ajouter une tâche');
        }
    }

    return (
        <div>
            <h1>React avec Ant design</h1>
            <h2>TODO LIST</h2>
            <Input placeholder="Tâche à faire" value={input} onChange={event => setInput(event.target.value)} />
            <Button type="primary" onClick={addTodo}>Ajouter tâche</Button>
            {/* <ul>
                {todos.map(todo =>
                <Todo todo={todo}/>   
                    )}
            </ul> */}
            <List
                itemLayout="horizontal"
                dataSource={todos}
                renderItem={item => (
                <Todo txt={item}/>
                )}
            />
        </div>
    )
}
