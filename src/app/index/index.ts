import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    img {
      position: fixed;
      top: 0;
      width: 100%;
    }
  `],
  template: `
    <a [href]="url" target="_blank" class="">
      <img [src]="codeForVilniusLogo">
    </a>
  `
})
export class IndexComponent {
  codeForVilniusLogo = 'assets/img/c4v-logo.jpeg';
  url = 'http://codeforvilnius.lt';
}
