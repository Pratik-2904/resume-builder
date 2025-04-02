import React, { useContext, useState } from 'react'
import { Toolbar, BtnBold, BtnItalic , EditorProvider, Editor, BtnUnderline, BtnStrikeThrough, Separator, BtnNumberedList, BtnBulletList, BtnLink, BtnClearFormatting, HtmlButton, BtnStyles } from 'react-simple-wysiwyg';

function RichTextEditor({onRichTextEditorChange}) {
    const [value,setValue]=useState();
    return (
        <div>
            <EditorProvider>
            <Editor value={value} onChange={(e)=>{
                setValue(e.target.value)
                onRichTextEditorChange(e)
            }}>
            
        <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
        </Toolbar>

            </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditor