# Модуль-8-1

## ТЕРМИНАЛ

- [Шпаргалка-1](https://tproger.ru/translations/bash-cheatsheet/)
- [Шпаргалка-2](https://habr.com/ru/company/ruvds/blog/445270/)

### Открыть

- 'ctrl + ~'
- 'view > terminal'
- через палитру 'ctrl + shift + p'

### Основные полезные команды

- путь (pwd)
- лист (ls)
  - **ls -l** выведет файлы списком
  - **ls -la** выведет все скрытые файлы
- навигация (cd)
- очистка 'clear' или 'ctrl + l'
- создание (touch)
  - **touch css** создаёт файл
  - **mkdir css** создаёт дерикторию(папку)
- переименование/перемещение (mv)
  - **mv css scss** переименовывает файл
- удаление (rm)
  - **rm scss** удаляет файл
  - **rmdir css** удаляет создаёт дерикторию(папку)
  - **rm -rf** удалит папку со всеми файлами в ней

## Node.js и npm

- установка
- инициализация и packege.json

  - **npm init** сам вводишь данные
  - **npm init -y** или **npm init --yes** создаёт пэкэйдж автоматически

- Работа с пакетами:

  - [npmjs.com](https://www.npmjs.com/)
  - **npm i** устанавливает пакет
  - **npm i** или **npm instal** устанавливает пакеты от которых зависит проект
    После установки пакета в проект добавится папка node_modules. Её нельзя пушить на гитхаб, поэтому добавляем её в .gitignore (node_modules/)
  - **npm remove joi** удаление пакета
  - **npm run qwe**
    запустит скрипт который в пакет.джейсон записан. Туда же можно записать команду для запуска нужного файла со скриптом но под своим названием, чтобы не писать его по десять раз

- CommonJS модули
- npm скрипты
  - **gh-pages**
  - **parcel-bundler**
  - **posthtml-include**
  - **sass**
  - **express**
- pre и post
  - "prestart": "echo \"Запустится перед скриптом start\"",
  - "poststart": "echo \"Запустится после скрипта start\"",

## Транспиляция кода

- [Babel](https://babeljs.io/)
- CLI и npm-скрипты
- Пресеты
- [Browserslist](https://github.com/browserslist/browserslist/)
- [Сборщик Parcel](https://parceljs.org/)
- [ECMAScript модули](https://exploringis.com/es6/ch.modules.html)
  - (default) Дефолтный экспорт и импорт
  - (named) Именованный экспорт и импорт
  - (namespace) Импорт пространства имён
