import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Search {
  searchTerm?: string = '';
  @Output() valueChanged = new EventEmitter<string>();

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(inputValue);
  }
}
