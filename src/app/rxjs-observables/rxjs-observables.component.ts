import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonSharedModule } from '../common.module';

@Component({
  selector: 'app-rxjs-observables',
  standalone: true,
  imports: [CommonSharedModule],
  templateUrl: './rxjs-observables.component.html',
  styleUrl: './rxjs-observables.component.css',
})
export class RxjsObservablesComponent {
  data: any[] = [];
  // create observables

  myObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 2000);
    setTimeout(() => {
      observer.next(2);
    }, 3000);
    // setTimeout(() => {
    //   observer.error(new Error('Something Went wrong'));
    // }, 4000);
    setTimeout(() => {
      observer.next(3);
    }, 4000);
    setTimeout(() => {
      observer.complete();
    }, 5000);
  });

  getAsycData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All Data is Streamed');
      },
    });
  }
}
