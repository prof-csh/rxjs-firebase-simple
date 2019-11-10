import './app.init.ts'
import { buttonSubscribe } from './app.util'
import * as uuid from 'uuid'
import * as rxfirebase from 'rxjs-firebase-simple';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/startWith'

// UUID FOR STORING TIME FOR THIS SESSION
const id = uuid.v1();

// RXJS FIREBASE SIMPLE ObSERVABLES
const get$ = rxfirebase.get$('/users/1')
const getChildrenByPath$ = rxfirebase.getChildrenByPath$('/users', 'role', 'admin')
const getByQuery$ = rxfirebase.getByQuery$('/users', (ref => ref.orderByChild('role').equalTo('user')))
const listen$ = rxfirebase.listen$(`/time/${id}`)
const set$ = Observable.interval(1000).switchMap(() => rxfirebase.set$(`/time/${id}`, new Date().toLocaleString()))

// CLICK EVENTS
buttonSubscribe('get-tab', 'get', get$);
buttonSubscribe('getChildrenByPath-tab', 'getChildrenByPath', getChildrenByPath$);
buttonSubscribe('getByQuery-tab', 'getByQuery', getByQuery$);
buttonSubscribe('listen-tab', 'listen', set$.switchMap(() => listen$).startWith(''));
