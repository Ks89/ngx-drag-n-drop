import { TypeCheckEnum } from './type-check/type-check-enum';

export interface DragPayload {
  name: string;
  content: string;
}

export interface DragTypePayload extends DragPayload {
  type: TypeCheckEnum;
}
