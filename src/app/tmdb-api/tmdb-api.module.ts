import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TmdbApiService } from './tmdb-api.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TmdbApiService
  ]
})
export class TmdbApiModule { }
