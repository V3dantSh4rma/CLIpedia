#!/usr/bin/env node
import * as fs from "fs";

export default class FileSaver {
    public extensions: Object = {
        TXT: '.txt',
        MD: '.md',
        JSON: '.json'
    }
    private title: string;
    private content: string;

    constructor(title: string, content: string){
        this.title = title;
        this.content = content;
    }

    public save(output: "MD"|"JSON"|"TXT"): void {
        const filename = this.validateString(this.title);
        const ext = this.extensions[output];
        let payload: string;

        switch(ext){
            case '.txt':
                payload = `${this.title}\n\n${this.content}`;
                break;
                
            case '.md':
                payload = `# ${this.title}\n\n${this.content}`;
                break;

            case '.json':
                payload = JSON.stringify({
                    title: this.title,
                    content: this.content
                });
                break;
                
            default:
                return console.error("Invalid Extension. Valid Extensions are: TXT, MD, JSON");
            }
            
            return fs.writeFile(`${filename}${ext}`, payload, (err: any) => {
                if(err) return console.error(err);
                console.log(`(-) Output saved to: ${filename}${ext}`);
            });
    }
    
    private validateString(title: string): string {
        return title.replace(/ /g, '_').toLowerCase(); // Hello World -> hello_world
    }
}