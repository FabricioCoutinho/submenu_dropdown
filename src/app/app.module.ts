import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbTooltipModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule,
    NgbCollapseModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
