import {  Http,HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';

@Component({
    moduleId: 'ImageUploaderQuickModule',
    selector: 'image-uploader-quick',
    templateUrl: 'image-uploader-quick.component.html',
    styleUrls: ['image-uploader-quick.component.css']
})
export class ImageUploaderQuickComponent {

image:File;
text:string;
constructor( private http: Http ){
    this.text="Upload Image";
}

//call jquery to preivew tha image 
 fileChangeEvent(fileInput: any)  {
      if (fileInput.target.files && fileInput.target.files[0]) {
//save the selected image in our local var
                   this.image=fileInput.target.files[0];

        var reader = new FileReader();
        reader.onload = function (e : any) {
            
            $('#image').attr('src', e.target.result);
            console.log(fileInput.target.files[0]);
         
 
  }

        reader.readAsDataURL(fileInput.target.files[0]);
      
    }
}


//uploade image function 

uploadimage(){
var formData = new FormData();
formData.append("image",this.image );
return this.http.post('http://Yourserver.com/UploadeFileAPI',formData)
.map(response =>response.json()).subscribe(
result=>{
this.text="image uploaded successfully";
console.log("image uploaded");
},
error=>{
this.text="Some Error in image Uploading";
console.log(error);
}

)

}




}
