import { Component } from '@angular/core';
import { HttpClientService } from '../../@services/http-client.service';

@Component({
  selector: 'app-apidemo',
  imports: [],
  templateUrl: './apidemo.component.html',
  styleUrl: './apidemo.component.scss',
})
export class ApidemoComponent {
  constructor(private http: HttpClientService) {}
  testData!:any;
  city!:string;
  area!:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.getApi(
      'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-C947A3E5-F386-4189-B35D-7A5DAEB29BF7&limit=3&offset=3'
    ).subscribe((res:any)=>{
      let result = res.records.Locations;
      this.city = result[0].LocationsName;
      this.area = result[0].Location;
      console.log(result);
      console.log(this.area)

    });
  }
}
