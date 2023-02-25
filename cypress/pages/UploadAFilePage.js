class UploadAFilePage{

    elements = {
        uploadFile: ()=> cy.get("#fileinput"),
        inputRadioImage: ()=> cy.get("#itsanimage"),
        inputRadioGeneralFile: ()=> cy.get("#itsafile"),
        submitButton: ()=> cy.get('input[type = "submit"]')
    }

}

module.exports = new UploadAFilePage()