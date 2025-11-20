import { PDFFont } from "pdf-lib";

export type FontSet = {
  normal: PDFFont;
  bold: PDFFont;
  italic: PDFFont;
};

export type FontFamily = "TimesRoman" | "Courier" | "Helvetica";
