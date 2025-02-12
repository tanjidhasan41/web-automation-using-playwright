import { test, expect } from "@playwright/test";
import jsonData from "../utils/userData.json";
import RegistrationPage from "../pages/RegistrationPage.js";
import fs from "fs";
import { faker } from "@faker-js/faker";
import { generateRandomId } from "../utils/utils.js";

test("User can registration successfully", async ({ page }) => {

    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Welcome to daily finance" })).toBeVisible();

    const registration = new RegistrationPage(page);

    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: "thsqa41+"+generateRandomId(1000, 9999) + "@gmail.com",
        password: "1234",
        phoneNumber: `0170${generateRandomId(1000000, 9999999)}`,
        address: faker.location.city()
    };

    console.log(userData);

    await registration.registerUser(userData);

    const toastLocator = page.locator('.Toastify__toast');
    toastLocator.waitFor();

    const toastMessage = await toastLocator.textContent();
    expect(toastMessage).toContain("registered successfully!");

    jsonData.push(userData);
    fs.writeFileSync("./utils/userData.json", JSON.stringify(jsonData, null, 2));

})