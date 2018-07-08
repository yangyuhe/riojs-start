import { RegisterRouter } from "@yangyuhe/riojs";

RegisterRouter([{
    url:"/welcome",
    component:"welcome-page"
},{
    url:"/guideline",
    component:"container-nav-fragment",
    children:[{
        url:"",
        component:"guideline-home"
    },{
        url:":feature",
        component:"nav-body"
    }]
},{
    redirect:"/welcome"
}])