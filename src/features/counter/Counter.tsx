// src/features/counter/Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
 
import { increment, decrement } from './counterSlice';
import { AppDispatch, RootState } from '../../store/store';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
