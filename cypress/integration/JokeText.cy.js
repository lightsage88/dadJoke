//TODO: set up a before each because this is getting rediculous

describe('jokeTextDiv', ()=>{
    cy.get('#jokeTextDiv').should(($jokeTextDiv)=>{
        expect($jokeTextDiv).to.have.length(1);
    });

});
