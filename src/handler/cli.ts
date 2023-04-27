import Wiki from "./wiki";

export default class CLI {
    inst: Wiki;

    constructor(inst: Wiki){
        this.inst = inst;
    }
    public init(): Promise<void>|void {
        type extensions = "MD"|"JSON"|"TXT";
        const query2search: string = process.argv[2];
        const flag: string = process.argv[3];
        const ext: string = process.argv[4];
        
        if(!query2search) return console.error("You must specify a query which you want to search on Wikipedia!");
        
        if(flag && !ext) return console.error("You must specify a valid extensions. Available extensions are: JSON, MD, TXT");
        
        if((flag == ("-o"||"--output")) && ext as extensions){
            return this.inst.search(query2search, ext as extensions); 
        }
        
        return this.inst.search(query2search)
    }
}