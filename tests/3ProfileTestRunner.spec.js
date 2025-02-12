import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import ProfilePage from "../pages/ProfilePage.js";
import jsonData from "../utils/userData.json";

test("User can upload photo successfully", async ({ page }) => {

    const newUser = jsonData[jsonData.length - 1];

    await page.goto("/");
    const login = new LoginPage(page);
    await login.userLogin(newUser.email, newUser.password);
    await expect(page.getByText("User Daily Costs")).toBeVisible({ timeout: 10000 });

    const upload = new ProfilePage(page);
    const filePath = "F:/Road To SDET/JS/Playwright_Project/utils/image.jpg";
    await upload.uploadImage(filePath);


})