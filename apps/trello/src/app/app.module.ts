import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../../../../libs/ui/src/lib/ui.module';
import { TrelloBoardModule } from '../app/trello-board/trello-board.module';
import { RcItemComponent } from 'libs/ui/src/lib/rc-item/rc-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

  
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TrelloBoardModule, BrowserAnimationsModule, UiModule, StoreModule.forRoot(reducers, { metaReducers }), !environment.production ? StoreDevtoolsModule.instrument() : [] ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UiModule],
  entryComponents: [
    RcItemComponent
 ],
})
export class AppModule {}
