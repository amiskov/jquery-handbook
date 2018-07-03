(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Селекторы")]),e("p",[t._v("jQuery-селекторы полностью совместимы с CSS3. "),e("a",{attrs:{href:"https://learn.javascript.ru/css-selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Изучите"),e("OutboundLink")],1),t._v(" CSS-селекторы как следует.")])]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),e("p",[t._v("Вернет первый попавшийся элемент с айди. Или нулевую коллекцию, если таких айдишников нет.")]),e("p",[t._v("Нельзя использовать с именами тегов, классами. Потеряем в производительности:")]),t._m(7),t._m(8),e("p",[t._v("Не привязываемся к элементам (используем БЭМ). Ищем по классам:")]),t._m(9),t._m(10),t._m(11),t._m(12),e("p",[t._v("Этот селектор самый медленный, нужно использовать с осторожностью.")]),e("p",[t._v("Так делать можно (если очень надо), проход по DOM производится 1 раз:")]),t._m(13),t._m(14),e("p",[e("a",{attrs:{href:"https://learn.javascript.ru/css-selectors#%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D1%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Селекторы по взаимному расположению элементов"),e("OutboundLink")],1)]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),e("ul",[e("li",[e("a",{attrs:{href:"https://learn.javascript.ru/css-selectors#%D1%81%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B-%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%BE%D0%B2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Селекторы атрибутов"),e("OutboundLink")],1)])]),t._m(23),t._m(24),e("p",[t._v("Фильтры из jQuery (нет в CSS):")]),t._m(25),t._m(26),t._m(27),t._m(28),e("p",[e("code",[t._v("eq")]),t._v(" работает только с выборкой по селектору, "),e("code",[t._v("nth-child")]),t._v(" работает "),e("em",[t._v("со всеми элементами внутри родителя, независимо от их типа, даже если в селекторе они не указаны")]),t._v(". См. "),e("router-link",{attrs:{to:"./examples/selectors_example.html"}},[e("code",[t._v("./examples/selectors_example.html")])]),t._v(", пример "),e("code",[t._v("nth-child vs eq")]),t._v(".")],1),t._m(29),t._m(30),t._m(31),e("p",[t._v("Есть jQuery, нет в CSS:")]),t._m(32),t._m(33),e("p",[t._v("Нет в CSS:")]),t._m(34),e("p",[t._v("Есть в CSS:")]),t._m(35),t._m(36),e("p",[t._v("jQuery-фильтры (нет в CSS):")]),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),e("p",[t._v("Можно создавать кастомные фильтры для выборок, которые часто повторяются.")]),e("p",[t._v("Пример: http://jsbin.com/mucigo/edit?html,js,console,output")]),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),e("p",[t._v("См. "),e("router-link",{attrs:{to:"examples/2.6_performance.html"}},[t._v("пример")]),t._v(".")],1),t._m(48),e("ul",[e("li",[e("a",{attrs:{href:"https://api.jquery.com/category/selectors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Все селекторы jQuery"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_2-selecting-elements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-selecting-elements","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Selecting elements")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Selecting elements with jQuery by using CSS selectors")]),s("li",[this._v("Discovering the unique jQuery-only filters")]),s("li",[this._v("Developing custom filters")]),s("li",[this._v("Learning the context parameter of the jQuery() function")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Переменные с объектами jQuery нужно именовать с префиксом "),s("code",[this._v("$")]),this._v(", чтобы отличать jQuery-объекты от обычных DOM-объектов (которые могут быть выбраны, например, через "),s("code",[this._v("document.querySelectorAll()")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $allElements "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'*'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// доллар-префикс")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-2-2-id-selector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-id-selector","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2.2 Id selector")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Айдишники могут содержать что угодно, кроме пробелов (стандарт w3c). Эти символы можно эскейпить: "),s("code",[this._v("$('#hello\\\\.world')")]),this._v(" — точка внутри айдишника.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Под капотом используется "),s("code",[this._v("getElementById")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// Плохо:")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $slider "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'div#slider'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Хорошо:")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $slider "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'#slider'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-2-3-class-selector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-class-selector","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2.3 class selector")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// Плохо:")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $slider "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'div.js-slider'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Хорошо:")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $slider "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'.js-slider'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-2-4-tag-selector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-tag-selector","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2.4 Tag selector")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("getElementsByTagName")]),this._v(" под капотом.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Не использовать с "),s("code",[this._v("id")]),this._v(". Это бессмысленно и вредит производительности.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $els "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'div, span'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-3-retrieving-elements-by-their-hierarchy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-retrieving-elements-by-their-hierarchy","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.3 Retrieving elements by their hierarchy")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("#slider > li")]),t._v(" — непосредственные дочерние элементы")]),e("li",[e("code",[t._v(".current ~ li")]),t._v(" — все последующие "),e("code",[t._v("li")]),t._v(" того же уровня, что и "),e("code",[t._v(".current")])]),e("li",[e("code",[t._v(".current + li")]),t._v(" — первый следующий элемент того же уровня, что и "),e("code",[t._v(".current")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-4-selecting-elements-using-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-selecting-elements-using-attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.4 Selecting elements using attributes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("querySelectorAll")]),this._v(" под капотом.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Нужно быть внимательными с кавычками: "),s("code",[this._v("$('a[href^=\"http://\"');")]),this._v(". Использовать сочетание одинарные/двойные и по возможности избегать экранирования.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Элемент в селекторе использовать необязательно: "),s("code",[this._v("$('[class^=\"js-\"]')")]),this._v(" — выбрать все элементы, класс которых начинается с "),s("code",[this._v("js-")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("В CSS нет фильтра "),s("code",[this._v("!=")]),this._v(" для атрибутов. Но он есть в jQuery (своя реализация, выполняется дольше):")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("$")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token string"}},[this._v("\"a[href!='http://jquery.com']\"")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token comment"}},[this._v("// все ссылки, кроме http://jquery.com")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Можно использовать несколько атрибутов: "),s("code",[this._v('input[type="text"][required]')]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-5-introducing-filters-псевдокnассы-css-бонусы-jquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-introducing-filters-псевдокnассы-css-бонусы-jquery","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5 Introducing filters (псевдоклассы CSS + бонусы jQuery)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-5-1-position-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-position-filters","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5.1 Position filters")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v(":first")])]),e("li",[e("code",[t._v(":last")])]),e("li",[e("code",[t._v(":even")])]),e("li",[e("code",[t._v(":odd")])]),e("li",[e("code",[t._v(":eq(n)")]),t._v(" — выбрать элемент с индексом "),e("code",[t._v("n")]),t._v(" (может быть отрицательным)")]),e("li",[e("code",[t._v(":gt(n)")]),t._v(" — выбрать элементы после текущего не включая его (может быть отрицательным)")]),e("li",[e("code",[t._v(":lt(n)")]),t._v(" — выбрать элементы перед текущим не включая его (может быть отрицательным)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Отрицательный аргумент "),s("code",[this._v("n")]),this._v(" будет брать элементы с конца коллекции: последний — "),s("code",[this._v("-1")]),this._v(", предпоследний "),s("code",[this._v("-2")]),this._v(" и т. д.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("В фильтрах, которые дает jQuery, индексы начинаются с "),s("code",[this._v("0")]),this._v(". В фильтрах из спецификации CSS индексы идут с "),s("code",[this._v("1")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-5-2-child-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-child-filters","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5.2 Child filters")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-5-3-form-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-3-form-filters","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5.3 Form filters")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Выбрать чекнутые чекбоксы: "),s("code",[this._v("$('input[type=\"checkbox\"]:checked')")]),this._v(". Нужно использовать именно CSS-псевдокласс "),s("code",[this._v(":checked")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Так выберутся только те, которые изначально чекнутые в HTML (прописан атрибут "),s("code",[this._v("checked")]),this._v("): "),s("code",[this._v("$('input[type=\"checkbox\"][checked]')")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v(":checkbox")]),t._v(": "),e("code",[t._v("$('input:checkbox:checked')")]),t._v(".")]),e("li",[e("code",[t._v(":button")]),t._v(" — выберет кнопки ("),e("code",[t._v("button")]),t._v(" и "),e("code",[t._v('input[type="reset|submit|button]')]),t._v(").")]),e("li",[e("code",[t._v(":file")]),t._v(" — "),e("code",[t._v('input[type="file"]')])]),e("li",[e("code",[t._v(":image")]),t._v(" — "),e("code",[t._v('input[type="image"]')])]),e("li",[e("code",[t._v(":input")]),t._v(" — form elements: "),e("code",[t._v("input|select|textarea|button")])]),e("li",[e("code",[t._v(":password")]),t._v(" — "),e("code",[t._v('input[type="password"]')])]),e("li",[e("code",[t._v(":radio")]),t._v(" — "),e("code",[t._v('input[type="radio"]')])]),e("li",[e("code",[t._v(":reset")]),t._v(" — "),e("code",[t._v('input[type="reset"]')]),t._v(", "),e("code",[t._v('button[type="reset"]')])]),e("li",[e("code",[t._v(":selected")]),t._v(" — выбранные элементы "),e("code",[t._v("option")]),t._v(" в селекте")]),e("li",[e("code",[t._v(":submit")]),t._v(" — "),e("code",[t._v('input[type="submit"]')]),t._v(", "),e("code",[t._v('button[type="submit"]')])]),e("li",[e("code",[t._v(":text")]),t._v(" — "),e("code",[t._v('input[type="text"]')]),t._v(", "),e("code",[t._v("input")]),t._v(" без указанного типа ("),e("code",[t._v("text")]),t._v(" будет по умолчанию)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-5-4-content-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-4-content-filters","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5.4 Content filters")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("$('li:has(a):contains(Link 3)')")]),t._v(" — выбрать все ссылки с текстом "),e("code",[t._v("Link 3")]),t._v(" внутри "),e("code",[t._v("li")]),t._v(".")]),e("li",[e("code",[t._v(":parent")]),t._v(" — выберет элементы, которые являются родителями (содержать хоть один дочерний).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v(":empty")]),this._v(" — выбрать пустой элемент (нет детей).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-5-5-other-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-5-other-filters","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5.5 Other filters")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("Visibility: "),e("code",[t._v(":hidden")]),t._v(", "),e("code",[t._v(":visible")])]),e("li",[t._v("Обратить селектор: "),e("code",[t._v("input:not(:checkbox)")]),t._v(".")]),e("li",[e("code",[t._v(":animated")]),t._v(" — элементы в процессе анимации")]),e("li",[e("code",[t._v(":header")]),t._v(" — заголовки "),e("code",[t._v("h1...h6")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Нужно сначала сделать выборку и только потом ее фильтровать через "),s("code",[this._v(":not")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// Не так:")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("':not[img[src*=\"dog\"]'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// выдает все, что не img")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// а так:")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'img:not([src*=\"dog\"]'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// нормально отработает")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v(":hidden")]),t._v(" — не видны на странице. Входит и "),e("code",[t._v("display: none")]),t._v(", "),e("code",[t._v("visibility: hidden")]),t._v(", "),e("code",[t._v('input[type="hidden"]')]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("В jQuery 3 "),s("code",[this._v("<br>")]),this._v(" и пустые инлайновые элементы считаются видимыми")]),this._v(". Они фактически занимают место (перевод строки, пробел).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-5-6-how-to-create-custom-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-6-how-to-create-custom-filters","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5.6 How to create custom filters")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-6-enhancing-performances-using-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-enhancing-performances-using-context","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.6 Enhancing performances using context")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("По умолчанию в "),s("code",[this._v("$()")]),this._v(" подразумевается, что выборка по селектору идет внутри "),s("code",[this._v("document")]),this._v(". Но мы можем задать контекст вторым параметром (DOM-элемент, строка или jQuery-коллекция).")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// Плохо, самый медленный вариант. Ищем сначала p, потом фильтруем по #myId:")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'#myId p'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Лучше, работает быстрее, вернет то же самое, но будет искать сначала #myId, а потом внутри него p:")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'p'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'#myId'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Хорошо. Работает как предыдущий, но читается проще:")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'#myId'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("find")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'p'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Если имеется выборка и нужно найти что-то внутри нее, то используем контекстный поиск через "),s("code",[this._v(".find")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $form "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'#myForm'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Хорошо:")]),t._v("\n$form"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("find")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("':checked'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("addClass")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'_on'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Плохо. Через второй параметр $ будет то же самое, но читается хуже:")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("':checked'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $form"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("addClass")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'_on'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ссыnки"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ссыnки","aria-hidden":"true"}},[this._v("#")]),this._v(" Ссылки")])}],!1,null,null,null);s.default=a.exports}}]);