import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditResume() {
    const params = useParams();

    useEffect(()=>{
        console.log(params)
        // GetResumeInfo();
    },[])

    return (
        <div>EditResume</div>
    )
}

export default EditResume