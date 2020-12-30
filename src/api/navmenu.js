import axios from 'axios';

const API_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_API_URL
        : 'http://localhost:5000/api/v1.0';

// const API_URL = 'https://live-freshdrupalmi.pantheonsite.io/decoupled_kit/menu/main';

const fetchNavMenu = async () => {
    try {
        return await axios.get(`${API_URL}/menu`);
    } catch (err) {
        return err;
    }
};

export { fetchNavMenu };
