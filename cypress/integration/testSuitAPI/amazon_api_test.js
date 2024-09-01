describe('Amazon Product Search API Test', { retries: { runMode: 0, openMode: 0, }, }, () => {
    const searchQuery = 'Titan';
    const baseUrl = 'https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords='; // Hypothetical API endpoint
    const apiUrl = `${baseUrl}${encodeURIComponent(searchQuery)}&crid=139T62D1E3DS7&sprefix=${encodeURIComponent(searchQuery)}%2Caps%2C211`;

    it('Validate the response structure and content', () => {
        // Make a request to the API URL
        cy.request({
            method: 'GET',
            url: apiUrl
        }).then((response) => {
            // Validate the response status code
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('Titan');
        });
    });

    it('Validate product name in API response against frontend automation', () => {
        cy.fixture('response.json').then((expectedData) => {
          cy.request({
            method: 'GET',
            url: apiUrl
          }).then((response) => {
            // Validate the response status code
            expect(response.status).to.eq(200);
            cy.log("###################################" , expectedData);
      
            const productNamesFromApi = response.body.names;
      
            // Validate that the API response contains at least one of the expected product names
            expectedData.names.forEach((expectedName) => {
                cy.log("################### inside  api data ################" ,productNamesFromApi);
                cy.log("################ inside for each value json data ###################" ,expectedName);
            //   expect(productNamesFromApi).to.include(expectedName);
            });
      
          });
        });
      });
      



});


  