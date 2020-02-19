<h1 align="center">@ks89/ngx-drag-n-drop</h1>

<h3 align="center"><b>@ks89/ngx-drag-n-drop</b> is an Angular library to add drag and drop features</h3>
<br>
<p align="center">
  Based on <a href="https://bitbucket.org/IpponMattRitter/angular4-drag-drop">angular4-drag-drop</a>, but with support for Angular >=7 and other improvements.
</p>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop">
    <img src="https://img.shields.io/npm/v/@ks89/ngx-drag-n-drop.svg?style=flat-square" alt="npm@latest">
  </a>
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop">
      <img src="https://img.shields.io/npm/v/@ks89/ngx-drag-n-drop/beta.svg?style=flat-square" alt="npm@beta">
    </a>
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop">
    <img src="https://img.shields.io/npm/v/@ks89/ngx-drag-n-drop/next.svg?style=flat-square" alt="npm@next">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop"><img src="https://img.shields.io/npm/dw/@ks89/ngx-drag-n-drop.svg?style=flat-square" alt="Downloads/week"></a>
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop"><img src="https://img.shields.io/npm/dm/@ks89/ngx-drag-n-drop.svg?style=flat-square" alt="Downloads/month"></a>
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop"><img src="https://img.shields.io/npm/dy/@ks89/ngx-drag-n-drop.svg?style=flat-square" alt="Downloads/year"></a>
</p>
<p align="center">
  <a href="https://snyk.io/test/github/ks89/ngx-drag-n-drop"><img src="https://snyk.io/test/github/ks89/ngx-drag-n-drop/badge.svg" alt="Known Vulnerabilities"></a>
  <a href="https://david-dm.org/Ks89/ngx-drag-n-drop"><img src="https://david-dm.org/Ks89/ngx-drag-n-drop.svg" alt="david-dm Dependencies"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="code style: prettier"></a>
</p>
<p align="center">
  <a href="https://stackblitz.com/edit/ngx-drag-n-drop"><img src="https://img.shields.io/badge/stackblitz-available-orange.svg" alt="Stackblitz"></a>
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop"><img src="https://img.shields.io/badge/angular--style--guide-compliant-brightgreen.svg" alt="AngularStyleGuide"></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@ks89/ngx-drag-n-drop"><img src="https://img.shields.io/npm/l/@ks89/ngx-drag-n-drop.svg?style=flat-square" alt="NPMLicense"></a>
  <a href="https://semver.org/"><img src="https://img.shields.io/badge/semver-2.0-ff69b4.svg?style=flat-square" alt="Semver"></a>
</p>

<h5 align="center">
<b>Do you like @ks89/ngx-drag-n-drop? Please, add a :star: to support this library</b>
</h5>

<br>

## Table of Contents

