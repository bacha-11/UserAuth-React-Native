import { create } from "apisauce";


const apiClient = create({
    baseURL: 'http://192.168.18.29:3000',
})

export default apiClient;