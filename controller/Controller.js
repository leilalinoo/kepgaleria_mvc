import Model from "../model/Model.js"
import NagyKepView from "../view/NagyKep.js"

class Controller{
    constructor(){
        const MODEL = new Model()

        const NAGYKEPVIEW = new NagyKepView(MODEL.getAktKep(), $(".nagykep"))
        //fel kell íratkozni a view eseményeire

        $(window).on("jobb", ()=>{
            MODEL.jobb()
            let aktKep = MODEL.getAktKep()
            
            NAGYKEPVIEW.nagykepCsere(aktKep)
            console.log(MODEL.getAktKep())
        })
        $(window).on("bal", ()=>{
            MODEL.bal()
            let aktKep = MODEL.getAktKep()
            NAGYKEPVIEW.nagykepCsere(aktKep)
        })
        
    }
}
export default Controller