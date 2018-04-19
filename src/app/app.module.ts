import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataViewBoxComponent } from './common/main-container/data-view-box/data-view-box.component';
import { DataActionBarComponent } from './common/main-container/data-view-box/data-action-bar/data-action-bar.component';
import { DataTableComponent } from './common/main-container/data-view-box/data-table/data-table.component';
import { LeftMenuComponent } from './common/left-menu/left-menu.component';
import { MainContainerComponent } from './common/main-container/main-container.component';
import { NotifyBoxComponent } from './common/notify-box/notify-box.component';
import { UserProfileBoxComponent } from './common/main-container/user-profile-box/user-profile-box.component';
import { SearchComponent } from './common/main-container/data-view-box/data-action-bar/search/search.component';
import { SortComponent } from './common/main-container/data-view-box/data-action-bar/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MainContainerComponent,
    NotifyBoxComponent,
    UserProfileBoxComponent,
    DataViewBoxComponent,
    DataActionBarComponent,
    DataTableComponent,
    SearchComponent,
    SortComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
