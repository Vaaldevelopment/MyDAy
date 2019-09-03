import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddDataComponent } from './add-data/add-data.component';
import { DataEntryComponent } from './HR/data-entry/data-entry.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FormsModule }   from '@angular/forms';
import { DashboardComponent } from './Employee/dashboard/dashboard.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { from } from 'rxjs';
import { AppService } from './app.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { TeamTimeComponent } from './team-time/team-time.component';
import { MyTimeComponent } from './my-time/my-time.component';
export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add-data', component: DataEntryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee-dashboard', component: DashboardComponent},
  { path: 'team-view', component: TeamViewComponent},
  { path: 'team-time', component: TeamTimeComponent},
  { path: 'my-time', component: MyTimeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddDataComponent,
    DataEntryComponent,
    HeaderNavComponent,
    DashboardComponent,
    TeamViewComponent,
    TeamTimeComponent,
    MyTimeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true } // <-- debugging purposes only
    ),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
    ScheduleAllModule, RecurrenceEditorAllModule,
    
    FullCalendarModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
