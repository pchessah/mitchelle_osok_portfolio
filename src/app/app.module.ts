import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";


import { PagesModule } from "./pages/pages.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatExpansionModule } from "@angular/material/expansion";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { AccordionModule } from "ngx-bootstrap/accordion";
import { AlertModule } from "ngx-bootstrap/alert";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import 'hammerjs';

import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { RecentPostsComponent } from "./components/recent-posts/recent-posts.component";
@NgModule({
  declarations: [
    AppComponent, NavbarComponent, AboutMeComponent, FooterComponent, ContactMeComponent, BlogComponent, RecentPostsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    MatExpansionModule,
    MatCardModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [RecentPostsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
