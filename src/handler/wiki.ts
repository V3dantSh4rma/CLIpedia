#!/usr/bin/env node
/**
 * Todo:
 * [*] Save the results in .MD, .JSON AND .TXT 
 * [ ] CLI in C/C++
 */
import axios, { AxiosResponse } from "axios";
import cheerio, { CheerioAPI } from "cheerio";
import FileSaver from "./file";

export default class Wiki {
    private baseAPI: string = 'https://en.wikipedia.org/w/api.php';
    private data: string = '';
    private extensions: Object = {
        TXT: '.txt',
        MD: '.md',
        JSON: '.json'
    };

    async get(query: string): Promise<string|void> {
        let rawText: string = '';

        try {
            const res: AxiosResponse<any> = await axios.get(this.baseAPI, {
                params: {
                    'action': 'parse',
                    'page': query,
                    'format': 'json',
                    'prop': 'text',
                    'redirects': ''
                }
            })
            
            const data = res.data['parse']['text']['*'];
            const $: CheerioAPI = cheerio.load(data);
    
            $('p').each((index: number, elem: any) => {
                rawText += $(elem).text();
            });
                
            return this.data = rawText.replace(/\s*\[.*?\]\s*/g, ' ');
        } catch(e: any){
            return console.error("Invalid query! Please try again.");
        }    
    }
    
    public async search(query: string, output?: ("MD"|"JSON"|"TXT")): Promise<void> {
        if(!query.length) return console.log("Your query is empty! It should be not be an empty string.");
        await this.get(query);
        if(output) return new FileSaver(query, this.data).save(output);
        console.log(this.data);
    }
}