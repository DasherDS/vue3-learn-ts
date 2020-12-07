export class LocalStorage{
    public localStorage:any;
    constructor(){
        if(!localStorage){
            throw new Error("Current brower does not support Local Storage")
        }
        this.localStorage = localStorage
    }

    //保存 字符串
    public set(key:string,value:string):void{
        this.localStorage[key] = value
    }

    //获取 字符串
    public get(key:string):any{
        if(key){
            return this.localStorage[key] || " ";
        }
        
    }
    //保存 对象
    public setObject(key:string,value:any):void{
        this.localStorage[key] = JSON.stringify(value)
    }
    //获取 对象
    public getObject(key:string):any{
        if(key){
            return JSON.parse(this.localStorage[key])
        }else{
            throw new Error("key is null")
        }
    }
    //移除
    public remove(key:string):any{
        this.localStorage.removeItem(key)
    }
}

export default new LocalStorage
