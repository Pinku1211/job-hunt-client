import { useEffect } from "react";
import { useState } from "react";


const useJobs = () => {
    const [jobs, setJobs] = useState([]);
    // https://job-hunt-final-server.vercel.app
    
    useEffect(() => {
        fetch('https://job-hunt-final-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return [jobs];
};

export default useJobs;