import { test, expect } from "@playwright/test";
import ResetPasswordPage from "../pages/ResetPasswordPage.js";
import { ReadGmail, readMail } from "../pages/ReadGmail.js";
import jsonData from "../utils/userData.json";
import fs from "fs";
import dotenv from 'dotenv';
dotenv.config();

test("User can reset password successfully", async ({ page }) => {

    const newUser = jsonData[jsonData.length - 1];

    await page.goto("/");

    const forget = new ResetPasswordPage(page);
    await forget.forgetPassword(newUser.email);

    await page.waitForTimeout(5000);

    let mailId = process.env.MAIL_ID || await ReadGmail();
    if (!mailId) {
        throw new Error("Failed to fetch Gmail list.");
    }

    let mailBody = process.env.MAIL_BODY || await readMail(mailId);
    if (!mailBody) {
        throw new Error("Failed to read reset password email.");
    }

    //console.log("Actual Email Body:", mailBody);

    const resetLink = mailBody.match(/https?:\/\/[^\s]+/)[0];
    //console.log("Reset Password Link:", resetLink);

    await page.waitForTimeout(10000);
    await page.goto(resetLink);

    const reset = new ResetPasswordPage(page);

    // const newPassword = {
    //     newPassword: "usEr!5%",
    // };

    //await reset.resetPassword(newPassword);
    const newPassword = "usEr!5%";

    newUser.password = newPassword;
    await reset.resetPassword(newPassword);

    //jsonData.push(newPassword);
    fs.writeFileSync("./utils/userData.json", JSON.stringify(jsonData, null, 2));


    //await page.pause();

});