module.exports = {
    // Actions

    // Assertions
    theProductTitleIsShown() {
        var header = browser.asControl({
            selector: {
                controlType: 'sap.m.ObjectHeader',
                bindingPath: {
                    path: "/Products('HT-6130')"
                }
            }
        });
        expect(header.getTitle()).toBe('Flat Watch HD32');
    },

    theProductCouldBeOrdered() {
        var button = browser.asControl({
            selector:{
                controlType: 'sap.m.Button',
                i18NText: {
                    propertyName: "text", 
                    key: "addToCartShort"
                }
            }
        });
        expect(button.getWebElement().isDisplayed()).toBeTruthy();
    }
}