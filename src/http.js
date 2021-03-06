import axios from "axios";

// 创建 axios 实例
let http = axios.create({
    headers: { "Content-Type": "application/json" },
    timeout: 60000,
    baseURL: "http://lihuaqi.top:3000/mock/7/api/"
});

// 设置 post、put 默认 Content-Type
http.defaults.headers.post["Content-Type"] = "application/json";
http.defaults.headers.put["Content-Type"] = "application/json";

// 添加请求拦截器
http.interceptors.request.use(
    config => {
        if (config.method === "post" || config.method === "put") {
            config.data = JSON.stringify(config.data);
        }
        // 请求发送前进行处理
        return config;
    },
    error => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 添加响应拦截器
http.interceptors.response.use(
    response => {
        let { data } = response;
        return data.data;
    },
    error => {
        let info,
            { status, statusText, data } = error.response;

        if (!error.response) {
            info = {
                code: 5000,
                msg: "Network Error"
            };
        } else {
            // 此处整理错误信息格式
            info = {
                code: status,
                data: data,
                msg: statusText
            };
        }
        throw info;
    }
);

export default http;
