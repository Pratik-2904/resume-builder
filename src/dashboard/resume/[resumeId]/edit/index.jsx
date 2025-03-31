import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '/src/dashboard/resume/components/FormSection';
import ResumePreview from '/src/dashboard/resume/components/ResumePreview';
import dummy from '/src/data/dummy';
import { ResumeInfoContext } from '/src/context/ResumeInfoContext';

function EditResume() {
    const params = useParams();
    const [resumeInfo,setResumeInfo]=useState(dummy);

    useEffect(()=>{
        console.log(params)
        // GetResumeInfo();
        setResumeInfo(dummy);   
    },[])

    return (

        <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
            <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            {}
                <FormSection/>
            {}
            <ResumePreview/>
            </div>
        </ResumeInfoContext.Provider>
        
    )
}

export default EditResume