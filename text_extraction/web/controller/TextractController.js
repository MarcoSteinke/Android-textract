import TextractApplicationService from "../../service/TextractApplicationService.js"
import fs from "fs"

export default class TextractController {

    textractApplicationService

    constructor() {
        this.textractApplicationService = new TextractApplicationService()
        Object.freeze(this)
    }

    index(req, res) {
        res.render("index.ejs")
    }

    async postExtract(req, res) {

        const applicationService = this.textractApplicationService
        console.log(applicationService);

        fs.readFile(`./uploads/${req.file.filename}`, async function(err, image) {

            if (err) throw err // Fail if the file can't be read.
            
            const result = await applicationService.extractText(image)
            res.render("result.ejs", {text: result})
          })


        
    }
}