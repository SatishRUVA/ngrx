import { Action } from "@ngrx/store";

export class NotificationData {
    id = '';
    data: {};
  }
  

export enum NotificationActionTypes {
    LoadNotification = '[Home Page] Load Notification'
  
}

export class LoadNotification  implements Action {
    readonly type = NotificationActionTypes.LoadNotification;
    constructor(readonly payload: {notificationData: NotificationData}) {
  
    }
  }
  
export type WeatherActions = LoadNotification;