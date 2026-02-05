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
  dayOptions!: string[]; // 下拉三天
  selectedDay!: string; // 目前選擇
  filteredData!: any[]; // 顯示資料
  currentTemp!: string;
  currentAppTemp!: string;
  currentWeather!: string;
  currentWeatherDesc!: string;
  currentTime!: string;
  currentWeathercode!:number;
  getNext3Days() {
    const days = [];
    const now = new Date();

    for (let i = 0; i < 3; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);

      const dateStr = d.toISOString().slice(0, 10); // 2026-02-05
      days.push(dateStr);
    }

    return days;
  }

  filterByDay(day: string) {
    this.filteredData = this.oneHourData.filter((item: any) =>
      item.time.startsWith(day),
    );
  }

  updateCurrentWeather() {
    if (!this.oneHourData || !this.threeHourData) return;

    const now = new Date();

    // ===== 逐小時資料（溫度/體感）
    for (let i = 0; i < this.oneHourData.length - 1; i++) {
      const start = new Date(this.oneHourData[i].time);
      const end = new Date(this.oneHourData[i + 1].time);

      if (now >= start && now < end) {
        this.currentTemp = this.oneHourData[i].temperature;
        this.currentAppTemp = this.oneHourData[i].apparentTemperature;
        this.currentTime = this.oneHourData[i].time;
        break;
      }
    }

    // ===== 3小時區間資料（天氣）
    for (let i = 0; i < this.threeHourData.length; i++) {
      const start = new Date(this.threeHourData[i].startTime);
      const end = new Date(this.threeHourData[i].endTime);

      if (now >= start && now < end) {
        this.currentWeather = this.threeHourData[i].weather;
        this.currentWeatherDesc = this.threeHourData[i].weatherDes;
        this.currentWeathercode=this.threeHourData[i].weatherCode;
        break;
      }
    }
  }

  areaChange(change: string) {
    this.data = this.location.find(
      (element: any) => element.LocationName === change,
    );
    this.group(this.data);
    this.filterByDay(this.selectedDay);
    this.updateCurrentWeather();
    // console.log('teas',this.data)
  }
  formatTime(dateStr: string) {
    const d = new Date(dateStr);

    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      '0',
    )}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(
      2,
      '0',
    )}:00`;
  }
  group(data: any) {
    let test = [];
    let threetest = [];
    for (let i = 0; i < data.WeatherElement[0].Time.length; i++) {
      let item = {
        time: this.formatTime(data.WeatherElement[0].Time[i].DataTime), //抓共同時間
        temperature: data.WeatherElement[0].Time[i].ElementValue[0].Temperature, //溫度
        apparentTemperatureName: data.WeatherElement[3].ElementName, //體感溫度
        apparentTemperature:
          data.WeatherElement[3].Time[i].ElementValue[0].ApparentTemperature,
      };
      test.push(item);
    }
    for (let i = 0; i < data.WeatherElement[8].Time.length; i++) {
      let item = {
        startTime: this.formatTime(data.WeatherElement[8].Time[i].StartTime),
        endTime: this.formatTime(data.WeatherElement[8].Time[i].EndTime),
        weather: data.WeatherElement[8].Time[i].ElementValue[0].Weather,
        weatherDes:
          data.WeatherElement[9].Time[i].ElementValue[0].WeatherDescription,
        weatherCode: data.WeatherElement[9].Time[i].ElementValue[0].WeatherCode,
      };
      threetest.push(item);
    }
    // console.table(threetest);
    this.oneHourData = test;
    this.threeHourData = threetest;

    // console.table(test);
  }
  ngOnInit(): void {
    this.dayOptions = this.getNext3Days();
    this.selectedDay = this.dayOptions[0]; // 預設今天

    this.http
      .getApi(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-C947A3E5-F386-4189-B35D-7A5DAEB29BF7&limit=3&offset=3',
      )
      .subscribe((res: any) => {
        let result = res.records.Locations[0];
        this.city = result.LocationsName;
        this.location = result.Location;
        this.area = result.Location.map((test: any) => test.LocationName);
        this.choseArea = this.area[0]; //預設第一個
        this.areaChange(this.choseArea); //直接顯示
        this.updateCurrentWeather();
        this.filterByDay(this.selectedDay);
        console.log(this.location);

        // console.log(this.oneHourData);
        // console.log(this.threeHourData);
      });
  }
}
