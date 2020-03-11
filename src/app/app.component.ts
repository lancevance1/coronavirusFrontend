import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coronavirusFrontend';
  public showToggleMenu: boolean = false;
  // public data: any;
  // api: string = 'https://data.cdc.gov/resource/rpvx-m2md.json';

  onMenuToggle() {
    this.showToggleMenu = !this.showToggleMenu;
    // this.data = JSON.parse(this.api);

  }

}
