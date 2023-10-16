import axios from 'axios';

export default function API(options) {
    return new Promise((resolve, reject) => {
        axios({
            method: options.method || 'GET',
            url: options.url,
            data: options.data,
            headers: options.headers,
        }).then(
            d => {
                let data = typeof d.data === 'string' ? JSON.parse(d.data) : d.data;
                if (data.success === true) {
                    resolve(options.handleFn ? options.handleFn(data) : data);
                } else {
                    let msg = data.message || data.msg;
                    reject(msg);
                }
            },
            error => {
                reject(error.message);
            }
        );
    });
}
