import axios from 'axios';

// const API_URL =
//     process.env.NODE_ENV === 'production'
//         ? `${process.env.REACT_APP_API_URL}/menu`
//         : 'http://localhost:5000/api/v1.0/menu';

const API_URL = 'https://live-freshdrupalmi.pantheonsite.io/decoupled_kit/menu/main';

const fetchNavMenu = async () => {
    console.log('fetchNavMenu');
    try {
        let res = await axios.get(`${API_URL}`);
        console.log('res', res);
        return res;
    } catch (err) {
        console.log('___err___', err);
        return err;
    }
};

export { fetchNavMenu };
