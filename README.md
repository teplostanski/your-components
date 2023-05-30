# awesome-copyright

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

Awesome copyright notice for Kuse and VanillaJS with auto-renewal of the year.

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

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import * as Copyright from "awesome-copyright";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <footer>

        <Copyright.React // Use React component
          year={2022} // Required parameter. Year of copyright start Accepts a string or a number
          yearOnly={false} // Required parameter. Show only the Year the copyright started. It is disabled by default and if the current year differs from the year of the beginning, it shows the years in the format '2000-2023' . Takes a Boolean value.
          creator="Igor Teplostanski" // Name of the copyright holder. Accepts a string.
          message="By" // The text before the creator 's name .Accepts a string.
          styles="copyright" // Styles the root block of the component. Accepts a string with the CSS class name/names
          creatorStyle="copyright__creator" // Стилизует корневой блок с именем создателя Принимает строку с именем/именами CSS класса
        />

      </footer>
    </div>
  </React.StrictMode>
)

```

[npm-url]: https://www.npmjs.com/package/awesome-copyright
[npm-image]: https://img.shields.io/npm/v/awesome-copyright
[github-license]: https://img.shields.io/github/license/teplodtanski/awesome-copyright
[github-license-url]: https://github.com/teplodtanski/awesome-copyright/blob/main/LICENSE.md
[github-build]: https://github.com/teplodtanski/awesome-copyright/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/teplodtanski/awesome-copyright/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/awesome-copyright
