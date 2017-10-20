import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = true;
  myFavLang = [
	  {'name': 'html', 'type': 'frontend'},
	  {'name': 'css', 'type': 'frontend'},
	  {'name': 'js', 'type': 'frontend'},
	  {'name': 'ruby', 'type': 'backend'},
  ];
}
