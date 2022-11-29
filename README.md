> Ng-Result is an Angular Library with set of components/directives/pipes for easier work with data, using [Ts-Result](https://github.com/Lonli-Lokli/ts-result)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/lonli-lokli/ng-result)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/lonli-lokli/ng-result)
[![GitHub license](https://img.shields.io/github/license/lonli-lokli/ng-result)](https://github.com/lonli-lokli/ng-result)
[![NPM](https://nodei.co/npm/@lonli-lokli/ng-result.png?mini=true)](https://npmjs.org/package/@lonli-lokli/ng-result)


[Demo](https://lonli-lokli.github.io/ng-result/)

## About
[Result](https://github.com/Lonli-Lokli/ts-result) is an union of following types: Initial, Pending, Failure<F> and Success<S>.

The problem it solving present is a very common one. You are loading a list of things but instead of showing a loading indicator you just see zero items. Same happens with actual data loading - sometimes you just do not think it will fail.

In my mental model, REST requests have one of four states:

* We haven't asked yet.
* We've asked, but we haven't got a response yet.
* We got a response, but it was an error.
* We got a response, and it was the data we wanted.

That is the purpose of this library - allow clean usage over this states with Angular.

## Installation

`ng add @lonli-lokli/ng-result`

## Usage of components

```html
<ll-result [data]="data$ | async">
  <ng-container *ifSuccess="data$ | async; let ok">
    Here is the type-safe response: {{ok}}
  </ng-container>
</ll-result>
```

# Components
TODO

## Publish
Run `npm run publish`