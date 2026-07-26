import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "./api-services";

export default function ServiceList() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        const data = await list();

        if (data) {
            setServices(data);
        }
    };

    const deleteService = async (id) => {

        if (!window.confirm("Delete this service?")) return;

        await remove(id);
        loadServices();
    };

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-3">

                <h2>Services</h2>

                <Link
                    to="/admin/services/create"
                    className="btn btn-primary"
                >
                    Add Service
                </Link>

            </div>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th width="200">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {services.map(service => (

                        <tr key={service._id}>

                            <td>{service.title}</td>

                            <td>{service.description}</td>

                            <td>

                                <Link
                                    to={`/admin/services/edit/${service._id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteService(service._id)}
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