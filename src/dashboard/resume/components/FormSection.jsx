import React, { useState } from 'react'
import PersonalDetail from '/src/dashboard/resume/components/forms/PersonalDetails.jsx'
import { ArrowRight, LayoutGrid,ArrowLeft } from 'lucide-react'
import { Button } from '/src/components/ui/button'
import Summery from '/src/dashboard/resume/components/forms/Summery.jsx';
import Experience from '/src/dashboard/resume/components/forms/Experience.jsx';
// import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
// import Summery from './forms/Summery';
// import Experience from './forms/Experience';
// import Education from './forms/Education';
// import Skills from './forms/Skills';
// import { Link, Navigate, useParams } from 'react-router-dom';
// import ThemeColor from './ThemeColor';

function FormSection() {
    const [activeFormIndex,setActiveFormIndex]=useState(1);
    const [enableNext,setEnableNext]=useState(false);
  return(
    <div>
        <div className="flex justify-between items-center">
            <Button variant="outline" size="sm" 
            className="flex gap-2"> <LayoutGrid/> Theme</Button>
            <div className="flex gap-2">
            {activeFormIndex>1
            &&<Button size="sm" 
            onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button> }
            <Button 
            disabled={!enableNext}
            className="flex gap-2" size="sm"
            onClick={()=>setActiveFormIndex(activeFormIndex+1)}
            > Next 
            <ArrowRight/> </Button>
            </div>
        </div>
        
        {/* Personal details */}
        {activeFormIndex==1?    
        <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==2?
            <Summery enabledNext={(v)=>setEnableNext(v)}/>
        :activeFormIndex==3?
        <Experience />      
        :null
        }
        
        
        {/* Expe */}

        {}
        
        {}
    </div>
  )
}

export default FormSection