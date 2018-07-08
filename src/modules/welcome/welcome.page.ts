import { Component, ComponentMvvm } from "@yangyuhe/riojs";
let html=require("./welcome.page.html");
require("./welcome.page.scss")
@Component({
    name:"welcome-page",
    template:html
})
class WelcomePage extends ComponentMvvm{

}