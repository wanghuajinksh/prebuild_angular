import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './navigation/filter/filter.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

//services
import { UserListsService } from './user-lists/user-lists.service';
import { FilterService } from  './navigation/filter/filter.service';
import { UserProfileService } from './user-profile/user-profile.service';
import { AppHttpClient } from './http-client';
import { PageStatusService } from  './services/page-status';
import { Ng2CarouselamosModule } from './ng2-carouselamos';
import { CategoryComponent } from './user-profile/category/category.component';
import { CloseButtonComponent } from './user-profile/category/close-button/close-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FilterComponent,
    UserListsComponent,
    UserProfileComponent,
    CategoryComponent,
    CloseButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
  ],
  providers: [
    AppHttpClient,
    UserListsService,
    FilterService,
    UserProfileService,
    PageStatusService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
