class ResetPasswordPage {

    constructor(page) {

        this.page = page;

        this.btnResetHere = page.getByRole("link", { name: "Reset it here" });
        this.txtEmail = page.getByLabel("Email *");
        this.btnSendResetLink = page.getByRole("button", { name: "SEND RESET LINK" });
        this.txtNewPassword = page.getByLabel("New Password *");
        this.txtConfirmPassword = page.getByLabel("Confirm Password *");
        this.btnResetPassword = page.getByRole("button", { name: "RESET PASSWORD" });

    }

    async forgetPassword(email) {

        await this.btnResetHere.click();
        await this.txtEmail.fill(email);
        await this.btnSendResetLink.click();

    }

    async resetPassword(password) {

        await this.txtNewPassword.fill(password);
        await this.txtConfirmPassword.fill(password);
        await this.page.waitForTimeout(2000);
        await this.btnResetPassword.click();

    }

}

export default ResetPasswordPage;