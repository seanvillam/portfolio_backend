import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "./api-references";

export default function ReferenceList() {

    const [references, setReferences] = useState([]);

    useEffect(() => {
        loadReferences();
    }, []);

    const loadReferences = async () => {
        const data = await list();

        if (data) {
            setReferences(data);
        }
    };

    const deleteReference = async (id) => {

        if (!window.confirm("Delete this reference?")) return;

        await remove(id);
        loadReferences();
    };

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-3">
                <h2>References</h2>

                <Link
                    to="/admin/references/create"
                    className="btn btn-primary"
                >
                    Add Reference
                </Link>
            </div>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Company</th>
                        <th width="200">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {references.map(reference => (

                        <tr key={reference._id}>

                            <td>{reference.name}</td>

                            <td>{reference.position}</td>

                            <td>{reference.company}</td>

                            <td>

                                <Link
                                    to={`/admin/references/edit/${reference._id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteReference(reference._id)}
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