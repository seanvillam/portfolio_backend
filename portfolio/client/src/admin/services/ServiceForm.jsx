import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create, read, update } from "./api-services";

export default function ServiceForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        if (id) {
            loadService();
        }
    }, []);

    const loadService = async () => {

        const data = await read(id);

        if (data) {
            setValues({
                title: data.title || "",
                description: data.description || "",
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

        navigate("/admin/services");
    };

    return (
        <div className="container mt-4">

            <h2>{id ? "Edit Service" : "Add Service"}</h2>

            <form onSubmit={submit}>

                <div className="mb-3">

                    <label>Title</label>

                    <input
                        className="form-control"
                        value={values.title}
                        onChange={handleChange("title")}
                    />

                </div>

                <div className="mb-3">

                    <label>Description</label>

                    <textarea
                        rows="5"
                        className="form-control"
                        value={values.description}
                        onChange={handleChange("description")}
                    />

                </div>

                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Save Service
                </button>

            </form>

        </div>
    );
}