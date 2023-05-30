import TesseractOCRTextExtractor from "../tesseract/TesseractOCRTextExtractor.js"

export default class TextractApplicationService {

    textExtractor

    constructor() {
        this.textExtractor = new TesseractOCRTextExtractor("eng")
        Object.freeze(this)
    }

    async extractText(image) {
        return await this.textExtractor.extract(image)
    }
}