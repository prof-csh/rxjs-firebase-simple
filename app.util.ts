import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/observable/fromEvent'

export function render(id: string, val: any) {
  document.getElementById(id).innerHTML = `<pre data-lang='json' class='prettyprint'>${JSON.stringify(val, null, 2)}</pre>`
}

const subscriptions: Subscription[] = [];
export function buttonSubscribe(buttonId: string, valueId: string, rx$: Observable<any>) {
  Observable.fromEvent(document.getElementById(buttonId), 'click')
    .subscribe(() => {
      // Unsubscribe from previous subscriptions
      while (subscriptions.length > 0) {
        subscriptions.pop().unsubscribe();
      }

      // Clear content
      document.getElementById(valueId).innerHTML = '<div class="spinner"></div>';

      // Subscribe to observable and store subscription
      subscriptions.push(rx$.subscribe(val => {
        setTimeout(() => {
          render(valueId, val)
        }, 1000)
      }));
    })
}