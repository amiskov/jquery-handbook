# 13 Avoiding the callback hell with Deferred
* What promises are and why they're important
* The Deferred object
* How to manage multiple asynchronous operations
* Resolving and rejecting a promise

В JS кругом колбэки. Иногда бывает слишком много вложенных колбэков и в них легко запутаться (callback hell). Чтобы проще работать с такими кейсами придумали Промисы.

В jQuery для реализации Промисов используется два объекта: `Deferred` и `Promise`.

## 13.1 Introduction to promises
