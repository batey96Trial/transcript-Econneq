"use client"
import { Button } from '@/components/ui/button';
import { generatePDF } from '@/lib/pdfGenerator/generatePDF';
import { AttestationDataProps } from '@/lib/pdfGenerator/types/data';
import { useState,useEffect } from 'react';
export default function PDF() {
let [ pdf, setPDF ] = useState<Uint8Array>();


/**Playground to test how dynamic. Use Preview() with or without any of the data */

const blob = pdf && URL.createObjectURL(
  new Blob([new Uint8Array(pdf)], { type: 'application/pdf' })
);


const studentinfo:AttestationDataProps['student'] ={
                    name:'NGUEFACK ALEXANDRA',
                    admission_year: '2024/2025',
                    field: 'Hardwared',
                    issued_location:'Bamenda',
                    level:'200',
                    location:'Douala',
                    matricule:'ddd2d22',
                    parent:'Simbock Emmanuel',
                    specialty:'Hardware Maintenance'
            }
const schoolinfo:AttestationDataProps["school"] = {
                acronym:"The Brains",
                contacts: ['681248724','670397658','654703358',"699845662"],
                director: 'Dr ESONA Robinson',
                authorization: "Authorisation No: 23-09285/L/MINESUP/SG/DDES/ESUP/SDA/AEO",
                socialhandles:{
                    facebook:"the brains university",
                    instagram: "the brains university",
                    website: "www.thebrainsuniversity.org"
                },
                disciplines:["Medical Studies","Engineering & Information Technology","Agriculture & Food Technology"],
                location:"Opposite GrandStand - Great Soppo-Buea,first floor Bicec Building"
            }

function preview({student={},school={}}){
    generatePDF({data:{student:student,school:school}}).then((pdf)=>setPDF(pdf));
}
    return (
        
            <div className="gap-5 flex h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black transition-all ease-in animate-in duration-1000">
                <div className='flex-col'>
            <Button onClick={()=>preview({school:schoolinfo})} className='cursor-pointer items-center flex-col justify-center flex m-4 w-full'>Preview</Button>
            <Button onClick={()=>preview({student:studentinfo,school:schoolinfo})} className='cursor-pointer items-center flex-col justify-center flex m-4 w-full'>with student</Button>
            <Button onClick={()=>preview({})} className=' items-center cursor-pointer flex-col justify-center flex m-4 w-full'>Empty Slate</Button>
                </div>
           { pdf && <iframe src={blob!} className="h-screen w-full" /> } 
        </div>
    );
}