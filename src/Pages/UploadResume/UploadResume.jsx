import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../components/Provider/AuthProvider';

const UploadResume = () => {
    const {user} = useContext(AuthContext)
    const [title, setTitle]= useState('');
    const [file, setFile] = useState('');
    const axiosSecure = useAxiosSecure();
    const [allImage, setAllImage] = useState(null) 

    useEffect(()=> {
        getPdf()
    },[])

    const getPdf = async () =>{
        const result = await axiosSecure.get("/get-files")
        setAllImage(result.data)
    }

    const userPdf = allImage?.find(pdf => pdf?.email === user?.email)

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', user?.email)
        formData.append('title', title)
        formData.append('file', file)
        console.log(file)
        const result = await axiosSecure.post('/upload-files', formData)
        await new Swal("JobHunt", "File uploaded successfully!");
        console.log(result)

    }

    const showPdf = (pdf) => {
        window.open(`https://job-hunt-final-server.vercel.app/files/${pdf}`, "_blank")
    }

    

    return (
        <div className='min-h-[100vh] py-10 max-w-[85rem] mx-auto'>
            <h1 className="text-3xl text-center text-[#5b0888] font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                Upload Resume
            </h1>
            <p className='text-center text-[#5b0888] text-xl'>Help us to get you the best</p>
            <div className='max-w-3/4 flex justify-center mt-10'>
                <form onSubmit={submitImage} className='p-4 flex flex-col justify-center items-center'>
                    <input onChange={(e)=> setTitle(e.target.value)} required type="text" name="title" placeholder='Title' className='border-2 border-[#5b0888] pl-4 py-2 rounded-lg w-full'/>
                    <input onChange={(e)=> setFile(e.target.files[0])} required type="file" accept='application/pdf' name="resume"  className='border-2 my-2 border-[#5b0888] pl-4 py-2 rounded-lg'/>
                    <button type="submit" className='text-white font-semibold bg-[#5B0888] px-2 py-3 rounded-md w-32'>Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadResume;