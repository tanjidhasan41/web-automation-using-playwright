class ProfilePage {

    constructor(page) {

        this.page = page;

        this.btnMenu = page.getByRole("button", {name: "account of current user"});
        this.btnProfile = page.getByRole("menuitem", {name: "Profile"});
        this.btnEdit = page.getByRole("button", {name: "EDIT"});
        this.btnChooseFile = page.locator("input.upload-input");
        this.btnUpload = page.getByRole("button", {name: "UPLOAD IMAGE"});
        this.btnUpdate = page.getByRole("button", {name: "UPDATE"});
        this.btnLogOut = page.getByRole("menuitem", {name: "Logout"});

    }

    async uploadImage(filePath) {

        await this.btnMenu.click();
        await this.btnProfile.click();
        await this.btnEdit.click();
        await this.btnChooseFile.setInputFiles(filePath);
        await this.btnUpload.click();
        await this.page.waitForTimeout(3000);
        await this.btnUpdate.click();
        await this.btnMenu.click();
        await this.btnLogOut.click();

    }

}

export default ProfilePage;