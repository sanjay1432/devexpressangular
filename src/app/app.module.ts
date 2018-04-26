import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NetworkDevicesComponent } from './network-devices/network-devices.component';
import {MatButtonModule} from '@angular/material/button';
import { routes } from './app.router';
import {MatTabsModule} from '@angular/material/tabs';
import { DxTabPanelModule,DxCheckBoxModule, DxTemplateModule } from 'devextreme-angular';
import { AppService } from './app.service';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    NetworkDevicesComponent
  ],
  imports: [
    BrowserModule,DxButtonModule,HttpClientModule,BrowserAnimationsModule,
    MatSidenavModule,MatExpansionModule,MatListModule,MatButtonModule,
    MatIconModule,routes,MatTabsModule,DxTabPanelModule,DxCheckBoxModule,DxTemplateModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
