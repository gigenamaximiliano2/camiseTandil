import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamListComponent } from './cam-list/cam-list.component';

import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CamCamTandilComponent } from './cam-cam-tandil/cam-cam-tandil.component';

@NgModule({
  declarations: [
    AppComponent,
    CamListComponent,
    CarritoComponent,
    InputIntegerComponent,
    CamCamTandilComponent
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
