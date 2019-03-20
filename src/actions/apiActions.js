import axios from 'axios';
import { listAllJobs, listAllHairs } from '../utils/listValues';

const SET_VILLAGE = 'SET_VILLAGE';
const SET_JOBS = 'SET_JOBS';
const SET_HAIR = 'SET_HAIR';
const SET_ERROR = 'SET_ERROR';
const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const getVillage = () => dispatch => {
    const request = axios.get(url);

    return request.then(data => {
        const apiData = data.data.Brastlewark; 
        dispatch(setVillage(apiData));
        dispatch(setJobs(apiData));
        dispatch(setHair(apiData));
    }).catch((error)=>{
        console.log('error produced', error);
        dispatch(setError(error.response));
    });
};

export const setVillage = village => ({
    type: SET_VILLAGE,
    village
});

export const setJobs = data => ({
    type: SET_JOBS,
    professions: listAllJobs(data)
});

export const setHair = data => ({
    type: SET_HAIR,
    hair_colors: listAllHairs(data)
});

export const setError = error => ({
    type: SET_ERROR,
    error
});