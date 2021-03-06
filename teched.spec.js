const HomePage = require('./pages/home');
const ProductPage = require('./pages/product');

describe("teched", () => {
	
	it("should validate the home screen", async () => {
		// Actions
		await HomePage.iOpenTheApp();
		// Assertions
		await HomePage.iShouldSeeAllCategories();
	});

	it("Should search for a product", async () => {
		// Actions
		await HomePage.iSearchForProduct();
		// Assertions
		await HomePage.theProductListShouldBeFiltered();
	});

	it("Should navigate to the product", async () => {
		// Actions
		await HomePage.iSelectTheFirstProduct();
		// Assertions
		await ProductPage.theProductTitleIsShown();
		await ProductPage.theProductCouldBeOrdered();
	});
});
