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

const post = (url, data) => {};

const put = (url, data) => {};

const destroy = (url) => {};

export { get, post, put, destroy };
