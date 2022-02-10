module.exports = {
  // Actions

  // Assertions
  async theProductTitleIsShown() {
    const bindingPathSelector = {
      selector: {
        controlType: "sap.m.ObjectHeader",
        bindingPath: {
          path: "/Products('HT-6130')"
        }
      }
    };
    const title = await browser.asControl(bindingPathSelector).getTitle();
    expect(title).toBe("Flat Watch HD32");
  },

  async theProductCouldBeOrdered() {
    const i18nSelector = {
      selector: {
        controlType: "sap.m.Button",
        i18NText: {
          propertyName: "text",
          key: "addToCartShort"
        }
      }
    };
    const enabled = await browser.asControl(i18nSelector).getEnabled();
    expect(enabled).toBeTruthy();
  }
};