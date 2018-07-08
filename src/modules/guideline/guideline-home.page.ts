import { Component,ComponentMvvm } from "@yangyuhe/riojs";

let html=require("./guideline-home.page.html")
@Component({
    name:"guideline-home",
    template:html
})
class GuidelineHome extends ComponentMvvm{}