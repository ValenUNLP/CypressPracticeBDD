const ResponseFilePage = require("../../pages/ResponseFilePage")
const UploadAFilePage = require("../../pages/UploadAFilePage")

describe("UploadAFile",()=>{

    const endpoint = "file-upload-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    describe("Subida de un archivo general",()=>{

        it("Deberia marcar que se subio un archivo general(avisar que es un archivo general)",()=>{
            UploadAFilePage.elements.uploadFile().selectFile("cypress.txt")
            UploadAFilePage.elements.inputRadioGeneralFile().click()
            UploadAFilePage.elements.submitButton().click()
            ResponseFilePage.elements.uploadFile().should($text =>{
                expect($text).to.contain("file")
            })
            ResponseFilePage.elements.uploadFileName().should($name =>{
                expect($name).to.have.text("cypress.txt")
            })
        })

        it("Deberia marcar que se subio un archivo general(avisar que es una imagen)",()=>{
            UploadAFilePage.elements.uploadFile().selectFile("cypress.txt")
            UploadAFilePage.elements.inputRadioImage().click()
            UploadAFilePage.elements.submitButton().click()
            ResponseFilePage.elements.uploadFile().should($text =>{
                expect($text).to.contain("file")
            })
            ResponseFilePage.elements.uploadFileName().should($name =>{
                expect($name).to.have.text("cypress.txt")
            })
        })
    })

    describe("Subida de una imagen",()=>{

        it("Deberia marcar que se subio una imagen(avisar que es una imagen)",()=>{
            UploadAFilePage.elements.uploadFile().selectFile("cypressImg.jpg")
            UploadAFilePage.elements.inputRadioImage().click()
            UploadAFilePage.elements.submitButton().click()
            ResponseFilePage.elements.uploadFile().should($text =>{
                expect($text).to.contain("image")
            })
            ResponseFilePage.elements.uploadFileName().should($name =>{
                expect($name).to.have.text("cypressImg.jpg")
            })
        })

        it("Deberia marcar que se subio una imagen(avisar que es un archivo general)",()=>{
            UploadAFilePage.elements.uploadFile().selectFile("cypressImg.jpg")
            UploadAFilePage.elements.inputRadioGeneralFile().click()
            UploadAFilePage.elements.submitButton().click()
            ResponseFilePage.elements.uploadFile().should($text =>{
                expect($text).to.contain("image")
            })
            ResponseFilePage.elements.uploadFileName().should($name =>{
                expect($name).to.have.text("cypressImg.jpg")
            })
        })
    })
})