import {IWeb} from "./interface/website"

export interface VTAPIResponse {
    data:IData
}

interface IData{
   attributes:IWeb;
   last_analysis_stats:last_analysis_stats
}

interface last_analysis_stats{
    "harmless":string,
    "malicious":string,
    "suspicious":string,
    "undetected":string,
    "timeout":string,
}
