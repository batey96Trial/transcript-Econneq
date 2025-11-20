import { PDFDocument,PDFImage, PDFPage,StandardFonts } from "pdf-lib";
import { CssRules } from "./types/cssRules";
import { FontFamily, FontSet } from "./types/Fonts";
import { Template } from "./types/templates";



/**
 *  * @class PdfPen
 * @description Returns a Pen to be used for drawing onto the document/page.Loads a template with all its defined requirements
 * @param PDFDocument
 * @param PDFPage
 * @param Template
 * @author Bate Martin
 * @copyright E-Conneq
 */
export default class PdfPen {


    constructor(private page: PDFPage, private document: PDFDocument,private template?:Template) { this.template = template || {}}

    async printText({ text, css = {} }: { text: string, css?: CssRules }) {
        const {
            marginHorizontal = 0,
            marginVertical = 0,
            fontSize = 12,
            x,
            y,
            size,
            font,
            letterSpacing,
            display,
            ...otherOptions
        } = css;

        let finalX = x ?? marginHorizontal;
        const finalY = y ?? marginVertical;
        const finalSize = size ?? fontSize;
        const usedFont = font ?? this.template?.fonts?.primary.normal ?? await this.document.embedFont(StandardFonts.TimesRoman);

        if (display === "center") {
            let totalWidth = usedFont.widthOfTextAtSize(text, finalSize);

            if (letterSpacing !== undefined) {
                totalWidth += letterSpacing * (text.length - 1);
            }

            const pageWidth = this.page.getWidth();
            finalX = (pageWidth - totalWidth) / 2;
        }

        if (letterSpacing !== undefined) {
            for (const char of text) {
                this.page.drawText(char, {
                    x: finalX,
                    y: finalY,
                    size: finalSize,
                    font: usedFont,
                    ...otherOptions,
                });
                finalX += usedFont.widthOfTextAtSize(char, finalSize) + letterSpacing;
            }
        } else {
            this.page.drawText(text, {
                x: finalX,
                y: finalY,
                size: finalSize,
                font: usedFont,
                ...otherOptions,
            });
        }

    }

    /**
     * @async
     * @description Once we have templates ready, this method should be private
     * and should be refactored to return primary & secondary fonts of used template
     * @param [family="TimesRoman"] The fontFamily to use
     * @returns [Promise] FontSet
     *  
    */
    async useFont(family: FontFamily = "TimesRoman"): Promise<FontSet> {
      
        switch (family) {
            case "TimesRoman":
                return {

                    normal: await this.document.embedFont(StandardFonts.TimesRoman, { subset: true }),
                    bold: await this.document.embedFont(StandardFonts.TimesRomanBold, { subset: true }),
                    italic: await this.document.embedFont(StandardFonts.TimesRomanItalic, { subset: true })
                }
                break;
            case "Helvetica":
                return {
                    normal: await this.document.embedFont(StandardFonts.Helvetica, { subset: true }),
                    bold: await this.document.embedFont(StandardFonts.HelveticaBold, { subset: true }),
                    italic: await this.document.embedFont(StandardFonts.HelveticaOblique, { subset: true }),
                }
                break;
            case "Courier":
                return {
                    normal: await this.document.embedFont(StandardFonts.Courier, { subset: true }),
                    bold: await this.document.embedFont(StandardFonts.CourierBold, { subset: true }),
                    italic: await this.document.embedFont(StandardFonts.CourierOblique, { subset: true })
                }
                break;
            default:
                throw new Error("You must specify a font Family");
        }
    }

    /**
     * @description Not sure why Pen should have this method
     * @todo remove and delegate this to calling page
     * @param param0 label [type] string
     */
    async blockScope(
        {
            label, sublabel, css = {},
        }: { label: string, sublabel: string, css?: CssRules }) {

        const { fontSize = 12, marginVertical = 10, marginHorizontal = 0, font, ...otherOptions } = css;
        const usedFont = font ?? await this.document.embedFont(StandardFonts.TimesRomanItalic);

        this.page.drawText(label, {
            x: marginHorizontal,
            y: marginVertical,
            size: fontSize,
            ...otherOptions
        })
        this.page.drawText(sublabel, {
            x: marginHorizontal,
            y: marginVertical - 11.5,
            size: fontSize - 1,
            font: usedFont,
            ...otherOptions
        })
    }

    /**
     * @description Load Image from local storage or online
     * @param url [type] string
     * @returns [Promise] PDFImage
     */
    async getImage(url: string): Promise<PDFImage> {
        const type: string = url.split(".").at(-1)!;
        const bytes = await fetch(url).then(res => res.arrayBuffer());
        const image = await type == "png" ? this.document.embedPng(bytes) : this.document.embedJpg(bytes);
        return image;
    }

}