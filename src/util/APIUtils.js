export const API_BASE_URL = 'http://localhost:8050/hrm_system';
//export const API_BASE_URL = '/api';
//export const ACCESS_TOKEN = 'accessToken';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    //  console.log(localStorage.getItem(ACCESS_TOKEN));
   /* if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }*/

    const defaults = {
        headers: headers
    };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function getAllLeaveType() {
    return request({
        url: API_BASE_URL + "/leavetype",
        method: 'GET'
    });
}