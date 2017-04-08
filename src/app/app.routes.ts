import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageUploaderQuickComponent } from './image-uploader-quick/image-uploader-quick.component';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'ImageUploader',component:ImageUploaderQuickComponent}
];

