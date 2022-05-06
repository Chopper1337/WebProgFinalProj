import { Component, OnInit } from '@angular/core';
import { VtApiService } from 'src/app/services/vt-api.service';
import { IWeb, Website } from '../interface/website';
import { WebsiteDbApiService } from '../services/website-db-api.service';

@Component({
  selector: 'app-websitelist',
  templateUrl: './websitelist.component.html',
  styleUrls: ['./websitelist.component.css'],
  providers: [VtApiService]
})
export class WebsitelistComponent implements OnInit {
  websitesData!:IWeb[];

  constructor(private _websiteDBAPIService:WebsiteDbApiService) { }

  ngOnInit(): void {
    this._websiteDBAPIService.getWebsitesData().subscribe(websitesData => {this.websitesData = websitesData})
  }

}
