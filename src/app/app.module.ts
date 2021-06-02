import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './HealthCare/appointment/appointment.component';
import { DiagnosticCenterComponent } from './HealthCare/diagnostic-center/diagnostic-center.component';
import { DiagnosticTestComponent } from './HealthCare/diagnostic-test/diagnostic-test.component';
import { HomeComponent } from './HealthCare/home/home.component';
import { LoginComponent } from './HealthCare/login/login.component';
import { NopageComponent } from './HealthCare/nopage/nopage.component';
import { PatientComponent } from './HealthCare/patient/patient.component';
import { TestResultComponent } from './HealthCare/test-result/test-result.component';
import { UserComponent } from './HealthCare/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PatientComponent,
    AppointmentComponent,
    DiagnosticCenterComponent,
    DiagnosticTestComponent,
    TestResultComponent,
    HomeComponent,
    LoginComponent,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
