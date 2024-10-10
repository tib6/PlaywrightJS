const {test, expect} = require('@playwright/test');
const {TodoPageXpath} = require('../Pages/todo-page-xpath');

test("Test With POM", async ({page}) => {
    const todoPageXpath = new TodoPageXpath(page);

    await test.step("Go to page", async() => {
        await todoPageXpath.goto();
        console.log("Pagina a naviganat spre URL");
    })

    await test.step("Add Items", async() => {
        await todoPageXpath.addToDo("Item1");
        await todoPageXpath.addToDo("item2");
        await todoPageXpath.addToDo("item3");
        console.log("Itemele au fost adaugate cu succes!");
    })

    await test.step("Remove 1 Item", async() => {
        await todoPageXpath.getInputBoxDelete("item2");
        console.log("Item2 a fost sters cu succes!");
    })

    await test.step("Clear All Items", async() => {
        await todoPageXpath.removeAll();
        console.log("Toate itemele au fost sterse!");
    })
});