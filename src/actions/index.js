import axios from "axios";

export const darkMode = (bool) =>{
    return {
        type: 'DARK_MODE',
        payload: bool
    }
}

export const fetchCountries = () =>{
    return async dispatch =>{
        const response = await axios.get("https://restcountries.eu/rest/v2/all");
        
        dispatch({type: 'FETCH_COUNTRIES', payload: response.data})
    }
}

export const updateCountires = (countries) =>{
    return{
        type: 'UPDATE_COUNTRIES',
        payload: countries
    }
}

export const updateDetails = (country)=>{
    return {
        type: 'UPDATE_DETAILS',
        payload: country
    }
}

