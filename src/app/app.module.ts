import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TextInputComponent } from './components/common/text-input/text-input.component';
import { SubHeaderItemComponent } from './components/common/sub-header-item/sub-header-item.component';
import { ParticipantsComponent } from './components/participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TextInputComponent,
    SubHeaderItemComponent,
    ParticipantsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
