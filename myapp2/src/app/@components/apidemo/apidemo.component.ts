import { Component } from '@angular/core';
import { HttpClientService } from '../../@services/http-client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apidemo',
  imports: [FormsModule],
  templateUrl: './apidemo.component.html',
  styleUrl: './apidemo.component.scss',
})
export class ApidemoComponent {
  constructor(private http: HttpClientService) {}
  oneHourData!: any;
  threeHourData!: any;
  city!: string;
  area!: any[];
  location!: any;
  choseArea!: any;
  data!: any[];

  areaChange(change: string) {
    this.data = this.location.find((element: any) => element.LocationName === change);
    this.group(this.data);
    // console.log('teas',this.data)
  }

  group(data: any) {
    let test = [];
    let threetest = [];
    for (let i = 0; i < data.WeatherElement[0].Time.length; i++) {
      let item = {
        time: data.WeatherElement[0].Time[i].DataTime, //抓共同時間
        temperature: data.WeatherElement[0].Time[i].ElementValue[0].Temperature, //溫度
        apparentTemperatureName: data.WeatherElement[3].ElementName, //體感溫度
        apparentTemperature:
          data.WeatherElement[3].Time[i].ElementValue[0].ApparentTemperature,
      };
      test.push(item);
    }
    for (let i = 0; i < data.WeatherElement[8].Time.length; i++) {
      let item = {
        startTime: data.WeatherElement[8].Time[i].StartTime,
        endTime: data.WeatherElement[8].Time[i].EndTime,
        weather: data.WeatherElement[8].Time[i].ElementValue[0].Weather,
        weatherDes:
          data.WeatherElement[9].Time[i].ElementValue[0].WeatherDescription,
      };
      threetest.push(item);
    }
    // console.table(threetest);
    this.oneHourData = test;
    this.threeHourData = threetest;

    // console.table(test);
  }
  ngOnInit(): void {
    this.http
      .getApi(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-C947A3E5-F386-4189-B35D-7A5DAEB29BF7&limit=3&offset=3',
      )
      .subscribe((res: any) => {
        let result = res.records.Locations[0];
        this.city = result.LocationsName;
        this.location = result.Location;
        this.area = result.Location.map((test: any) => test.LocationName);
        this.choseArea = this.area[0];//預設第一個
        this.areaChange(this.choseArea);//直接顯示
        // console.log(this.oneHourData);
        // console.log(this.threeHourData);
      });
  }
}
