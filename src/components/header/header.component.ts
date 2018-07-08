import { Component, ComponentMvvm } from "@yangyuhe/riojs";

let html=require("./header.component.html");
@Component({
    name:"header",
    template:html
})
class Header extends ComponentMvvm{

}