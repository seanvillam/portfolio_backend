import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "./api-references";

export default function AddReference() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        position: "",
        company: "",
        testimonial: ""
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

        navigate("/admin/references");
    };

    return (
        <div className="container mt-4">

            <h2>Add Reference</h2>

            <form onSubmit={submit}>

                <input
                    className="form-control mb-3"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    name="position"
                    placeholder="Position"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    name="company"
                    placeholder="Company"
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-3"
                    rows="5"
                    name="testimonial"
                    placeholder="Testimonial"
                    onChange={handleChange}
                />

                <button className="btn btn-success">
                    Add Reference
                </button>

            </form>

        </div>
    );
}