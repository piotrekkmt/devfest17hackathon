import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Emotiv {
  emotion: string;
  push: Boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  @ViewChild('rain') d1: ElementRef;

  nbDrop = 200;
  rain_opacity = 1.0;
  scary_pumpkin: Observable<Emotiv>;
  items: Observable<any[]>;
  emotivStuff;

  constructor(private afs: AngularFirestore) {
    this.items = afs.collection('emotiv').valueChanges();
    afs.collection('emotiv').valueChanges().subscribe(emotivItem => {
      this.emotivStuff = emotivItem[0];
      console.log('emotivItem EMOTION', this.emotivStuff.emotion);
      console.log('emotivItem PUSH', this.emotivStuff.push);

      if (this.emotivStuff.push) {
        this.rain_opacity = 1;
      } else {
        this.rain_opacity = 0;
      }
    });
  }

  ngAfterViewInit() {
    this.createRain();
  }

  // function to generate a random number range.
  randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  // function to generate drops
  createRain() {
    for (let i = 1; i < this.nbDrop; i++) {
      const dropLeft = this.randRange(0, 1600);
      const dropTop = this.randRange(-1000, 1400);

      const rainHtml = '<div class="drop" id="drop' + i + '" style="top: '
        + dropTop + 'px; left: ' + dropLeft + 'px; "></div>';

        this.d1.nativeElement.insertAdjacentHTML('beforeend', rainHtml);

    }
  }

}
