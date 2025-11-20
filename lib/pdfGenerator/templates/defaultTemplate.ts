import { AttestationDataProps } from "../types/data";
import { FontSet } from "../types/Fonts";
import { Template } from "../types/templates";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";


/**
 * @description A template is another view of thesame document with different colors,fontsize,fonts,layout,background,etc.
 * This is the default template for Attestation PDF
 * @todo Currently its not in use,need to add more of its properties
 * @param doc 
 * @param data 
 * @implements Template
 * @returns [Promise] Template
 * @author Bate Martin
 * @copyright E-Conneq
 */

export async function DefaultTemplate(doc:PDFDocument,data?:AttestationDataProps):Promise<Template>{
    const TimesRoman:FontSet = {
        normal: await doc.embedFont(StandardFonts.TimesRoman),
        bold: await doc.embedFont(StandardFonts.TimesRomanBold),
        italic: await doc.embedFont(StandardFonts.TimesRomanItalic)
        
    }
    const Helvetica:FontSet = {
        normal: await doc.embedFont(StandardFonts.Helvetica),
     bold: await doc.embedFont(StandardFonts.HelveticaBold),
        italic: await doc.embedFont(StandardFonts.HelveticaOblique)
        
    }
    return{
    baseMargin: {horizontal: 65,vertical:150},
    background: rgb(1,1,1),
    fonts: {
        primary:TimesRoman,
        secondary:Helvetica
    },
    colors:{
        primary: rgb(15 / 255, 45 / 255, 80 / 255)
    },

}
}