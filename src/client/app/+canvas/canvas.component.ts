import {Component, ViewChild, AfterViewInit} from '@angular/core';

const POINTS = [
  [0, 0],
  [100, 100],
  [200, 50],
  [300, 0],
  [400, 50],
  [500, 100],
  [600, 400],
  [700, 300],
  [800, 200],
  [900, 100],
  [1000, 0]
];

@Component({
  moduleId: module.id,
  selector: 'sd-canvas',
  templateUrl: 'canvas.component.html'
})
export class CanvasComponent implements AfterViewInit {
  context:CanvasRenderingContext2D;

  @ViewChild("myCanvas") myCanvas:any;

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2d");

    this.tick();
  }

  private tick() {
    requestAnimationFrame(()=> {
      this.tick()
    });

    var ctx = this.context;
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    var current = POINTS[0];
    for (var index = 1; index < POINTS.length; index ++) {
      ctx.moveTo(current[0], current[1]);
      ctx.lineTo(POINTS[index][0], POINTS[index][1]);
      current = POINTS[index];
    }
    ctx.stroke();
    ctx.closePath();
  }
}
