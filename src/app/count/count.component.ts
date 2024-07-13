import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent {
  @Input() n = 0;
  @Output() nChange: EventEmitter<number> = new EventEmitter();

  up() {
    this.n++;
    this.nChange.emit(this.n);
  }
}
