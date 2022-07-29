import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addTodo, removeTodo, fetchTodos } from "../redux/todoSlice";
import Loading from "../componets/Loading";

export default function Todo() {
    const { value, loading } = useSelector(state => state.todo)
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState('')
    const [showExist, setShowExist] = useState(false);

    const handlerAdd = () => {
        const match = value.filter((item) => item.toLowerCase() === newTodo.toLowerCase());
        if (newTodo === ""){
            return;
        }

        if(match.length > 0) {
           setShowExist(true);
        }
        else {
            dispatch(addTodo(newTodo));
            setNewTodo('')
            setShowExist(false);
        }
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div className="container text-center">
            <h3>ToDo</h3>
            {(loading) ? (
                <Loading></Loading>
            ) : (
                <div className="col-4 offset-4">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="To Do"
                            onChange={(e) => setNewTodo(e.target.value)}
                            value={newTodo}
                            onKeyPress={(e) => e.key === "Enter" && handlerAdd()}
                        />
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                            onClick={() => handlerAdd()}
                        >
                            Add
                        </button>
                    </div>
                    {showExist && (
                        <div className="row mt-3">
                            <div className="alert alert-danger">
                                the value exist in the list
                            </div>
                        </div>
                    )}
                    <div className="col-12">
                        <ul className="list-group">
                            {value.map((item, key) => (
                                <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item}
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => dispatch(removeTodo(item))}
                                    >Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
