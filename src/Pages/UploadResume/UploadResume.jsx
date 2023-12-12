import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UploadResume = () => {

    const [resume, setResume] = useState(null);

    const handleFileChange = (e) => {
      setResume(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('resume', resume);
      console.log(resume)
      if(resume){
        new Swal("JobHunt", "Resume Uploaded Successfully!");
      }
  
    //   try {
    //     const response = await axios.post('/api/upload', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     });
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    };


    return (
        <div className='min-h-[100vh] py-10 max-w-[85rem] mx-auto'>
            <h1 className="text-3xl text-center text-[#5b0888] font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                Upload Resume
            </h1>
            <p className='text-center text-[#5b0888] text-xl'>Help us to get you the best</p>
            <div className='max-w-3/4 flex justify-center mt-10'>
                <form onSubmit={handleSubmit}>
                    <input type="file" name="resume" onChange={handleFileChange} className='border-2 border-[#5b0888] px-4 py-2 rounded-l-lg'/>
                    <button type="submit" className='text-white font-semibold bg-[#5B0888] px-2 py-3 rounded-r-md'>Upload Resume</button>
                </form>
            </div>
        </div>
    );
};

export default UploadResume;