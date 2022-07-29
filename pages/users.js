import UserCard from "../componets/UserCard/UserCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchTodos } from '../redux/usersSlices';
import Loading from "../componets/Loading";

export default function Users() {
    const { value, loading } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div className="container text-center">
            <h3>Users</h3>
            <div className="row">
                <div className="col-4 offset-4">
                    <div className="list-group text-start">
                        {loading ? <Loading></Loading>
                            :
                        value.map((item, key) => {
                            return (
                                <UserCard key={key} {...item}></UserCard>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
