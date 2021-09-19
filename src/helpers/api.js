const BASE_URL = process.env.REACT_APP_API_URL;

// Melihat response dan mengembalikan status sesuai response
const getResponse = (res) => res.json()
    .catch(() => null)
    .then(data => ({
        ok: res.ok,
        body: data
    }));

// Check hasil response sebelumnya, return promise reject jika data sebelumnya gagal di ambil
const checkResponse = (res) => res.ok ? res : Promise.reject(res);

// Mengembalikan response sesuai body
const prepareResponse = (res) => res.body;

const get = (url) => {
    return fetch(`${BASE_URL}${url}`)
        .then(getResponse)
        .then(checkResponse)
        .then(prepareResponse);
};

const post = (url, data) => {
    return fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(getResponse)
        .then(checkResponse)
        .then(prepareResponse);
};

const put = (url, data) => {};

const destroy = (url) => {
    return fetch(`${BASE_URL}${url}`, {
        method: 'DELETE'
    })
        .then(getResponse)
        .then(checkResponse)
        .then(prepareResponse);
};

export { get, post, put, destroy };
