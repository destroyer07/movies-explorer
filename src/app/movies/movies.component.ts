import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../tmdb-api/tmdb-api.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ObservableMedia } from '@angular/flex-layout';
import { TopRatedMovie } from '../tmdb-api/dtos/top-rated-movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  /**
   * The number of colums in the md-grid-list directive.
   */
  public cols: Observable<number>;

  protected response: TopRatedMovie[];

  constructor(
    private tmdb: TmdbApiService,
    private observableMedia: ObservableMedia
  ) { }

  ngOnInit() {
    this.tmdb
      .getTopRatedMovies()
      .subscribe(res => {
        this.response = res.results;
      });

    const grid = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 3],
      ['lg', 4],
      ['xl', 5]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .pipe(
        map(change => grid.get(change.mqAlias)),
        startWith(start)
      );
  }
}
