import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadData} from '../store/features/moveSlice';

function MoveComp(){
    const {list, titles} = useSelector(state => state.move);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadData(1));
    }, [])
    return (<>
        {titles}
        {list.map((item)=>{
            return <div key={item.tvId}>{item.name}</div>
        })}
    </>)
}

export default MoveComp;