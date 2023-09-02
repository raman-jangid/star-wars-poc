import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { AppHttpInterceptor } from './interceptor/app.http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
       provide: HTTP_INTERCEPTORS,
       useClass: AppHttpInterceptor,
       multi: true,
    },
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
