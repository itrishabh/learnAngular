import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-animation',
  standalone: true,
  imports: [],
  templateUrl: './clock-animation.component.html',
  styleUrl: './clock-animation.component.scss',
})
export class ClockAnimationComponent implements OnInit {
  hours!: number;
  minutes!: number;
  seconds!: number;

  interval: any;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => this.clock(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  clock() {
    const currentDate = new Date();
    this.hours = currentDate.getHours();
    this.minutes = currentDate.getMinutes();
    this.seconds = currentDate.getSeconds();
  }
}
