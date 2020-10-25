import React, {useState} from 'react';
import { List, Avatar, Modal, Input } from 'antd';
import db from '../../firebase';
import {
    DeleteFilled,
    EditFilled
  } from '@ant-design/icons';
import firebase from 'firebase';

export default function Todo(props) {

    const [showModal, setShowModal] = useState(false);
    const [inputUpdate, setInputUpdate] = useState(props.txt.todo);

    const updateTodo = () => {
        db.collection('todos').doc(props.txt.id).set({ 
            todo: inputUpdate,
            modif: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true} ) 
        console.log(props.txt.id);
        setShowModal(false)
    }

    return (
        <>
        <List.Item>
            <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{props.txt.todo}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <EditFilled style={{cursor: 'pointer', fontSize: '1rem', color: 'blue', marginRight: '20px'}} onClick={event => setShowModal(true)}/>
            <DeleteFilled style={{cursor: 'pointer', fontSize: '1rem', color: 'red'}} onClick={event => db.collection('todos').doc(props.txt.id).delete()}/>
        </List.Item>
        <Modal
                title="Basic Modal"
                visible={showModal}
                onOk={updateTodo}
                onCancel={() => setShowModal(false)}
                >
            <Input placeholder="Basic usage" value={inputUpdate} onChange={event => setInputUpdate(event.target.value)}/>
        </Modal>
        </>
    )
}
