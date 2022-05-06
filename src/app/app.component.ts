import { Component } from '@angular/core';
import { stat } from 'fs';
import { stringify } from 'querystring';
import { VtApiService } from 'src/app/services/vt-api.service';
import { IWeb,last_analysis_stats, Website } from './interface/website';
import { WebsiteDbApiService } from './services/website-db-api.service';
import { VTAPIResponse } from './vt-api-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VtApiService]
})
export class AppComponent {
  title = 'URL Scanner';
  
  websiteData!:VTAPIResponse;
  error:any;
   
  constructor(private _vtApiService:VtApiService, private _websiteDBAPIService:WebsiteDbApiService){}
  
  getURLScanReport(WebsiteURL:string): boolean{
    this._vtApiService.scanURL(WebsiteURL).subscribe(
     websiteData => {
        this.websiteData=websiteData;
        console.log(websiteData.data.attributes)
      },
      error => this.error = <any>error
    );
    return false;
  }
  
  addToFavourites(title:string, url:string, reputation:string, last_analysis_stats:last_analysis_stats, last_submission_date:string):boolean{
    let tempWebsite: IWeb
    let stats:last_analysis_stats={
      harmless: '',
      malicious: '',
      suspicious: '',
      undetected: '',
      timeout: '',
    };
    tempWebsite = ({
      title:title,url:url,reputation:reputation,last_analysis_stats:stats,last_submission_date:last_submission_date}
      );
    this._websiteDBAPIService.addWebsiteData(tempWebsite)
    return false;
  }
}
