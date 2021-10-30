class App{
    constructor(){

    }
    addmModule(m){
        this[m.name]=new m()
    }
}
export default App