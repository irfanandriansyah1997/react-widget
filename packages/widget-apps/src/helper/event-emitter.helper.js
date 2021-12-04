import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const Emitter = {
  emit: (event, fn) => eventEmitter.emit(event, fn),
  off: (event, fn) => eventEmitter.off(event, fn),
  on: (event, fn) => eventEmitter.on(event, fn),
  once: (event, fn) => eventEmitter.once(event, fn)
};

Object.freeze(Emitter);

export default Emitter;
