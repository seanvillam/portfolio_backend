import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "./api-users";

export default function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await list();

        if (data) {
            setUsers(data);
        }
    };

    const deleteUser = async (id) => {

        if (!window.confirm("Delete this user?")) return;

        await remove(id);
        loadUsers();
    };

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-3">
                <h2>Users</h2>

                <Link
                    to="/admin/users/create"
                    className="btn btn-primary"
                >
                    Add User
                </Link>
            </div>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th width="200">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(user => (

                        <tr key={user._id}>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>

                                <Link
                                    to={`/admin/users/edit/${user._id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteUser(user._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}