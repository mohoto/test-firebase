import React, {useState, useEffect} from 'react';
import { Input } from 'antd';
import { Button, message, List} from 'antd';
import Todo from '../Todo';
import db from '../../firebase';
import firebase from 'firebase';


export default function SiderContent() {

    const [todos, setTodo] = useState(['Faire du sport', 'Se former à React']);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            console.log(snapshot);
            //console.log(snapshot.docs.map(doc => doc.data()));
            //setTodoconsole.log(snapshot.docs.map(doc => doc.data().todo));
            setTodo(snapshot.docs.map(doc => doc.data().todo))
        })
    }, []);

    //console.log(todos);
    const timestamp =  firebase.firestore.FieldValue.serverTimestamp();
    console.log(timestamp);


    const addTodo = event => {
        event.preventDefault();
        if(input){
            db.collection('todos').add({ 
                todo : input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            //setTodo([...todos, input]);
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
            <Button type="primary" onClick={addTodo} style={{ marginTop: '15px' }}>Ajouter tâche</Button>
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
