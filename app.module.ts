import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent} from './app.component';
import { CompletedComponent } from './completed/completed.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CompletedComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
