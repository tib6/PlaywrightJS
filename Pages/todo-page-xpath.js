 export class TodoPageXpath{
    
    constructor(page){
        this.page = page;
        this.insertItem = this.page.locator("//input[@class='new-todo']");
        this.getItems = this.page.locator("//li[@data-testid='todo-item']");
    }

    async goto(){
        await this.page.goto("https://demo.playwright.dev/todomvc/");
    }

    async addToDo(text){
        await this.insertItem.fill(text);
        await this.insertItem.press("Enter");
    }   

    async getInputBoxDelete(text){
        const element = this.getItems.locator("//label[text()='"+ text +"']");
        await element.hover();
        const deleteElement = element.locator("//following-sibling::button");
        await deleteElement.click();
        // await this.page.locator("//li[@data-testid='todo-item']//label[text()='"+ text +"']").hover();
        // await this.page.locator("//li[@data-testid='todo-item']//label[text()='"+ text +"']/following-sibling::button").click();
    }

    async removeAll(){
        console.log("Items: " + await this.getItems.count());
        while(await this.getItems.count() >= 1){
            await this.getItems.first().hover();
            await this.getItems.first().getByLabel("Delete").click();
        }
    }
} 