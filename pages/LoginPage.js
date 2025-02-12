class LoginPage {

    constructor(page) {

        this.page = page;

        this.txtEmail = page.getByLabel("Email *");
        this.txtPassword = page.getByLabel("Password *");
        this.btnLogin = page.getByRole("button", { name: "LOGIN" });
        this.btnAddCost = page.getByRole("button", { name: "Add Cost" });
        this.txtItemName = page.getByLabel("Item Name");
        this.btnquantity = page.getByRole("button", { name: "+" });
        this.txtamount = page.getByRole("spinbutton", { name: "Amount" });
        this.month = page.locator("#month");
        this.remarks = page.locator("#remarks");
        this.btnSubmit = page.getByRole("button", {name: "Submit"});
        this.txtSearch = page.getByRole("textbox", {name: "Search items..."});

    }

    async userLogin(email, password) {

        await this.txtEmail.fill(email);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();

    }

    async addItems1(item1) {

        await this.btnAddCost.click();
        await this.txtItemName.fill(item1.itemName);
        await this.btnquantity.click();
        await this.txtamount.fill(item1.amount);
        await this.month.selectOption({ label: "February" });
        await this.remarks.fill(item1.remarks);
        await this.btnSubmit.click();
        await this.txtSearch.fill(item1.itemName);

    }

    async addItems2(item2) {

        await this.btnAddCost.click();
        await this.txtItemName.fill(item2.itemName);
        //await this.btnquantity.click();
        await this.txtamount.fill(item2.amount);
        await this.month.selectOption({ label: "February" });
        await this.remarks.fill(item2.remarks);
        await this.btnSubmit.click();
        await this.txtSearch.fill(item2.itemName);

    }

}

export default LoginPage;