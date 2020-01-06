import {AfterViewInit, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Ivy And The View Engines';

  slideNumber = 1;

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    document.addEventListener('keyup', (e) => this.handleKeyPress(e.key));
  }

  private handleKeyPress(key: string) {

    switch (key) {

      case 'ArrowLeft':
        this.pressBack();
        break;

      case 'ArrowRight':
        this.pressForward();
        break;

      default:
        break;
    }

  }

  private pressForward() {
    this.router.navigate(['slide' + String(this.slideNumber + 1) ]).then( () => this.slideNumber += 1);
  }

  private pressBack() {
    this.router.navigate(['slide' + String(this.slideNumber - 1)]).then(() => this.slideNumber -= 1);
  }
}
