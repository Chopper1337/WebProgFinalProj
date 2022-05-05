import { Component } from '@angular/core';
import { stringify } from 'querystring';
import { VtApiService } from 'src/services/vt-api.service';
import { VTAPIResponse } from './vt-api-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URL Scanner';
  
  websiteData!:VTAPIResponse;
  error:any;
   
  constructor(private _vtApiService:VtApiService){}
  
  getURLScanReport(WebsiteURL) : boolean{
    this._vtApiService.scanURL(WebsiteURL).subscribe(
     websiteData => {
        this.websiteData=websiteData;
      },
      error => this.error = <any>error
    );
    return false;
  }
}
