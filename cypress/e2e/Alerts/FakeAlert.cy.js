const FakeAlert = require("../../pages/FakeAlert")

describe("FakeAlert", ()=>{

    const endpoint = "alerts/fake-alert-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    describe("AlertBox",()=>{
        it("La alerta falsa deberia de abrirse, mostrar su texto y poder cerrarse mediante su boton", ()=>{
            FakeAlert.elements.alertBox().click()

            FakeAlert.elements.alert().should($alert =>{
                expect($alert).to.have.class("active")
            })
    
            FakeAlert.elements.alertBoxText().should($text =>{
                expect($text).to.have.text("I am a fake alert box!")
            })
            FakeAlert.elements.alertBoxAccept().click()
    
            FakeAlert.elements.alert().should($alert =>{
                expect($alert).not.to.have.class("active")
            })
        })
    })

    describe("ModalBox",()=>{
        it("El modal deberia abrirse, mostrar su texto y poder cerrarse mediante su boton",()=>{
            FakeAlert.elements.modalBox().click()

            FakeAlert.elements.modal().should($alert =>{
                expect($alert).to.have.class("active")
            })
    
            FakeAlert.elements.modalBoxText().should($text =>{
                expect($text).to.have.text("I am a modal div!")
            })
            FakeAlert.elements.modalBoxAccept().click()
    
            FakeAlert.elements.modal().should($alert =>{
                expect($alert).not.to.have.class("active")
            })    
        })

        it("El modal deberia abrirse, mostrar su texto y poder cerrarse haciendo click fuera del modal",()=>{
            FakeAlert.elements.modalBox().click()

            FakeAlert.elements.modal().should($alert =>{
                expect($alert).to.have.class("active")
            })
    
            FakeAlert.elements.modalBoxText().should($text =>{
                expect($text).to.have.text("I am a modal div!")
            })

            cy.get("body").click(0,0)

            FakeAlert.elements.modal().should($alert =>{
                expect($alert).not.to.have.class("active")
            })    
        })
    })

})