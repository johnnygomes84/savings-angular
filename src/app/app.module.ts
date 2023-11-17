import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonNewComponent } from './components/person-new/person-new.component'
import { FormsModule } from '@angular/forms';
import { DialogService } from './services/dialog.service';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    PersonListComponent,
    PersonNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DialogService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
