import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from './config';
import { Observable } from 'rxjs';
import { TopRatedMovie } from './dtos/top-rated-movie';
import { Response } from './dtos/response';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  private readonly tmdbKey = Config.Key;

  constructor(private http: HttpClient) { }

  public getTopRatedMovies(): Observable<Response<TopRatedMovie>> {
    return this.http
      .get<Response<TopRatedMovie>>('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.tmdbKey);
  }

}
