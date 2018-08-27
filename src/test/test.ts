import { Component, ComponentMvvm } from "@yangyuhe/riojs";
import "./test.scss";
const html=require("./test.html");


@Component({
    name:"test",
    template:html
})
class Test extends ComponentMvvm{
    
}