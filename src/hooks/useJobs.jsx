import { useEffect } from "react";
import { useState } from "react";


const useJobs = () => {
    const [jobs, setJobs] = useState([]);
    // http://localhost:5000
    
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return [jobs];
};

export default useJobs;