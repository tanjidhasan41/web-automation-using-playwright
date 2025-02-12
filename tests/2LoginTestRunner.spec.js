import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import jsonData from "../utils/userData.json";

test("User can login successfully", async ({ page }) => {

    const newUser = jsonData[jsonData.length - 1];

    await page.goto("/");
    const login = new LoginPage(page);
    await login.userLogin(newUser.email, newUser.password);
    await expect(page.getByText("User Daily Costs")).toBeVisible({ timeout: 10000 });
    //await page.waitForTimeout(3000);

    const itemData1 = {

        itemName: "Mobile",
        amount: "10000",
        remarks: "This is an iPhone 16",
        search: "Mobile"

    };

    page.once("dialog", async dialog => {

        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("Product added successfully!");
        await dialog.accept();

    });

    await login.addItems1(itemData1);

    await page.locator("tbody tr").first().waitFor();
    const firstRow1 = page.locator("tbody tr").first();
    const mobileData = await firstRow1.locator("td").allTextContents();
    expect(mobileData).toContain("Mobile");

    const itemData2 = {

        itemName: "Laptop",
        amount: "70000",
        remarks: "This is a Gaming Laptop",
        search: "Laptop"

    };

    page.once("dialog", async dialog => {

        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("Product added successfully!");
        await dialog.accept();

    });

    await login.addItems2(itemData2);

    await page.locator("tbody tr").first().waitFor();
    const firstRow2 = page.locator("tbody tr").first();
    const laptopData = await firstRow2.locator("td").allTextContents();
    expect(laptopData).toContain("Laptop");

})