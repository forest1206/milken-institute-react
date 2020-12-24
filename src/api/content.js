import axios from 'axios';

const API_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_API_URL
        : 'http://localhost:5000/api/v1.0';

const fetchContents = async (params) => {
    try {
        return await axios.get(`${API_URL}/search`, {
            params: JSON.stringify(params)
        });
    } catch (err) {
        return err;
    }
};

const fetchTypes = async () => {
    try {
        return await axios.get(`${API_URL}/types`);
    } catch (err) {
        return err;
    }
};

const fetchTopics = async () => {
    try {
        return await axios.get(`${API_URL}/topics`);
    } catch (err) {
        return err;
    }
};

const fetchCenters = async () => {
    try {
        return await axios.get(`${API_URL}/centers`);
    } catch (err) {
        return err;
    }
};

const fetchCentersData = async () => {
    try {
        return await axios.get(`${API_URL}/centers_data`);
    } catch (err) {
        return err;
    }
};

export { fetchContents, fetchTypes, fetchTopics, fetchCenters, fetchCentersData };
