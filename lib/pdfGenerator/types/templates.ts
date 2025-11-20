import { PDFImage, RGB } from "pdf-lib";
import { FontSet } from "./Fonts";
import { CssRules } from "./cssRules";



/**
 * @description Contract to implement a Template
*/


export type Template = {
  baseMargin?: { horizontal: number; vertical: number };
  fonts?: {
    primary:FontSet,
    secondary:FontSet
  }; // override default fonts
  defaultFontSize?: number;
  background?: RGB | PDFImage
  
  spacing?: {
    letterSpacing?: number;
    lineHeight?: number;
  };
  colors?: {
    primary?: RGB;
    secondary?: RGB;
    accent?: RGB
  };
  watermark?: {
    type: "text" | "image";
    content: string | PDFImage;   // text or image
    style:CssRules
  }
};

