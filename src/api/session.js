import axios from 'axios';

const API_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_API_URL
        : 'http://localhost:5000/api/v1.0';

const fetchSessionDays = async () => {
    try {
        return await axios.get(`${API_URL}/session_days`);
    } catch (err) {
        return err;
    }
};

export { fetchSessionDays };
