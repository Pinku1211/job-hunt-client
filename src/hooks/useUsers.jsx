import { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    // https://job-hunt-final-server.vercel.app
    
    useEffect(() => {
        fetch('https://job-hunt-final-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return [users];
};

export default useUsers;