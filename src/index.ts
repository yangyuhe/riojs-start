import { App, AppMvvm } from "@yangyuhe/riojs";
import "bootstrap";
import "./style/app.scss";

function importAll(r:any) {
    r.keys().forEach((req:any)=>r(req));
}
importAll((require as any).context('./', true, /\.ts$/));

@App({
    el:"#app"
})
class Main extends AppMvvm{
    
}