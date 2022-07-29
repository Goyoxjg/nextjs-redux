import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="container text-center">
            <h3>Counter</h3>
            <div className="row">
                <div className="col-4 offset-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => dispatch(decrement())}
                        >-</button>
                        <button type="button" className="btn btn-outline-primary disabled">{count}</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => dispatch(increment())}
                        >+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
