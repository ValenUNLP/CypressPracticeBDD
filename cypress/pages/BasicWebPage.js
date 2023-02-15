class BasicWebPage{
   elements = {
        title: () => cy.get("div > h1"),
        firstParagraph: () => cy.get("p#para1"),
        secondParagraph: () => cy.get("p#para2"),

    }
}

module.exports = new BasicWebPage()