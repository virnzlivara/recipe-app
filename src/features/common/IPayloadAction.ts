import { Action } from "redux";

export interface IPayloadAction<T> extends Action<string> {
    meta?: any;
    payload: T;
    type: string;
}