import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './editor.action';

export const initialState: string[] = [];

const _editorReducer = createReducer(
  initialState,
  on(increment, (state, obj) => [...state, obj.txt]),
  on(decrement, (state, obj) => {
    const cp = [...state]
    cp.splice(obj.index, 1);
      return cp;
    }),
  on(reset, (state) => [])
);

export function editorReducer(state: any, action: Action) {
  return _editorReducer(state, action);
}
