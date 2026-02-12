import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-chartdemo',
  imports: [],
  templateUrl: './chartdemo.component.html',
  styleUrl: './chartdemo.component.scss',
})
export class ChartdemoComponent {
  arr = [
    {
      id: 1,
      labels: ['早', '五', '晚'],
      label: '花費',
      data: [200, 500, 300],
      backgroundColor: [
        'rgb(255,33,33)',
        'rgb(44, 35, 35)',
        'rgb(156, 124, 124))',
      ],
    },
    {
      id: 2,
      labels: ['game', 'code', 'read'],
      label: 'cost',
      data: [3, 4, 5],
      backgroundColor: [
        'rgb(58, 47, 47)',
        'rgb(233, 136, 136)',
        'rgb(41, 107, 213))',
      ],
    },
  ];
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.arr.forEach((item) => {
      const ctx = document.getElementById(
        'chart-' + item.id,
      ) as HTMLCanvasElement;

      // 設定數據
      let data = {
        // x 軸文字
        labels: item.labels,
        datasets: [
          {
            // 上方分類文字
            label: item.label,
            // 數據
            data: item.data,
            // 線與邊框顏色
            backgroundColor: item.backgroundColor,
            //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
            hoverOffset: 4,
          },
        ],
      };

      // 創建圖表
      let chart = new Chart(ctx, {
        //pie是圓餅圖,doughnut是環狀圖
        type: 'pie',
        data: data,
      });
    });
  }
}
