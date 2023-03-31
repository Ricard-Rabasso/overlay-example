import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen = false;
  title = 'overlay-example';

  showOverlay(){
    this.isOpen = true;
  }

  close(){
    this.isOpen = false;
  }
}
