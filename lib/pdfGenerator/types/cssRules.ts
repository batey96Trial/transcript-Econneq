import { PDFPageDrawTextOptions } from "pdf-lib";
import { Margins } from "./Margins";


/**
 * @description Just a preference taste of styling to feel more like web css. It doesn't override pdf-lib styling taste
 * @interface CssRules
 * @extends [Margins],[PDFPageDrawTextOptions]
 */

export interface CssRules extends Margins, PDFPageDrawTextOptions {
    display?: "center",
    letterSpacing?: number
    fontSize?: number,
}