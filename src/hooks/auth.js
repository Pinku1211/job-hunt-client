import useAxiosSecure from "./useAxiosSecure";

export const saveUser = async user =>{
    const axiosSecure = useAxiosSecure();
   
    const currentUser = {
        name: user?.displayName,
        email: user?.email,
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data;
}


