import React, { useContext } from 'react'
import { ResumeInfoContext } from '/src/context/ResumeInfoContext'
import PersonalDetailPreview from '/src/dashboard/resume/components/preview/PersonalDetailPreview.jsx'
import SummeryPreview from '/src/dashboard/resume/components/preview/SummeryPreview.jsx'
import ExperiencePreview from '/src/dashboard/resume/components/preview/ExperiencePreview.jsx'
import EducationalPreview from '/src/dashboard/resume/components/preview/EducationalPreview.jsx'
import SkillsPreview from '/src/dashboard/resume/components/preview/SkillsPreview.jsx'

function ResumePreview(){

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
        style={{
            borderColor:resumeInfo?.themeColor
        }}>
            {}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            {/* summary */}
            <SummeryPreview resumeInfo={resumeInfo} />
            {/*PE*/}
            <ExperiencePreview resumeInfo={resumeInfo}/>
            {/* Educational */}
            <EducationalPreview resumeInfo={resumeInfo}/>

            {/* skills */}
            <SkillsPreview resumeInfo={resumeInfo}/>
        </div>
    )
}

export default ResumePreview