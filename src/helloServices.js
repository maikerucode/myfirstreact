import httpclient from "./httpclient";

const getHello = () => {
    return httpclient.get('/hello');
}

export default {getHello}