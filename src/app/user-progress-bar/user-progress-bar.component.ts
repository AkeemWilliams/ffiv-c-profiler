import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
@Component({
  selector: 'app-user-progress-bar',
  templateUrl: './user-progress-bar.component.html',
  styleUrls: ['./user-progress-bar.component.scss']
})
export class UserProgressBarComponent implements OnInit {
  
  // progress
  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressBarMode = 'determinate';
  @Input() value: any;
  @Input() bufferValue:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
