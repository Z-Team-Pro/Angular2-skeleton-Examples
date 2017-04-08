import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ImageUploaderQuickComponent } from './image-uploader-quick/image-uploader-quick.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageUploaderQuickComponent
    
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
