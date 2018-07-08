let json:Feature[]=require("./guideline.json")
export function GetFeature(id:string){
    id=id.toUpperCase()
    return json.find(f=>f.id==id)
}
export function GetMenus(){
    let menus:{id:string,name:string,submenus:{name:string,id:string}[]}[]=[]
    json.forEach(f=>{
        let menu:{id:string,name:string,submenus:{name:string,id:string}[]}={
            name:f.name,
            id:f.id,
            submenus:[]
        }
        f.sections.forEach(s=>{
            menu.submenus.push({id:s.id,name:s.name})
        })
        menus.push(menu)
    })
    return menus
}
export interface Feature{
    id:string,
    name:string,
    des:string,
    sections:{
        id:string,
        name:string,
        detail:string[]
    }[]
}