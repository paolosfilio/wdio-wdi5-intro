const HomePage = require('./pages/home');
const ProductPage = require('./pages/product');

describe("teched", function () {
	
	it("should validate the home screen", () => {
		HomePage.iShouldOpenTheApp();
		HomePage.iShouldSeeAllCategories();
	});

	it("Should search for a product", function () {
		// Actions
		HomePage.iSearchForProduct();

        // Assertions
		HomePage.theProductListShouldBeFiltered();
	});

	it("Should navigate to the product", function () {
		// Actions
		HomePage.iSelectTheFirstProduct();

        // Assertions
		ProductPage.theProductTitleIsShown();
		ProductPage.theProductCouldBeOrdered();
	});
});
