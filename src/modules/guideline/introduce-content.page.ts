import { Component,ComponentMvvm, OnInit, Data } from "@yangyuhe/riojs";
import { Feature, GetFeature } from "../../modules/guideline/guideline.service";
let html=require("./introduce-content.page.html")
@Component({
    name:"nav-body",
    template:html
})
class NavbodyComponent extends ComponentMvvm{
    
    lesson:Feature={id:"",name:"",des:"",sections:[]}



    @OnInit
    init(){
        let feature=this.$router.active.getParam("feature")
        if(feature!=null){
            this.lesson=GetFeature(feature)
        }
    }
}