import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import jsonData from "../utils/userData.json";

test("User can login successfully using new password", async ({ page }) => {

    const newUser = jsonData[jsonData.length - 1];

    await page.goto("/");
    const login = new LoginPage(page);
    await login.userLogin(newUser.email, newUser.password);
    await expect(page.getByText("User Daily Costs")).toBeVisible({ timeout: 10000 });
    //await page.waitForTimeout(3000);

})