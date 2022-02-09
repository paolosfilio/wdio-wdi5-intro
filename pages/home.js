module.exports = {
    // Actions
    iShouldOpenTheApp() {
        browser.goTo('#/');
    },

    iSearchForProduct() {
        var search = browser.asControl({
            selector: {
                id: 'searchField',
                viewName: 'sap.ui.demo.cart.view.Home',
            }
        });
        search.getWebElement().$('input[type=search]').setValue('Watch');
    },

    iSelectTheFirstProduct() {
        var text = browser.asControl({
            selector: {
                controlType: 'sap.m.Text',
                properties: {
                    text: 'Flat Watch HD32'
                }
            }
        });
        text.getWebElement().click();
    },

    // Assertions
    iShouldSeeAllCategories() {
        var list = browser.asControl({
            selector: {
                id: 'container-cart---homeView--categoryList'
            },
        });
        expect(list.getItems(true).length).toBe(16); 
    },

    theProductListShouldBeFiltered: function() {
        var list = browser.asControl({
            selector: {
                id: 'container-cart---homeView--productList'
            }
        });
        const firstItem = list.getItems()[0];
        expect(firstItem.getTitle()).toBe('Flat Watch HD32');
    }
}