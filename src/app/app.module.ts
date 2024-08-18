import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MrrBubbleChartComponent } from './mrr-bubble-chart/mrr-bubble-chart.component'; // Import MatIconModule
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from "ag-charts-community";
import { MatSelectModule } from '@angular/material/select';



// import { MrrStackedBarChartComponent } from './mrr-stacked-bar-chart/mrr-stacked-bar-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MrrBubbleChartComponent,
    // MrrStackedBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    AgCharts,
    MatSelectModule,
    MatFormFieldModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
