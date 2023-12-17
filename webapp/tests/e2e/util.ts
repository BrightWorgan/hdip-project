import { expect } from "@playwright/test";

export const login = async (page, email, password) => {
  await page.getByPlaceholder("Email Addresss").click();
  await page.getByPlaceholder("Email Addresss").type(email);
  await page.getByPlaceholder("Password...").click();
  await page.getByPlaceholder("Password...").type(password);
  await page.getByRole("button", { name: "Login" }).click();
};

export const checkToast = async (page, message) => {
  const toast = await page.getByText(message);
  await expect(toast).toBeVisible();
  await expect(toast).toHaveText(message);
};

// export const navigate
