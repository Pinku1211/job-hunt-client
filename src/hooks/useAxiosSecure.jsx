import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://job-hunt-final-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;