import { Component } from '@angular/core';
// import {filmService} from '../Services/films.service';
// import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//  lat:any;
  //  long:any;
  // MovieData:any =[];
  
  // constructor(private geolocation: Geolocation) {}
  // GPS(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //      this.lat = resp.coords.latitude;
  //      this.long =resp.coords.longitude;
  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });
  // }
// ngOnInit(){
//   this.movieService.GetMovieData().subscribe(
//     (data)=>{
//       this.MovieData = data.Search;
//       console.log(this.MovieData);

//     }
//   );
// }
  constructor() {}

}
