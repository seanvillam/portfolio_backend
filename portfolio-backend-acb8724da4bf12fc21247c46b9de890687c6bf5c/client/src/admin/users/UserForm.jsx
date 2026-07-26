import { useState, useEffect } from "react";
import { create, read, update } from "./api-users";
import { useNavigate, useParams } from "react-router-dom";

export default function UserForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    useEffect(() => {

        if (id) {
            loadUser();
        }

    }, []);

    const loadUser = async () => {

        const data = await read(id);

        if (data) {
            setValues({
                firstname: data.firstname || "",
                lastname: data.lastname || "",
                email: data.email || "",
                password: "",
            });
        }
    };

    const handleChange = (name) => (event) => {

        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const submit = async (event) => {

        event.preventDefault();

        if (id) {

            await update(id, values);

        } else {

            await create(values);

        }

        navigate("/admin/users");
    };

    return (
        <div className="container mt-4">

            <h2>{id ? "Edit User" : "Add User"}</h2>

            <form onSubmit={submit}>

                <div className="mb-3">

                    <label>First Name</label>

                    <input
                        type="text"
                        className="form-control"
                        value={values.firstname}
                        onChange={handleChange("firstname")}
                    />

                </div>

                <div className="mb-3">

                    <label>Last Name</label>

                    <input
                        type="text"
                        className="form-control"
                        value={values.lastname}
                        onChange={handleChange("lastname")}
                    />

                </div>

                <div className="mb-3">

                    <label>Email</label>

                    <input
                        type="email"
                        className="form-control"
                        value={values.email}
                        onChange={handleChange("email")}
                    />

                </div>

                <div className="mb-3">

                    <label>Password</label>

                    <input
                        type="password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange("password")}
                    />

                </div>

                <button className="btn btn-success">

                    Save User

                </button>

            </form>

        </div>
    );
}