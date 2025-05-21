# Observables in Angular

## What is an Observable?

- An Observable is a wrapper around asynhronous data. We use an observable to handle async data. we can also use Promises to handle asynchronous data.
- Emits data over a period of time

  - It needs to be subscribed else it won't do anything on its pwn.

  - An observer has 3 methods
    - next
    - complete
    - error

## Difference Between Async Operation and Async Data

- **Async operation** refers to the execution of a task that doesn't block the main thread.
- **Async data** refers to the information available after the async operation finishes.

## Promise vs Observable

| Feature             | Promise         | Observable                            |
| ------------------- | --------------- | ------------------------------------- |
| Single vs. Multiple | Single value    | Multiple values over time             |
| Execution           | Eager           | Lazy (on subscription)                |
| Cancellation        | Not cancellable | Can be cancelled with `unsubscribe()` |
| Multiple Observers  | No              | Yes                                   |
