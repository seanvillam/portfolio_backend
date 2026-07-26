import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "./api-services";

export default function AddService() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        await create(values);
        navigate("/admin/services");
    };

    return (
        <div className="container mt-4">

            <h2>Add Service</h2>

            <form onSubmit={submit}>

                <input
                    className="form-control mb-3"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-3"
                    name="description"
                    placeholder="Description"
                    rows="5"
                    onChange={handleChange}
                />

                <button className="btn btn-success">
                    Add Service
                </button>

            </form>

        </div>
    );
}