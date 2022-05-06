export interface VTAPIResponse {
    data:IData
}

interface IData{
   attributes:IWeb;
   id:string;
}

export interface IWeb {
    title:string;
    url:string;
    reputation:string;
    last_analysis_stats:last_analysis_stats;
    last_submission_date:string;
}

interface last_analysis_stats{
    "harmless":string,
    "malicious":string,
    "suspicious":string,
    "undetected":string,
    "timeout":string,
}
