import { Component } from '@angular/core';
import { count, interval, min } from 'rxjs';

@Component({
  selector: 'app-mrr-bubble-chart',
  templateUrl: './mrr-bubble-chart.component.html',
  styleUrls: ['./mrr-bubble-chart.component.css']
})
export class MrrBubbleChartComponent {
  options: any;

  constructor() {
    this.options = {
      autoSize: true,
      title: {
        
        text: '  ',
        spacing:20

      },
      
      series: [
        {
          type: 'bubble',
          xKey: 'x',
          yKey: 'y',
          sizeKey: 'size',
          labelKey: 'label',
          fill: '#ead7f0', // Color for United States
          stroke:'#ead7f0',
          data: [
            { x: 400, y: 12, size: 90, label: "$200" },
            { x: 560, y: 3.5, size: 55, label: "$500" }
          ],
          title: 'United States',
          size: 10, //defaults to 7
          maxSize: 100, //defaults to 30
          domain: [0, 100], 
        },
        {
          type: 'bubble',
          xKey: 'x',
          yKey: 'y',
          sizeKey: 'size',
          labelKey: 'label',
          fill: '#78a4cf', // Color for United Kingdom
          stroke:'#78a4cf',
          data: [
            { x: 320, y: 11, size: 45, label: "$300" },
            { x: 500, y: 2, size: 55, label: "$100" },
            { x: 650, y: 9, size: 40, label: "$600" }
          ],
          title: 'Canada',
          size: 10, //defaults to 7
          maxSize: 100, //defaults to 30
          domain: [0, 100], 
        },
        
        {
          type: 'bubble',
          xKey: 'x',
          yKey: 'y',
          sizeKey: 'size',
          labelKey: 'label',
          fill: '#b9d7b1', // Color for Australia
          stroke:'#b9d7b1',
          data: [
            { x: 150, y: 0, size: 15, label: "$300" },
            { x: 200, y: 6, size: 50, label: "$600" },
            { x: 150, y: 11, size: 25, label: "$100" }
          ],
          title: 'Australia',
          size: 10, //defaults to 7
          maxSize: 100, //defaults to 30
          domain: [0, 100], 
        },
        {
          type: 'bubble',
          xKey: 'x',
          yKey: 'y',
          sizeKey: 'size',
          labelKey: 'label',
          fill: '#ffa026', // Color for Canada
          stroke:'#ffa026',
          data: [
            { x: 50, y: 7.5, size: 12, label: "$400" },
            { x: 100, y: 4, size: 25, label: "$200" },
            { x: 620, y: 0, size: 15, label: "$500" }
          ],
          title: 'India',
          size: 10, //defaults to 7
          maxSize: 100, //defaults to 30
          domain: [0, 100], 
        },
        {
          type: 'bubble',
          xKey: 'x',
          yKey: 'y',
          sizeKey: 'size',
          labelKey: 'label',
          fill: '#ffcf8e', // Color for United Kingdom
          stroke:'#ffcf8e',
          data: [
            { x: 280, y: 1, size: 15, label: "$300" },
            { x: 240, y: 5, size: 30, label: "$100" },
            { x: 350, y: 6, size: 30, label: "$600" }
          ],
          title: 'United Kingdom',
          size: 10, //defaults to 7
          maxSize: 100, //defaults to 30
          domain: [0, 100], 
        },
        
      ],
      axes: [
        {
          type: 'number',
          position: 'bottom',
         
          interval:{
            step:100,
          },
          gridLine:{
            enabled:false,
          },
          label: {
            // fontFamily:"Quicksand",
            color:"#cfc6c6",
            formatter: ({ value }: { value: number }) => `$${value}` // Add $ before each tick value
          },
          line:{
            enabled:true,
            stroke:"#cfc6c6"
          },
          min: 0, // Set the minimum value to 0 explicitly
          max: 700 
          
        },
        
        {
          type: 'number',
          position: 'left',
       
          interval:{
            step:2,
          },gridLine:{
            enabled:false,
          },
          line:{
            enabled:true,
             stroke:"#cfc6c6"
          },
          label: {
            // fontFamily:"Quicksand",
            color:"#cfc6c6",
            formatter: ({ value }: { value: number }) => `$${value}` // Add $ before each tick value
          },
          min:-2,
          max:14
         
         
        } 
       
      ],
      legend: {
        position: 'bottom', // Positioning legend at the bottom
        spacing: 20,        // Increase spacing if necessary
        // maxWidth: 1000,     // Adjust to fit all items
        // maxHeight: 100,     // Adjust to fit all items, particularly when at the bottom or top
        item: {
          marker: {
            size: 10
          },
          label: {
            
            fontSize: 8,
            fontWeight:600,
          }}

      },
      width:450,
      height:400,
    };
  }
}
