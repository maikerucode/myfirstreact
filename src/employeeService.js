import httpclient from "./httpclient"

const getEmployees = () => {
    return httpclient.get('/employees')
}

export default {getEmployees}