import { isCallable } from '../internals'


class NPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    // 1. If NewTarget is undefined, throw a TypeError exception.
    if (new.target === undefined) throw new TypeError(`NPromise constructor cannot be invoked without 'new'`);
    // 2. If IsCallable(executor) is false, throw a TypeError exception.
    if (isCallable(executor)) throw new TypeError(`NPromise resolver ${executor} is not a function`);

    // 3.
    this.state = NPromise.PENDING;
    this.fulfillReactions = [];
    this.rejectReactions = [];
    this.isHandled = false;
  }
}