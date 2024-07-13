import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
})
export class ButtonPrimaryComponent {
  @Input({ required: true }) public text: string = '';

  @Output() public toggleContent = new EventEmitter<void>();

  public onClick(): void {
    this.toggleContent.emit();
  }
}
