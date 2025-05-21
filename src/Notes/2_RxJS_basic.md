1. Reactive Programmimg is a new way of building apps

- our app will react to changes and handle data streams rather than we writing each handling separtely.

2. What is RxJS?
   RxJS = Reactive Extensions for JavaScript

It's a library for:

- Handling asynchronous data streams

- Supporting event-based and callback programming

- Widely used in Angular (already integrated)

3. RxJS Core Concepts

🔹 Observables

- Core building block of RxJS.

- Like a Promise, but can emit multiple values over time.

- Think of it as a stream of data (values/events/errors).

🔹 Satelite Data Types

- Observer An object with next(), error(), complete() methods that consume Observable values.

- Subject Acts as both an Observable and Observer. Useful for multicasting (e.g., broadcasting events).

- Scheduler Controls the timing of when Observable notifications are sent.

🔹 Operators

- Functions used to transform, filter, combine, or handle errors in streams.

- Two types:

  - Creation operators: of(), from(), interval()

  - Pipeable operators: map(), filter(), mergeMap(), switchMap(), debounceTime(), catchError()
