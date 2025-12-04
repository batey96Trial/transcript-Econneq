'use client'
import MyPDF from "../../ui/pdf/MyPDF";
import { PDFViewer } from "@react-pdf/renderer";
export default function PDF() {
    const courses = {
    fundamentals:[{code:'203',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'},{code:'108',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'},{code:'203',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'}],
    professional:[{code:'273',subject:'maths',credit:2,grade:15.0,nature:'practical'},{code:'108',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'},{code:'574',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'},{code:'203',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'}],
    traversal:[{code:'453',subject:'maths',credit:3.5,grade:15.0,nature:'written'},{code:'203',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'},{code:'108',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'},{code:'203',subject:'Quantitative Thechnics',credit:2,grade:15.0,nature:'written'}]

}
const student = {name:'Batey Martin Ayamba Takuntoh',dob:'13/03/1954',domain:'Computer Maintenance',field:'Hardaware',matricule:'itsjdj33489f',specialty:'good'}
    return (
        
        <PDFViewer style={{width:'100%',height:'97.5vh',padding:'0',margin:'0',border:'0'}} className=" self">
            <MyPDF courseprops={courses} studentprops={student} computedResults={{classification:"Lower Credit",gpa:3.25,grade:"B",totalCredits:80}} />
        </PDFViewer>
    );
}