import { Component, Input, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild("imgDiv")
  self: ElementRef;

  constructor(){

  }

  ngAfterViewInit(){
    let height =this.self.nativeElement.offsetParent.clientHeight;
    alert(height);
  }
  
}
