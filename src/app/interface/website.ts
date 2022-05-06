import { stringify } from "querystring";

export interface IWeb {
    id?:string;
    title:string;
    url:string;
    reputation:string;
    last_analysis_stats:last_analysis_stats;
    last_submission_date:string;
}

export interface last_analysis_stats{
    "harmless":string,
    "malicious":string,
    "suspicious":string,
    "undetected":string,
    "timeout":string,
}

export class Website {
    id?:string;
    title:string;
    url:string;
    reputation:string;
    last_analysis_stats:last_analysis_stats;
    last_submission_date:string;
    
    constructor(title:string,url:string,reputation:string, last_analysis_stats:last_analysis_stats, last_submission_date:string){
        this.title = title;
        this.url = url;
        this.reputation = reputation;
        this.last_analysis_stats = last_analysis_stats;
        this.last_submission_date = last_submission_date;
    }
}