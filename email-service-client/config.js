const devBaseUrl = 'http://localhost:8080';
const prodBaseUrl = 'http://127.0.0.1:8080';

const API_ROOT = 'production' === import.meta.env.MODE ? prodBaseUrl : devBaseUrl;

export default API_ROOT;
