import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogan: string = 'Fresh blooms for every moment.';

 // getSlogan(){
   // return "This is the new slogan"
  //}

  source: string = 'https://wallpaperaccess.com/full/928222.jpg'
}
