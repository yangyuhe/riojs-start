import { Component,ComponentMvvm, OnInit, Data } from "@yangyuhe/riojs";
import { GetMenus } from "../../modules/guideline/guideline.service";

let html=require("./container-nav.fragment.html")
@Component({
    name:"container-nav-fragment",
    template:html
})
class ContainerNavFragment extends ComponentMvvm{
    @Data
    menus:{id:string,name:string,submenus:{id:string,name:string}[]}[]=[]

    @OnInit
    init(){
        this.menus= GetMenus()
    }
}