1. **[Features](#boom-features-boom)**
2. **[Installation](#package-installation-package)**
3. **[Choose the version](#warning-choose-the-version-warning)**
4. **[Usage](#usage)**
5. **[News](#fire-news-fire)**
6. **[Contributing](#computer-contributing-computer)**
7. **[License](#copyright-license-copyright)**

<br>

## :boom: Features :boom:
- Angular Module to import this library
- works with both JIT and AOT compilers
- supports all **recommended Angular Compiler Options**
- compliant to Angular Package Format v8 specifications
- **use [Semantic versioning 2.0.0](http://semver.org/)** also known as 'semver'
- official example with `angular-cli`

<br>

## :package: Installation :package:

- `npm install --save @ks89/ngx-drag-n-drop`

<br>

## :warning: Choose the right version :warning:

|            | @ks89/ngx-drag-n-drop |
| ---------- | :---:                       |
| AngularJS  | NOT WORKING                 |
| Angular 2  | NOT OFFICIALLY SUPPORTED    |
| Angular 4  | NOT OFFICIALLY SUPPORTED    |
| Angular 5  | NOT OFFICIALLY SUPPORTED    |
| Angular 6  | NOT OFFICIALLY SUPPORTED    |
| Angular 7  | &gt;= 1.0.0                 |
| Angular 8  | &gt;= 1.0.0                 |
| Angular 9  | &gt;= 2.0.0 (IMPORTANT)*    |

*Please note that this library from version 2.0.0 requires angular 9 with IVY enabled!*

<br>


## Usage
To import the module into a module in which you wish to use the directive on components.
```
import { DragDropDirectiveModule} from "@ks89/ngx-drag-n-drop";

```
This module exports two attribute directives, 'DragDirective' and 'DropDirective'.  DragDirectve is used with a component from which you want to drag items, while DropDirective is used with the component in which you wish to drop items.  

Both accept inputs for CSS class highlighting. If you do not pass a string then highlighting will be ignored.  Both will emit the dragged item when it is dropped in the 'DroppableDirective' component or element.

'DragDirective' emits an event when dragging is started.

'DropDirective' emits events when a drag enters a drop element, leaves a drop element, and as stated above when an element is dropped.

### DragDirective
```typescript
<div *ngFor="let item of itemsToDrop" ksDragDirective [draggedItem]='item' [dragHightlight]="'highlight'" (releaseDrop)="releaseDrop($event)" (startDrag)="startDrag(item)">
</div>
```
'[draggedItem]="item"' Applies the drag directive, and passes it an item.

'[dragHighlight]="'highlight'"' Passes a string to add a css class to the css class list of the element.

'(releaseDrop)="releaseDrop($event)"' Calls a function to act on the dragged item once it is dropped into the drop area.

'(startDrag)="startDrag(item)" Calls a function when the user starts dragging the item. 

### DropDirectve
```typescript
<div ksDropDirective (dropEvent)="addDropItem($event)" (dropEventMouse)="dropEventMouse($event) (dragenterEvent)="dragEnter($event)" (dragleaveEvent)="dragLeave()" class="droppable" [dropHighlight]="'highlight'" >
</div>
```
'ksDropDirective' applies the directive to an element, making it a drop target.
'[dropHighlight]="'highlight'"' passes a string to add a css class to the css class list of the element.  

'(dropEvent)="addDropItem($event)"' calls a function and passes the dropped item when an item is dropped into the drop element.

'(dropEventMouse)="dropEventMouse($event)"'.  dropEventMouse is emitting the html drop event. From this you can get x,y cordinates of the drop etc.  If you wish you can use this to get the dropped item as well: let droppedObject = JSON.parse(event.dataTransfer.getData('text')).  

'(dragenterEvent)="dragEnter($event)"' calls a function and passes the dragged item when an item is dragged into the drop element.

'(dragleaveEvent)="dragLeave($event)"' calls a function and passes the dragged item when the item is dragged out of the drop element.


## :fire: News :fire:

- 02/19/2019 - 2.0.0 - @ks89/ngx-drag-n-drop - [HERE](https://github.com/Ks89/ngx-drag-n-drop/releases)
- 07/24/2019 - 1.0.1 - @ks89/ngx-drag-n-drop - [HERE](https://github.com/Ks89/ngx-drag-n-drop/releases)
- 07/24/2019 - 1.0.0 - @ks89/ngx-drag-n-drop - [HERE](https://github.com/Ks89/ngx-drag-n-drop/releases)

<br>

## :computer: Contributing :computer:

Check `CONTRIBUTING.md` in this repository.
To understand how to contribute to an open source project, [HERE](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) you can find useful information.

When you create a pull request, please, format your code to be consistent with the existing code. I suggest to use [WebStorm](https://www.jetbrains.com/webstorm/) as IDE and when you commit don't use a third party software, but the official command line `git`.
In this way, [prettier](https://prettier.io/) will run using my configuration and it will auto-format the code. If it will fail, add files with `git add .` again and retry.

<br>

## :copyright: License :copyright:

The MIT License (MIT)

Copyright (c) 2019-2020 Stefano Cappa (Ks89)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<br/>

**Created by Stefano Cappa**

**[⬆ back to top](#table-of-contents)**
