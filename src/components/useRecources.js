import  { useState, useEffect } from 'react';
import axios from 'axios';

// can reuse this anywhere in the project
const useResources = resource => {
    const [resources, setResource] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResource(response.data);
    }

    //need to fetch stream intially and whenever components is updated
    //useEffect runs for both componentDidMount and componentDidUpdate
    useEffect(() => {
        fetchResource(resource);
    },[resource]);

    return resources;
}

export default useResources;