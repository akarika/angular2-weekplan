import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CrudLocalstorageService} from './services/crud-localstorage.service';
import { AppComponent } from './app.component';
import {GridModule} from './grid/grid.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
  ],
  providers: [CrudLocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
