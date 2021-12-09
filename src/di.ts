import {
  ClassProvider, ClassSansProvider,
  Component, ConstructorProvider, ExistingProvider, FactoryProvider, FactorySansProvider,
  Inject, InjectionToken, Type, TypeProvider, ValueProvider, ValueSansProvider
} from '@angular/core';
import {environment} from "./environments/environment";

class Car {
  constructor(public color: string, public engine: string) {}
}

const car1 = new Car('yellow', 'v6');
const car2 = new Car('black', 'v9');

class LongCar extends Car {
  doors: number;

  constructor(color: string, engine: string, doors: number) {
    super(color, engine);
    this.doors = doors;
  }
}

class _LongCar {
  constructor(
    public car: Car,
    public doors: number
  ) {}
}

const longCar = new _LongCar(new Car('black', 'v4'), 4);



///
export declare type Provider =
  | TypeProvider
  | ValueProvider // *
  | ClassProvider // *
  | ConstructorProvider
  | ExistingProvider
  | FactoryProvider ; // *

interface FactoryProvider {
  provide: any;
  useFactory: Function;
  deps?: any[]; // dependency
}

interface ClassProvider {
  provide: any;
  useClass: Type<any>;
}

interface ValueProvider {
  provide: any;
  useValue: any;
}


// const baseUrl = 'ws://api.efn.sceon.am/graphql';
const BASE_URL = new InjectionToken<string>('_BASE_URL_');


// InjectionToken
const providers = [
  // 1.
  {
    provide: Car,
    useFactory: () => {
      return new Car('yellow', 'v8');
    }
  } as FactoryProvider,

  // 2.
  {
    provide: _LongCar,
    useFactory: (car: Car) => {
      return new _LongCar(car, 4);
    },
    deps: [Car]
  } as FactoryProvider,

  // 3.
  {
    provide: BASE_URL,
    useValue: environment.production
      ? 'wss://api.efn.sceon.am/graphql'
      : 'ws://api.efn.sceon.am/graphql'
  } as ValueProvider
]

/// Use case
@Component({
  selector: 'app-car-list',
  template: '',
  providers: providers
})
export class CarListComponent {
  constructor(
    @Inject(_LongCar) public longCar: _LongCar,
    @Inject(BASE_URL) public baseUrl: string,
  ) {
    // this.longCar = new _LongCar();
  }
}
