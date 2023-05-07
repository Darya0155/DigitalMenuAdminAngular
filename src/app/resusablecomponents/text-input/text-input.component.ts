import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input('type') inputType = '';
  @Input('label') label = '';
  @Input('fcn') fc: FormControl = new FormControl();
  @Input() hint: string = '';

  OnInit() {
    console.log(this.fc);
  }

  constructor() {}

  ngOnInit(): void {}
}
