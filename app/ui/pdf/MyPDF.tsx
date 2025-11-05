import * as pdfEngine from '@react-pdf/renderer'
import PdfLetterHead from './PdfLetterHead';
import PdfStudProfile from './PdfStudProfile';
import ProgamDetails from './ProgamDetails';
import PdfFooter from './PdfFooter';
const style = pdfEngine.StyleSheet.create({
     page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 12,
    lineHeight: 1.25,
  },
  main:{
    paddingHorizontal:11,
    marginTop:2
  }
})

const MyPDF = () => {
    return (
        <pdfEngine.Document title='HND_transcript'>
            <pdfEngine.Page size="A4" style={style.page}>
                <PdfLetterHead />
                <pdfEngine.View style={style.main}>
                <PdfStudProfile />
                <ProgamDetails />
                <PdfFooter/>
                </pdfEngine.View>
            </pdfEngine.Page>
        </pdfEngine.Document>
    );
}

export default MyPDF;