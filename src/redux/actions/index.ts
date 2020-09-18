import firebase from 'firebase';
import { helperActions } from './helper';
import { notificationsActions } from './notifications';
import { partnersActions } from './partners';
import { previousSpeakersActions } from './previous-speakers';
import { routingActions } from './routing';
import { scheduleActions } from './schedule';
import { sessionsActions } from './sessions';
import { speakersActions } from './speakers';
import { subscribeActions } from './subscribe';
import { teamActions } from './team';
import { ticketsActions } from './tickets';
import { toastActions } from './toast';
import { userActions } from './user';

export {
  helperActions,
  notificationsActions,
  partnersActions,
  previousSpeakersActions,
  routingActions,
  scheduleActions,
  sessionsActions,
  speakersActions,
  subscribeActions,
  teamActions,
  ticketsActions,
  toastActions,
  userActions,
};

// TODO: Remove type
declare global {
  interface Window {
    firebase: typeof firebase;
  }
}
