import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../component/counter';
import { decrease, increase, setDiff } from '../modules/counter';
const CounterContainer = (props) => {

    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }))

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
};

export default CounterContainer;