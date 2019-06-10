describe("It opens up the App", ()=>{
    it('opens', ()=>{
        cy.visit("http://localhost:3000");
    });
});

describe("it renders an element with the id of 'jokeDeviceDiv'", ()=>{
    it('should have a button and that button should contain the words "Press Me!"', ()=>{
        cy.get('#jokeDeviceDiv').find('button').should(($button) => {
          expect($button).to.have.id('jokeDeviceButton');  
        });
        cy.get('#jokeDeviceButton').should('contain', 'Press Me!');
    });
    it('should have the correct stylings for JokeDeviceButton', ()=>{
        cy.get('#jokeDeviceButton')
            .should('have.css', 'background-color', 'rgb(255, 0, 0)')
            .should('have.css', 'background-image', 'linear-gradient(red, lightcoral)')
            .should('have.css', 'display', 'block')
            .should('have.css', 'padding', '15px 25px')
    })
})