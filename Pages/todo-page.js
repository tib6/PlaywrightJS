 export class TodoPage{
    constructor(page){
        this.page = page;
        this.inputBox = this.page.locator('input.new-todo');
        this.todoItems = this.page.getByTestId("todo-item");
    }
    async getInputBoxDelete(text){
        const todo = await this.todoItems.filter({hasText: text});
        await todo.hover();
        await todo.getByLabel("Delete").click();
    }
    async goto(){
        await this.page.goto("https://demo.playwright.dev/todomvc/");
    }

    async addToDo(text){
        await this.inputBox.fill(text);
        await this.inputBox.press("Enter");
    }

    async removeAll(){
        console.log(await this.todoItems.count());
        while(await this.todoItems.count() >= 1){
            await this.todoItems.first().hover();
            await this.todoItems.first().getByLabel("Delete").click();
        }
    }
} 