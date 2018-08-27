import { App, AppMvvm, Reactive, OnInit } from "@yangyuhe/riojs";

import "../assets/style/app.scss";
import "./home.scss";
import "../test/test";

@App({
    el:"#home"
})
class Main extends AppMvvm{
    welcome="welcome to RIO.JS"
}