import Tesseract from 'tesseract.js';

export default class TesseractOCRTextExtractor {

    language

    constructor(language) {
        this.language = language
        Object.freeze(this)
    }

    async extract(imagePath) {
        return await Tesseract.recognize(
            imagePath,
            'eng',
            { logger: m => console.log(m) }
            ).then(({ data: { text } }) => {
                return text
        })
    }
}