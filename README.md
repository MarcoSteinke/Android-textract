# Android-textract

Extract links from screenshots of android devices.

## Introduction:

This application uses `TesseractOCR` to extract text from images. We will then use an algorithm which will try to correctly extract a valid URL from the image by filtering "noise" around the URL such as ".", random characters, or hashtags.

## Dependencies:

- https://ionicframework.com/[Ionic Framework]
- https://tesseract.projectnaptha.com/[TesseractOCR]
