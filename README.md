# awesome-copyright

![npm](https://img.shields.io/npm/v/awesome-copyright?color=%2370bd2d&style=for-the-badge)
![npm type definitions](https://img.shields.io/npm/types/awesome-copyright?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/awesome-copyright?style=for-the-badge)

Awesome copyright notice for React and VanillaJS with auto-renewal of the year.

## What is it for?

There is only one practical application - to create copyright notices with automatic replacement of the copyright renewal year.
This is an npm test package created for one purpose - to learn how to create npm packages.

## Installation:

```bash
npm install awesome-copyright
```

or

```bash
yarn add awesome-copyright
```

## Usage :

### In React

Add `Copyright` to your component:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import * as Copyright from "awesome-copyright";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <footer>

        <Copyright.React // Use React component
          year={2022}
          yearOnly={false}
          creator="Igor Teplostanski"
          message="By"
          styles="copyright"
          creatorStyle="copyright__creator"
        />

      </footer>
    </div>
  </React.StrictMode>
)

```

### In Vanilla JS

Add `Copyright` to your component:

```js
import * as Copyright from "awesome-copyright";

Copyright.Vanilla({ // Use Vanilla js
  element: '#copyright',
  yearOnly: false,
  yearStyle: 'test',
});

```

| Params       | Type          | Example       | Default state                   | Description                                                                                                                                                                      |
| ------------ | ------------- | ------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| year         | string/number | 2023/"2023"   | current year                    | Year of copyright start                                                                                                                                                          |
| yearOnly     | boolean       | true/false    | false                           | Show only the Year the copyright started. It is disabled by default and if the current year differs from the year of the beginning, it shows the years in the format '2000-2023' |
| creator      | string        | "John Doe"    | ""                              | Name of the copyright holder.                                                                                                                                                    |
| copy         | string        | "®"           | "©"                             | Copyright symbol                                                                                                                                                                 |
| message      | string        | "Create by"   | ""                              | The text before the creator 's name                                                                                                                                              |
| styles       | srting        | "copyright"   | "" ( Only for React component ) | Styles the root block of the component. Accepts a string with the CSS class name/names                                                                                           |
| yearStyle    | string        | "year"        | ""                              | Styles the year block of the component. Accepts a string with the CSS class name/names                                                                                           |
| messageStyle | string        | "message"     | ""                              | Styles the message block of the component. Accepts a string with the CSS class name/names name                                                                                   |
| copyStyle    | string        | "copy-symbol" | ""                              | Styles the copy symobl block of the component. Accepts a string with the CSS class name/names                                                                                    |
| creatorStyle | string        | "name"        | ""                              | Styles the creator block of the component. Accepts a string with the CSS class name/names                                                                                        |
| element      | string        | "#copyright"  | Required parameter for Vanilla  | HTML element id                                                                                                                                                                  |

