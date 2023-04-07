import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Archibad';
    this.description = 'Mon meilleur ami depuis tout petit';
    this.createdDate = new Date();
    this.snaps = 6;
    //this.imageUrl = 'https://picsum.photos/200/300';
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
  }

  onAddSnap() {
    this.snaps++;
  }
}

// Path: snapface/src/app/face-snap/face-snap.component.html
