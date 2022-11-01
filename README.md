[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()

> Angular Library with set of components/directives/pipes for easier work with data, using https://github.com/Lonli-Lokli/ts-result

[Demo](https://lonli-lokli.github.io/ng-result/)

## About
[Result](https://github.com/Lonli-Lokli/ts-result) is an union of few types: ResultInitial, ResultPending, ResultFailure and ResultSuccess.

While your data in initial or pending state just use `initial()` or `pending()`, because you don't have any real values in this case.
When you receive data from server, use `failure` or `success` function, it depends on what you received.


## Installation

`ng add @lonli-lokli/ng-result`

## Usage

```html
<ll-result [data]="data$ | async">
  <ng-container *ifSuccess="data$ | async; let ok">
    Here is the response: {{ok}}
  </ng-container>
</ll-result>
```
