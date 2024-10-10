const {test, expect} = require('@playwright/test');
const {TodoPage} = require('../Pages/todo-page');

test("Test With POM", async ({page}) => {
    const todoPage = new TodoPage(page);

    await test.step("Go to page", async() => {
        await todoPage.goto();
        console.log("Pagina a naviganat spre URL");
    })

    await test.step("Add Items", async() => {
        await todoPage.addToDo("Item1");
        await todoPage.addToDo("item2");
        await todoPage.addToDo("item3");
        console.log("Itemele au fost adaugate cu succes!");
    })

    await test.step("Remove 1 Item", async() => {
        await todoPage.getInputBoxDelete("item2");
        console.log("Item2 a fost sters cu succes!");
    })

    await test.step("Clear All Items", async() => {
        await todoPage.removeAll();
        console.log("Toate itemele au fost sterse!");
    })
});