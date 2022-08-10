export const apiGet = async (url, data={}) => {
    return axios.get(url, {
        params:data
    }).then(response=>{
        return response.data;
    }).catch(error=>{
        return Promise.reject(error.response);
    });
}

export const apiPost = async (url, data, params = {}) => {
    return axios.post(url, data, {
        params: params
    }).then(res => {
        return res.data;
    }).catch(error => {
        return Promise.reject(error.response);
    });
}

export const apiPut = async (url, data, params = {}) => {
    return axios.put(url, data, {
        params: params
    }).then(res => {
        return res.data;
    }).catch(error => {
        return Promise.reject(error.response);
    });
}

export const apiDelete = async (url, data = {}) => {
    return axios.delete(url, data).then(res => {
        return res;
    }).catch(error => {
        return Promise.reject(error.response);
    });
}
