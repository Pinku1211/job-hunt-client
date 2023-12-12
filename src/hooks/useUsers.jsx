import { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    // http://localhost:5000
    
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return [users];
};

export default useUsers;