import { Component } from '@angular/core';
import { from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { fromAjax } from 'rxjs/internal/ajax/ajax';
import { of } from 'rxjs/internal/observable/of';
import {
  concatMap,
  count,
  map,
  max,
  mergeMap,
  min,
  reduce,
  switchAll,
  switchMap,
  delay,
} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'RxJs Examples';
  list = '1,2,3,b,c';
  str_array = ['a', 'b', 'c', 'd'];
  num_array = [3, 5, 7, 2, 7];
  obj_array = [
    { name: 'nemchand', age: 22 },
    { name: 'anil', age: 42 },
    { name: 'sunil', age: 12 },
    { name: 'setty', age: 20 },
  ];

  constructor() {}

  ngOnInit() {
    let Obs = of(1, 2, 3, 4, 5, 6);
    Obs.pipe(count()).subscribe((res) => {
      console.log(res);
    });

    let obs1 = from(this.num_array);
    // obs1.subscribe(x => console.log(x))
    // obs1.pipe(max()).subscribe(x=>console.log(x))
    // obs1.pipe(min()).subscribe(x=>console.log(x))
    // obs1.pipe(reduce((a,c)=>a+c,0)).subscribe(x=>console.log(x))

    const urls = [
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/users',
    ];

    //  from(urls).pipe(
    //     mergeMap((url) => {
    //         return fromAjax({url:url,method:'get'});
    //     })
    //  ).subscribe((response) => console.log(response.response));

    //  from(urls).pipe(
    //   switchMap((url) => {
    //       return fromAjax({url:url,method:'get'});
    //   })
    //  ).subscribe((response) => console.log(response));

    // from(urls)
    //   .pipe(
    //     concatMap((url) => {
    //       return fromAjax({ url: url, method: 'get' });
    //     })
    //   )
    //   .subscribe((response) => console.log(response));

    // let data = ['Tech', 'Comedy', 'Action'];
    // let source = from(data);
    // Map
    // source.pipe(
    //   map(data => this.getData(data))
    // ).subscribe(res=> console.log(res))

    // switchall

    // source.pipe(
    //   map(data=>this.getData(data)),
    //   switchAll()
    // ).subscribe(res=>{console.log(res)})

    // switchmap

    // source.pipe(
    //   switchMap(data=>this.getData(data))
    // ).subscribe(res=>console.log(res))

    // mergeMap

    // source.pipe(
    //   mergeMap(data=>this.getData(data))
    // ).subscribe(res=>console.log(res))

    // concatMap

    // source.pipe(
    //   concatMap(data=>this.getData(data))
    // ).subscribe(res=>console.log(res))

    // switchMap

    // source.pipe(
    //   switchMap(data=>this.getData(data))
    // ).subscribe(res=>console.log(res))
  }

  getData(data) {
    return of(data + ' data Uploading').pipe(delay(1000));
  }
}
