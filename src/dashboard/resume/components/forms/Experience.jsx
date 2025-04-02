import React, { useContext, useEffect, useState } from 'react'
import { Input } from '/src/components/ui/input'
import { Button } from '/src/components/ui/button'
// import RichTextEditor from '../RichTextEditor';
import RichTextEditor from '/src/dashboard/resume/components/RichTextEditor.jsx'
import { ResumeInfoContext } from '/src/context/ResumeInfoContext.jsx'
import { useParams } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'

const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:''

}
function Experience() {
    const [experinceList,setExperinceList]=useState([
        formField
    ]);

    // const {resumeInfo, setresumeInfo}=useContext(ResumeInfoContext);
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);

    const handleChange=(index, event)=>{
        const newEntries=experinceList.slice();
        const {name, value} = event.target;
        newEntries[index][name]=value;
        setExperinceList(newEntries);
    }

    const AddNewExperience=()=>{
        setExperinceList([...experinceList, formField])
    }
    const RemoveExperience=()=>{
        setExperinceList(experinceList=>experinceList.slice(0, -1))
    }
    const handleRichTextEditor=(e, name, index)=>{
        const newEntries=experinceList.slice();
        newEntries[index][name]=e.target.value;
        setExperinceList(newEntries);
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            experience:experinceList
        })
    }, [experinceList])

    return(
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Professional Experience</h2>
            <p>Add your Job experience</p>

            <div>
                {experinceList.map((field, index)=>(
                    <div>
                        <div className='grid grid-cols-2 gap-3 border p-3 my-5 ronded-lg'>
                            <div>
                                <label className='text-sx'>Position Title</label>
                                <Input name="title" onChange={(event)=>handleChange(index,event)}/>
                            </div>

                            <div>
                                <label className='text-sx'>Company Name</label>
                                <Input name="companyName" onChange={(event)=>handleChange(index,event)}/>
                            </div>

                            <div>
                                <label className='text-sx'>City</label>
                                <Input name="city" onChange={(event)=>handleChange(index,event)}/>
                            </div>

                            <div>
                                <label className='text-sx'>State</label>
                                <Input name="state" onChange={(event)=>handleChange(index,event)}/>
                            </div>

                            <div>
                                <label className='text-sx'>Start Date</label>
                                <Input type="date" name="startDate" onChange={(event)=>handleChange(index,event)}/>
                            </div>

                            <div>
                                <label className='text-sx'>End Date</label>
                                <Input type="date" name="endDate" onChange={(event)=>handleChange(index,event)}/>
                            </div>

                            <div className='col-span-2'>
                                {}
                                <RichTextEditor
                                onRichTextEditorChange={(event)=>handleRichTextEditor(event, 'workSummery', index)}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-2'>
                <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More experience</Button>
                <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>
                </div>
                {/* <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More experience</Button> */}
                <Button>Save</Button>
            </div>

            </div>
        </div>
    )
}

export default Experience