const API = "http://localhost:5000/api/references";

export const list = async () => {
    try {
        const response = await fetch(API);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export const read = async (id) => {
    try {
        const response = await fetch(`${API}/${id}`);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export const create = async (reference) => {
    try {
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reference),
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export const update = async (id, reference) => {
    try {
        const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reference),
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export const remove = async (id) => {
    try {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};