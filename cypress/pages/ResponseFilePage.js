class ResponseFilePage{

    elements = {
        uploadFile: ()=> cy.get("h2"),
        uploadFileName: ()=> cy.get("#uploadedfilename")
    }

}

module.exports = new ResponseFilePage()