import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  title = 'Ivy And The View Engines';

  slideNumber = 1;

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    document.addEventListener('keyup', (e) => this.handleKeyPress(e.key));
    this.router.events.subscribe(event => event instanceof NavigationEnd ?  this.handleNavigation(event) : null);
  }

  private handleKeyPress(key: string) {

    switch (key) {
      case 'ArrowLeft':
        this.pressBack();
        break;

      case 'Enter':
      case 'ArrowRight':
        this.pressForward();
        break;

      default:
        break;
    }

  }

  private pressForward() {
    this.router.navigate(['slide' + String(this.slideNumber + 1) ]).then( () => {});
  }

  private pressBack() {
    this.router.navigate(['slide' + String(this.slideNumber - 1)]).then(() => {});
  }

  private handleNavigation(event: NavigationEnd) {
    let slideNumber = Number(event.urlAfterRedirects.split('slide')[1]);
    isNaN(slideNumber) ? slideNumber = 0 : null;
    slideNumber = slideNumber < 1 ? 1 : slideNumber;
    this.slideNumber = slideNumber;
    console.log('calc done')
  }
}
