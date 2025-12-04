'use client'
import * as pdfEngine from '@react-pdf/renderer'
import PdfLetterHead from './PdfLetterHead';
import PdfStudProfile from './PdfStudProfile';
import PdfFooter from './PdfFooter';
import CourseTable from './CourseTable';
const style = pdfEngine.StyleSheet.create({
     page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.15,
  },
  main:{
    paddingHorizontal:11,
    marginTop:2
  }
})

interface courseItem{
  code: string,
  subject: string,
  credit: number,
  grade: number,
  nature: string
}

interface CourseByCategory{
  fundamentals: courseItem[],
  professional: courseItem[],
  traversal: courseItem[]
}
interface totalsIface{
  totalCredits: number,
  gpa: number,
  grade: string,
  classification: string
}
interface student{
    name: string,
    domain: string,
    specialty: string,
    matricule: string,
    field: string,
    dob: string
}
interface computedResults{
  totalCredits: number,
  gpa: number,
  grade: string,
  classification: string
}

const MyPDF = ({courseprops,studentprops,computedResults }:{courseprops:CourseByCategory,computedResults:computedResults,studentprops:student}) => {

    return (
        <pdfEngine.Document>
            <pdfEngine.Page size="A4" style={style.page}>
                <PdfLetterHead />
                <pdfEngine.View style={style.main}>
                <PdfStudProfile student={studentprops} />
                <CourseTable courses={courseprops} computedResults={computedResults} />
                <PdfFooter/>
                </pdfEngine.View>
            </pdfEngine.Page>
        </pdfEngine.Document>
    );
}

export default MyPDF;