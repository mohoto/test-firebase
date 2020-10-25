import React from 'react';
import {Input} from 'antd';
import {useDispatch} from 'react-redux';

export default function Name() {

const dispatch = useDispatch();
const handleChange = event => {
    dispatch({
        type: 'UPDATE',
        payload: event.target.value
    })
}


    return (
        <div style={{ marginTop: '30px' }}>
            <Input placeholder="Basic usage" onChange={handleChange}/>
        </div>
    )
}
