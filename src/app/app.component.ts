import { Component, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

export interface Idioma {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public idiomas: Idioma[];
  public activeLang;
  public cambia = new EventEmitter<string>();

  constructor(private translate: TranslateService) {
    this.activeLang = 'es';
    translate.setDefaultLang(this.activeLang);
    this.translate.get('idiomas').pipe(take(1)).subscribe(idiomas => this.idiomas = idiomas);
  }

  cambiar() {
    this.translate.use(this.activeLang);
    this.cambia.emit(this.activeLang);
    this.translate.get('idiomas').pipe(take(1)).subscribe(idiomas => this.idiomas = idiomas);
  }
}
