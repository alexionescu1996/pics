import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID N4xuZczIomR66R2vvoJ9eknuLsKFQ9mTR_vmD-aacaU'
    }
});