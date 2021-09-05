export class Menu{
    public  itemName?:string;
    public  itemPrice?:number;
    public static test:string="Hello World";
    public constructor (itemName?:string,itemPrice?:number)
    {
        this.itemName=itemName;
        this.itemPrice=itemPrice;
    }
}
