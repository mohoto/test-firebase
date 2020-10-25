import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'antd';

export default function Compteur() {

    // const count = useSelector(state => state.count);
    const {count, name} = useSelector(state => ({
        ...state.compteurReducer,
        ...state.nameReducer
    }));
    const dispatch = useDispatch();

    const incremente = () =>{
        dispatch({ 
            type: 'INCR'
        })
    }
    const decremente = () =>{
        dispatch({ 
            type: 'DECR'
        })
    }
    const reset = () =>{
        dispatch({ 
            type: 'RESET'
        })
    }

    return (
        <div>
            <h2>{count}</h2>
            <Button type="primary" onClick={() => dispatch({type: 'INCR'})}>Augmenter</Button>
            <Button type="danger" onClick={decremente}>Diminuer</Button>
            <Button type="info" onClick={reset}>Reset</Button>
            <h3>{name}</h3>
        </div>
    )
}
