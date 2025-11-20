import { PDFDocument, PageSizes, degrees, rgb } from 'pdf-lib';
import { AttestationDataProps } from "./types/data";
import PdfPen from "../pdfGenerator/pdfPen";
import { Template } from './types/templates';
import { DefaultTemplate } from './templates/defaultTemplate';


/**
 * 
 * @param param0 Type AttestationDataProps
 * @param param1 Type PDFDocument
 * @param function (PDFDocument)=>Promise(Template)
 * @returns Promise(Uint8Array)
 * @author Bate Martin
 * @copyright E-Conneq
 */

export async function generatePDF({ data, template }: { data: AttestationDataProps, template?: (doc: PDFDocument) => Promise<Template> }): Promise<Uint8Array> {

  const { school, student } = data;

  const document = await PDFDocument.create();
  const page = document.addPage(PageSizes.A4);
  const usedTemplate = await (template
    ? template(document)
    : DefaultTemplate(document)
  );
  const pen = new PdfPen(page, document, usedTemplate);

  document.setTitle("Attestation", { showInWindowTitleBar: true });
  // document.setAuthor();
  document.setCreationDate(new Date());
  const formattedDate = getDate(document.getCreationDate());
  const primaryFont = await pen.useFont();
  const primaryColor = rgb(15 / 255, 45 / 255, 80 / 255);  
  const SecondaryColor = rgb(15 / 255, 45 / 255, 80 / 255);
  const secondaryFont = await pen.useFont("Courier");
  page.setFont(primaryFont.normal);
  // page.setFontColor(primaryColor);
  let vw = page.getWidth();
  const TOP_OFFSET = 180;
  let vh = page.getHeight() - TOP_OFFSET;
  let cordY = vh - 50;  /**@todo: turn this into point of reference for pen to use while drawing inorder to avoid breaking UI caused by the uncertain AttestationDataProps */
  const bodyMargin = 65;
  const logo = await pen.getImage("/brains.png");
  const facebook = await pen.getImage("/facebook.png");
  const instagram = await pen.getImage("instagram.png");
  const telephone = await pen.getImage("/telephone.png");
  const map = await pen.getImage("/map.png");
  const www = await pen.getImage("/globe.png");
  const scale = logo.scale(1);
  const scale2 = logo.scale(0.4);


  /**Header Banner image 
   * @todo Image Drawings should be delegated to Pen
  */
  page.drawImage(logo, {
    x: secondaryFont.bold.widthOfTextAtSize(school.acronym, 45) - 3.3 * bodyMargin, //Avod using constant values
    y: cordY + 145,
    width: scale2.width / 5,
    height: scale2.height / 5,
  })


  pen.printText({
    text: school.acronym!.toUpperCase(), css: {
      marginVertical: cordY + TOP_OFFSET,
      display: "center",
      fontSize: 45,
      font: secondaryFont.bold,
      color:SecondaryColor
    }
  });
  pen.printText({
    text: school.fullname ?? "UNIVERSITY", css: {
      marginVertical: cordY + 155,
      opacity: 0.85,
      font: secondaryFont.bold,
      fontSize: school.fullname ? 14 : 24,
      letterSpacing: school.fullname ? 0 : secondaryFont.bold.widthOfTextAtSize(school.acronym, 2),
      display: "center",
      maxWidth: 50,
      color:SecondaryColor

    }
  })


  /** Debate if to pass disciplines as single strings or as a string[].
   * Tradeoffs for the former:We lose flexibility to color each discpline
   */
  // page.drawText("Medical Studies,", {
  //   size: 12,
  //   x: page.getWidth() / 6 - 20,
  //   y: cordY + 140
  // })

  // page.drawText("Engineering & Information Technology", {
  //   size: 12,
  //   x: page.getWidth() / 6 + 65,
  //   y: cordY+140,
  //   color: rgb(1, 0, 0),
  // })
  // page.drawText("Agriculture & Food Technology", {
  //   size: 12,
  //   x: page.getWidth() / 6 + 263,
  //   y: cordY + 140,
  //   color: rgb(0.133, 0.545, 0.133)
  // })
  // Example: school.disciplines.ForEach(discipline)=> pen.printText(...,color:rgb(rand(),rand(),rand()))

  pen.printText({
    text: school.disciplines.join(" | "), css: {
      fontSize: 12,
      marginHorizontal: bodyMargin + 20,
      marginVertical: cordY + 140,
      color: primaryColor,
      lineHeight: 13,
      maxWidth: vw - 2 * bodyMargin //If a school has more than 3 disciplines,the UI breaks,use a func paintDiscpline() to compute height and return new height for next painting
    }
  })

  page.drawText(data.school.authorization, {
    size: 11.5,
    x: page.getWidth() / 6 + 57,
    y: cordY + 125,
    color: rgb(0.471, 0.431, 0.392)
  })

  page.drawLine({
    start: { x: page.getWidth() / 6 + 55, y: cordY + 120 },
    end: { x: 485, y: cordY + 120 },
    thickness: 2,
    color: rgb(1, 0, 0),
    opacity: 0.75,
  })


  page.drawText("SCHOOL ATTESTATION / CERTIFICAT DE SCOLARITE", {
    x: page.getWidth() / 4 - 15,
    y: cordY + 70,
    size: 13,
    font: primaryFont.bold,
    color: rgb(0, 0, 0)
  })
  page.drawRectangle({
    x: page.getWidth() / 4 - 15,
    y: cordY + 70,
    width: 345,
    height: 12,
    color: rgb(0.471, 0.431, 0.392),
    opacity: 0.2,
  })

  /**Attestation content */

  page.drawText("I the undersigned certify that / ", {
    x: bodyMargin,
    y: cordY + 25,
    size: 12,
    color: rgb(0, 0, 0)
  })
  page.drawText("Je soussigne, certifie que", {
    x: page.getWidth() / 3 + 18,
    y: cordY + 25,
    font: primaryFont.italic,
    size: 12,
    color: rgb(0, 0, 0),
  })



/** Line 171 - 294, could be refactored into a loop using a map object {key:value(student[key]}  */
  pen.blockScope({
    label: "The student:", sublabel: "L'etudiant (e)", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY
    }
  })
  pen.printText({
    text: student.name.toUpperCase(), css: {
      marginVertical: cordY,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("The student", 13) + 70,
      font: primaryFont.bold
    }
  })


  pen.blockScope({
    label: "Child of:", sublabel: "Enfant de", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 40
    }
  })
  pen.printText({
    text: student.parent.toUpperCase(), css: {
      marginVertical: cordY - 40,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Child of", 12) + 70,
      font: primaryFont.bold
    }
  })
  pen.blockScope({
    label: "Born on:", sublabel: "Ne (e) le", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 80
    }
  })
  pen.printText({
    text: student.issue_date, css: {
      marginVertical: cordY - 80,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Born on", 12) + 70,
      font: primaryFont.bold
    }
  })
  pen.blockScope({
    label: "At:", sublabel: "A", css: {
      marginHorizontal: vw / 2,
      marginVertical: cordY - 80
    }
  })
  pen.printText({
    text: student.issue_date, css: {
      marginVertical: cordY - 80,
      marginHorizontal: vw / 2 + 20,
      font: primaryFont.bold
    }
  })
  pen.blockScope({
    label: "Is a Regitered student", sublabel: "est un eleve inscrit", css: {
      marginVertical: cordY - 120,
      marginHorizontal: vw / 2
    }
  })

  pen.blockScope({
    label: "Registeration number:", sublabel: "Matricule", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 120
    }
  })
  pen.printText({
    text: student.matricule.toUpperCase(), css: {
      marginVertical: cordY - 120,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Registeration number", 12) + 70,
      font: primaryFont.bold
    }
  })

  pen.blockScope({
    label: "Level:", sublabel: "Niveau", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 160
    }
  })
  pen.printText({
    text: student.level, css: {
      marginVertical: cordY - 160,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Level", 12) + 70,
      font: primaryFont.bold
    }
  })

  pen.blockScope({
    label: "Field of Study:", sublabel: "Filiere d'etude", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 200
    }
  })
  pen.printText({
    text: student.field.toUpperCase(), css: {
      marginVertical: cordY - 200,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Field of Study", 12) + 70,
      font: primaryFont.bold
    }
  })

  pen.blockScope({
    label: "Specialty:", sublabel: "Specialite", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 240
    }
  })
  pen.printText({
    text: student.specialty.toUpperCase(), css: {
      marginVertical: cordY - 240,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Specialty", 12) + 70,
      font: primaryFont.bold
    }
  })

  pen.blockScope({
    label: "Academic year:", sublabel: "Annee academique", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 280
    }
  })
  pen.printText({
    text: student.admission_year.toUpperCase(), css: {
      marginVertical: cordY - 280,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Academic year", 12) + 70,
      font: primaryFont.bold
    }
  })

  pen.blockScope({
    label: "This certificate is consequently used to serve all legal purposes.", sublabel: "Enfoi de qoui le present certificat lui est delivre pour servir et valoir ce que de droit", css: {
      marginHorizontal: bodyMargin,
      marginVertical: cordY - 320,
    }
  })

  pen.blockScope({
    label: "Done in Douala on: ", sublabel: "Fait a douala le", css: {
      marginVertical: cordY - 360,
      marginHorizontal: bodyMargin,
      font: primaryFont.italic
    }
  })

  /**TODO:  */
  pen.printText({
    text: formattedDate, css: {
      marginVertical: cordY - 360,
      marginHorizontal: primaryFont.normal.widthOfTextAtSize("Done in Douala on", 12) + 70,
      font: primaryFont.bold
    }
  })

  pen.printText({
    text: "The Director: ", css: {
      marginVertical: cordY - 400,
      marginHorizontal: bodyMargin,
    }
  })
  pen.printText({
    text: school.director, css: {
      marginVertical: cordY - 412,
      marginHorizontal: bodyMargin,
      font: primaryFont.bold,
    }
  })

  page.drawLine({
    start: { x: 0, y: 61 },
    end: { x: vw, y: 61 },
    thickness: 2,
    color: rgb(1, 0.843, 0.4),
  })
  school.contacts.map((contact) => {
    pen
  });

 
  pen.printText({text:school.contacts.join(" / "),css:{
      maxWidth: bodyMargin*2,
      fontSize:11,
      lineHeight:13,
      marginVertical: 46,
       marginHorizontal: bodyMargin,
  }})

  /** watermark*/
  page.drawImage(logo, {
    x: -200,
    y: cordY / 2 - 200,
    width: scale.width / 2 + 100,
    height: scale.height / 2 + 100,
    opacity: 0.15,
  })



  /**Footer */
  page.drawRectangle({
    width: page.getWidth(),
    height: 25,
    color: primaryColor
  })

  page.drawImage(telephone, {
    x: bodyMargin - 18,
    y: 38,
    width: 12,
    height: 12,
    opacity: 1
  })
  page.drawImage(map, {
    x: page.getWidth() / 2 + 60,
    y: 40,
    width: 12,
    height: 12,
    opacity: 1
  })

  pen.printText({
    text: school.location, css: {
      fontSize: 11,
      maxWidth: 200,
      marginVertical: 45,
      marginHorizontal: page.getWidth() / 2 + 78,
      lineHeight: 13
    }
  })


  page.drawImage(facebook, {
    x: page.getWidth() / 6 - 70,
    y: 8,
    width: 12,
    height: 12
  })
  page.drawImage(instagram, {
    x: page.getWidth() / 6 - 50,
    y: 8,
    width: 12,
    height: 12
  })
  page.drawImage(www, {
    x: page.getWidth() / 2 + 85,
    y: 8,
    width: 12,
    height: 12,
  })
  pen.printText({ text: school.socialhandles?.facebook ?? '', css: { marginHorizontal: 65, marginVertical: 10, color: rgb(1, 1, 1) } })
  pen.printText({ text: school.socialhandles?.website ?? '', css: { color: rgb(1, 1, 1), marginHorizontal: 400, marginVertical: 10 } })

  const finalPdf = await document.save();
  return finalPdf;
}

/** @description Snippet to get document creation date */
function getDate(date:Date=new Date()){
  const day = date.getDate().toString();
  const month = (date.getMonth()+1).toString();
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}