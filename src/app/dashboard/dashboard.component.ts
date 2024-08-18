import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Color, ColorHelper, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 
  @ViewChild('hoverAudio') hoverAudio!: ElementRef<HTMLAudioElement>;
  // Data for the Page Views Pie Chart
  pageViewsData = [
    { "name": "Organic Search", "value": 85 },
    { "name": "Direct", "value": 2 },
    { "name": "Referral", "value": 13 }
  ];
  selectedDate!: Date;

  // Data for the MRR Stats by Country Bubble Chart
  mrrStatsData = [
    {
      "name": "United States",
      "series": [
        {
          "name": "$200",
          "x": 400,
          "y": 12,
          "r": 25
        },
        {
          "name": "$500",
          "x": 550,
          "y": 5,
          "r": 15        },
       
      ]
    },
    {
      "name": "Australia",
      "series": [
        {
          "name": "$300",
          "x": 150,
          "y": 0,
          "r": 10
        },
        {
          "name": "$600",
          "x": 200,
          "y": 6,
          "r": 15
        },
        {
          "name": "$100",
          "x": 150,
          "y": 11,
          "r": 12
        }
      ]
    },
    {
      "name": "Canada",
      "series": [
        {
          "name": "$400",
          "x": 50,
          "y": 7.5,
          "r": 12
        },
        {
          "name": "$200",
          "x": 100,
          "y": 4,
          "r": 7
        },
        {
          "name": "$500",
          "x": 620,
          "y": 0,
          "r": 9
        }
      ]
    },  
    {
      "name": "United Kingdom",
      "series": [
        {
          "name": "$300",
          "x": 280,
          "y": 1.8,
          "r": 8
        },
        {
          "name": "$100",
          "x": 240,
          "y": 5,
          "r": 30
        },
        {
          "name": "$600",
          "x": 350,
          "y": 6,
          "r": 10
        }
      ]
    }
  ];
 

  xAxisTickFormatting(value: number): string {
    return `$${value}`;
  }
  yAxisTickFormatting(value: number): string {
    return `$${value/1000}K`;
  }
  openDatePicker(picker: MatDatepicker<Date>) {
    picker.open();
  }
  public legendPosition: LegendPosition = LegendPosition.Below;

  // Data for the MRR Trends Bar Chart
   mrrData = [
    {
      "name": "Jan-Feb",
      "series": [
        {
          "name": "Product A",
          "value": -1002
        },
        {
          "name": "Product B",
          "value": 0
        },
        {
          "name": "Product C",
          "value": 6800
        },
        {
          "name": "Product D",
          "value": 4610
        }
      ]
    },
    {
      "name": "Mar-Apr",
      "series": [
       
        {
          "name": "Product B",
          "value": -800
        }, {
          "name": "Product A",
          "value": -2800
        },
        {
          "name": "Product C",
          "value": 5900
        },
        {
          "name": "Product D",
          "value": 7900
        }
      ]
    },
    {
      "name": "May-Jun",
      "series": [
       
        {
          "name": "Product B",
          "value": -800
        }, {
          "name": "Product A",
          "value": -1100
        },
        {
          "name": "Product C",
          "value": 6000
        },
        {
          "name": "Product D",
          "value": 5000
        }
      ]
    },
    {
      "name": "Jul-Aug",
      "series": [
        {
          "name": "Product B",
          "value": -800
        }, {
          "name": "Product A",
          "value": -1300
        },
        {
          "name": "Product C",
          "value": 7000
        },
        {
          "name": "Product D",
          "value": 5300
        }
      ]
    },
    {
      "name": "Sep-Oct",
      "series": [
        {
          "name": "Product B",
          "value": -300
        }, {
          "name": "Product A",
          "value": -3300
        },
        {
          "name": "Product C",
          "value": 5000
        },
        {
          "name": "Product D",
          "value": 4900
        }
      ]
    },
    {
      "name": "Nov-Dec",
      "series": [
        {
          "name": "Product B",
          "value": -300
        }, {
          "name": "Product A",
          "value": -300
        },
        {
          "name": "Product C",
          "value": 2000
        },
        {
          "name": "Product D",
          "value": 4000
        }
      ]
    }
  ];
  labelFormattingp(c: any): string {
    return `<span style="font-size: 6px;">${c.label}</span>`;
  }
  // Color schemes for charts
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Time,
    domain: ['#719ad3', '#75b165', '#ffa026', '#ffc744']
  };
  
  colorScheme2: Color = {
    name: 'custom2',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#75b165', '#fec547', '#7099d1']
  };
  public colors!: ColorHelper;
  colorScheme3: Color = {
    name: 'custom3',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#ead7f0', '#b9d7b1', '#ff9f00','#ffcf8e']
  };

  // Properties for the doughnut chart
  view: [number, number] = [700, 400]; // Tuple with exactly two numbers
 
   activeEntries!: any[];
   chartData!: { name: string; series: { name: string; value?: string | number; }[]; }[];
   chartNames!: string[] ;
  public legendLabelActivate(item: any): void {
    this.activeEntries = [item];
}

public legendLabelDeactivate(item: any): void {
    this.activeEntries = [];
}
private audio!: HTMLAudioElement;

constructor() {
  // Initialize the audio object in the constructor
// Ensure the path is correct
  this.selectedDate = new Date();

}
  public ngOnInit(): void {
    // Get chartNames
   
    this.chartNames = this.mrrStatsData.map((d: any) => d.name);
    // Convert hex colors to ColorHelper for consumption by legend
    this.colors = new ColorHelper(this.colorScheme3,ScaleType.Ordinal,  this.chartNames, this.colorScheme);
}

}
