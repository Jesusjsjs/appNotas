import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { MenuToolsComponent } from './menu-tools/menu-tools.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewCompComponent } from './new-comp/new-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    MenuToolsComponent,
    MenuHeaderComponent,
    ListComponent,
    NewCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
