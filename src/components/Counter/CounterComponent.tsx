import {useAppDispatch, useAppSelector} from "../../redux/store";
import {decrement, increment, reset} from "../../redux/slices/counterSlice";

const CounterComponent = () => {
    const {value} = useAppSelector((state) => state.counterSlice);
    const dispatch = useAppDispatch();

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => dispatch(increment(100))}>+ 100</button>
            <button onClick={() => dispatch(decrement(10))}>- 10</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    );
};

export default CounterComponent;