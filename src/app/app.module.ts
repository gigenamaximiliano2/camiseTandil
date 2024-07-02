import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamListComponent } from './cam-list/cam-list.component';

import { FormsModule } from '@angular/forms';
import { CamAboutComponent } from './cam-about/cam-about.component';
import { CamCamTandilComponent } from './cam-cam-tandil/cam-cam-tandil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CamListComponent,
    CamAboutComponent,
    CamCamTandilComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
