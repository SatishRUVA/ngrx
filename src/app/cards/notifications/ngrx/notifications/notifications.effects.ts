import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of, pipe } from 'rxjs';
import { LoadNotification, NotificationActionTypes } from './notifications.actions';
import { AppState } from 'src/app/cards/ngrx/reducers';


@Injectable()
export class NotificationEffects {

  @Effect()
  loadNotification$ = this.actions$
    .pipe(
      ofType<LoadNotification>(NotificationActionTypes.LoadNotification),
      mergeMap((action) =>of({"id":"1", "data":"test notification"})
      .pipe(
        map(notification => {
          return (new LoadNotification({notificationData: notification}));
        }),
        catchError((errorMessage) => of())
      ))
  );

  constructor(private actions$: Actions, private store: Store<AppState>) { }

}
