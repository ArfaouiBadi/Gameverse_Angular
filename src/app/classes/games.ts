export class Games {
    id:Number;
    name:string;
    photo:string;
    platform:string;
    curruntPlayers:Number;
    rate:Number;
    constructor(id:Number,name:string,photo:string,platform:string,curruntPlayers:Number,rate:Number){
        this.id=id;
        this.name=name;
        this.platform=platform;
        this.curruntPlayers=curruntPlayers;
        this.rate=rate;
        this.photo=photo
    }
}
