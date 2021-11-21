import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './editor.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  txt$: Observable<string[]>;
  constructor(private store: Store<{ edit: string[] }>) {
    this.txt$ = store.select('edit');
  }
  
  onType(event: PointerEvent | KeyboardEvent) {
    // console.log(event);
  }

  onSelection(event: any) {
    const selected = document.getSelection()?.toString() || '';
    // console.log(selected);
    if(selected) {
      this.store.dispatch(increment({txt:selected.trim()}));
    }
  }

  remove(indx:any) {
    // console.log(indx)
    this.store.dispatch(decrement({index:indx}));
  }
}
