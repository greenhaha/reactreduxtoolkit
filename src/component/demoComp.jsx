import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, asyncIncrement} from '../store/features/counterSlice';
import {loadData, loadMangguoData,loadDataEnd} from '../store/features/moveSlice';
function DemoComp() {
    const {count} = useSelector(state => state.counter);
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();
    const getNextPage = () => {
        const pageNum= counter +1;
        setCounter(pageNum)
        dispatch(loadData(pageNum))};
    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment({step: 1}))}>+</button>
            <hr />
            <button onClick={() => dispatch(asyncIncrement({step: 9}))}>Async +</button>
            <hr/>
            <button onClick={() => getNextPage()}>Load Data</button>
            <hr />
            <button onClick={()=> dispatch(loadDataEnd())}>change move title</button>
            <hr />
            <button onClick={()=> dispatch(loadMangguoData())}>mang guo title</button>
        </>
    )
}

export default DemoComp;