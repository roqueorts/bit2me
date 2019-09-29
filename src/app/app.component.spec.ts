import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './shared/app-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { take } from 'rxjs/operators';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        AppMaterialModule,
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http);
            },
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }
  ));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have active Lang default as 'es'`, () => {

    expect(app.activeLang).toEqual('es');
  });

  it('try event emitter', () => {
    let newActiveLang = '';
    app.cambia.subscribe(activeLang => {
      newActiveLang = activeLang;
    });

    app.cambiar();
    expect(newActiveLang).toEqual('es');

  });

});
