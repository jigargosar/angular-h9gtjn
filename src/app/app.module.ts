import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

import { Component } from '@angular/core';
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <p>
      Select a title to set on the current HTML document:
    </p>

    <ul>
      <li><a (click)="setTitle('morning!')">morning</a>.</li>
      <li><a (click)="setTitle('afternoon!')">afternoon</a>.</li>
      <li><a (click)="setTitle('evening!')">evening</a>.</li>
    </ul>
  `
})
class AppComponent {
  public constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [
    //AppComponent
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
