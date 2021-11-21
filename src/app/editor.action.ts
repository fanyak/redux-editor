import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Editor Component] Increment', props<{txt: string}>());
export const decrement = createAction('[Editor Component] Decrement', props<{index: number}>());
export const reset = createAction('[Editor Component] Reset');
