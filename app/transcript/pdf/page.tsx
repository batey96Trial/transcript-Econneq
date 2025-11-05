'use client'
import MyPDF from "../../ui/pdf/MyPDF";
import { PDFViewer } from "@react-pdf/renderer";
export default function PDF() {
    return (
        
        <PDFViewer style={{width:'100%',height:'97.5vh',padding:'0',margin:'0',border:'0'}}>
            <MyPDF />
        </PDFViewer>
    );
}