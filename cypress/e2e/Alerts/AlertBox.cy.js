const AlertBoxPage = require("../../pages/AlertBoxPage")

describe("AlertBox", ()=>{
    const endpoint = "alerts/alert-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    describe("Alert Box",()=>{

        it("La alerta deberia aparecer y tener su debido texto",()=>{
            AlertBoxPage.elements.alertBox().click()

            cy.on("window:alert", $alert =>{
                expect($alert).to.eq("I am an alert box!")
            })
        })
    })

    describe("Confirm Box",()=>{

        it("El resultado de la confirmacion y su texto deberian notificar que se hizo click en 'aceptar'", ()=>{
            AlertBoxPage.elements.confirmBox().click()
    
            cy.on("window:confirm", $alert =>{
                expect($alert).to.eq("I am a confirm alert")
            })

            AlertBoxPage.elements.confirmBoxResult().should($result =>{
                expect($result).to.have.text("true")
            })

            AlertBoxPage.elements.confirmBoxResultText().should($text =>{
                expect($text).to.have.text("You clicked OK, confirm returned true.")
            })
        })

        it("El resultado de la confirmacion y su texto deberian notificar que se hizo click en 'cancelar'",()=>{
            AlertBoxPage.elements.confirmBox().click()

            cy.on("window:confirm", $alert =>{
                expect($alert).to.eq("I am a confirm alert")
                return false;
            })

            AlertBoxPage.elements.confirmBoxResult().should($result =>{
                expect($result).to.have.text("false")
            })

            AlertBoxPage.elements.confirmBoxResultText().should($text =>{
                expect($text).to.have.text("You clicked Cancel, confirm returned false.")
            })

        })
    })

    describe("Prompt Box",()=>{

        it("El resultado de la caja con ingreso de dato deberia coincidir con lo que se ingreso", ()=>{
            const input = "Cypress Practique"

            
            cy.window().then(($win)=>{
                cy.stub($win, "prompt").returns(input);
                AlertBoxPage.elements.promptBox().click()
            })

            AlertBoxPage.elements.promptBoxResultText().should($text =>{
                expect($text).to.have.text(input)
            })

            AlertBoxPage.elements.promptBoxReturn().should($text =>{
                expect($text).to.have.text(`You clicked OK. 'prompt' returned  ${input}`)
            })

        })

        it("El resultado de la caja con ingreso de dato deberia mostrar que se cancelo la operacion", ()=>{
            
            
            cy.window().then(win => {
                AlertBoxPage.elements.promptBox().click()
                cy.stub(win, 'prompt').callsFake(() => null);
                });

             AlertBoxPage.elements.promptBoxReturn().should($text =>{
                expect($text).to.have.text(`You clicked Cancel. 'prompt' returned null`)
            })

        })

})
})