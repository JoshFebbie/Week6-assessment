const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

// test("bots are displayed after clicking 'See All Bots'", () => {
//     await driver.findElement(By.id)
//     const seeall = await driver.findElement(By.id('see-all'))
//     await seeall.c
// })