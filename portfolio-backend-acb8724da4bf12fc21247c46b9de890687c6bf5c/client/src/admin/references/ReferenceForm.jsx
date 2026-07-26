import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create, read, update } from "./api-references";

export default function ReferenceForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [values, setValues] = useState({
        name: "",
        position: "",
        company: "",
        testimonial: "",
    });

    useEffect(() => {
        if (id) {
            loadReference();
        }
    }, []);

    const loadReference = async () => {

        const data = await read(id);

        if (data) {
            setValues({
                name: data.name || "",
                position: data.position || "",
                company: data.company || "",
                testimonial: data.testimonial || "",
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

        navigate("/admin/references");
    };

    return (
        <div className="container mt-4">

            <h2>{id ? "Edit Reference" : "Add Reference"}</h2>

            <form onSubmit={submit}>

                <div className="mb-3">
                    <label>Name</label>
                    <input
                        className="form-control"
                        value={values.name}
                        onChange={handleChange("name")}
                    />
                </div>

                <div className="mb-3">
                    <label>Position</label>
                    <input
                        className="form-control"
                        value={values.position}
                        onChange={handleChange("position")}
                    />
                </div>

                <div className="mb-3">
                    <label>Company</label>
                    <input
                        className="form-control"
                        value={values.company}
                        onChange={handleChange("company")}
                    />
                </div>

                <div className="mb-3">
                    <label>Testimonial</label>
                    <textarea
                        rows="5"
                        className="form-control"
                        value={values.testimonial}
                        onChange={handleChange("testimonial")}
                    />
                </div>

                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Save Reference
                </button>

            </form>

        </div>
    );
}