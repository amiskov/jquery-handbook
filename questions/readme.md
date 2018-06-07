# Вопросы по jQuery
Тест включает вопросы по использованию jQuery и затрагивает некоторые необходимые темы по работе с JavaScript в браузере (события, таймеры, перебирающие методы массивов и объектов).

## Ядро jQuery
### Материалы:

- [How jQuery Works](https://learn.jquery.com/about-jquery/how-jquery-works/)
- [$ vs $()](https://learn.jquery.com/using-jquery-core/dollar-object-vs-function/)
- [The jQuery Object](https://learn.jquery.com/using-jquery-core/jquery-object/)

### Вопросы
1. Что такое `$()`?

## Поиск элементов, коллекции
### Материалы
- [Выборка элементов](https://oggetto-academy.github.io/jquery-handbook/ch02/)
- [Операции над коллекциями](https://oggetto-academy.github.io/jquery-handbook/ch03/)
- [Iterating over jQuery and non-jQuery Objects](https://learn.jquery.com/using-jquery-core/iterating/)
- [Массив: перебирающие методы](https://learn.javascript.ru/array-iteration)
- [Навигация по DOM-элементам](http://learn.javascript.ru/traversing-dom)
- [Объекты: перебор свойств](https://learn.javascript.ru/object-for-in)

### Вопросы
1. Перечислите все известные вам способы получения DOM-элемента.

1. Как объединить выборки (jQuery-коллекции) элементов? К примеру, есть какой-то `$activeElement`, к нему нужно добавить еще элементы с классом `.element`, чтобы произвести какие-то действия над объединенной выборкой.

1. Есть такая разметка:

    ```html
    <ul class="list" id="time">
        <li data-time="13:55" class="list__item">Time item 1</li>
        <li data-time="14:35" class="list__item">Time item 2</li>
        <li data-time="16:03" class="list__item">Time item 3</li>
        <!-- ... -->
    </ul>
    ```

    Как выбрать все `li` с атрибутом `data-time`? Предложите все известные вам способы.

1. Как получить DOM-элемент с фокусом.

1. Как проверить, имеет ли элемент фокус?

1. Как получить скрытый DOM-элемент?

1. Как выбрать предыдущий/следующий DOM-элемент от найденного?

1. Как получить все последующие DOM-элементы от найденного?

1. Как пройтись по элементам массива? Как пройтись по jQuery-коллекции? Как пройтись по DOM-элементам? Какие есть нюансы? Какие способы оптимальны для каждого случая?

1. Как пройтись по ключам и свойствам объекта?

1. Как проверить, является ли `.btn-close` дочерним элементом блока `.popup` в примере ниже?
    
    ```html
    <div class="popup">
        <div class="popup__i">
            <!-- ... -->
            <button class="btn-close">&times;</button> 
        </div>
    </div>
    ```

1. Какая разница между `$('nav')` и `$('<nav/>')`?

1. Какая разница между методами `.get()` и `.eq()`?

## Атрибуты, свойства, данные
### Материалы
- [Свойства, атрибуты и данные элементов](https://oggetto-academy.github.io/jquery-handbook/ch04/)

### Вопросы
1. Перечислите отличия между методами `.attr()`, `.prop()` и `.data()`.

1. Как можно получить и установить значения этих атрибутов?

1. Чем отличаются следующие инструкции?
    ```js
    $('.some-class').attr('data-value', 1);
    $('.some-class').data('value', 1);
    ```

## События
### Материалы
- [Объект события](https://learn.javascript.ru/obtaining-event-object)
- [Делегирование событий](https://learn.javascript.ru/event-delegation)
- [Understanding Event Delegation](https://learn.jquery.com/events/event-delegation/)
- [Действия браузера по умолчанию](https://learn.javascript.ru/default-browser-action)
- [The event object](https://learn.jquery.com/events/introduction-to-events/#the-event-object)
- [Introducing Custom Events](https://learn.jquery.com/events/introduction-to-custom-events/)
- [Triggering Event Handlers](https://learn.jquery.com/events/triggering-event-handlers/)
- [Фокусировка: focus/blur](https://learn.javascript.ru/focus-blur)

### Вопросы
1. Как передать данные из одного компонента в другой при помощи событий?

1. Что такое делегирование событий и как работает?

1. Как отменить действие по умолчанию у события?

1. Какая разница между `event.target` и `event.currentTarget` в обработчике события?

1. Как убрать фокус с элемента?


## Манипуляция элементами страницы
### Материалы
- [Оживление страниц](https://oggetto-academy.github.io/jquery-handbook/ch05/)

### Вопросы
1. Как добавить/удалить класс у коллекции?

1. Как определить высоту элемента вместе с паддингом и бордером?

1. Как добавить задержку перед выполнением какой-либо функции? Например, сделать так, чтобы обработчик ресайза окна запускался не каждый раз, а с задержкой?

1. Как сделать повторяющиеся вызовы функции с заданным периодом?

1. Как скопировать DOM-элемент с ивентами и данными?

## Ajax
### Материалы
- [Асинхронное общение с сервером](https://oggetto-academy.github.io/jquery-handbook/ch10/#_10-1-brushing-up-on-ajax)

### Вопросы
1. Как собрать все значения элементов формы для отправки на сервер?

1. Как можно послать асинхронный POST|GET-запрос на сервер? Перечислите все известные вам способы, объясните, когда какой лучше использовать.
