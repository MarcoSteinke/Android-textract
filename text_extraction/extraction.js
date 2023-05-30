import TextractController from "./web/controller/TextractController.js"
import express from "express"
import multer from "multer"

let imagePath

const controller = new TextractController();

const app = express()
const port = 8080
app.set('view engine', 'ejs');

// Include express.json() middleware
app.use(express.json());

// Include express.urlencoded() middleware
app.use(express.urlencoded({ extended: true }));

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('image');


app.post('/extract', async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
        } else {
            controller.postExtract(req, res)
        }
    })
});

app.get('/', (req, res) => controller.index(req, res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))