import axios from "axios";
async function getData() {
    const res = await axios.get('https://6a2c41b03e2b60ab038f9f31.mockapi.io/products')
    return res.data
}

export { getData }