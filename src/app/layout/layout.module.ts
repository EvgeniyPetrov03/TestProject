import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutComponent } from './layout/layout.component';
import { LastFmModule } from '../last-fm/last-fm.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, MainContentComponent, LayoutComponent],
  exports: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LastFmModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule {
}
