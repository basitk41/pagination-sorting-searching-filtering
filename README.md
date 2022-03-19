# simple-state-mngt

> Pagination, Sorting, Searching, Filtering

[![NPM](https://img.shields.io/npm/v/simple-state.svg)](https://www.npmjs.com/package/simple-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i pagination-sorting-searching-filtering
```

## Usage

All in one you have full beautiful pagination, sorting, searching, and easy filtering methods<br />

Below is the component for server side pagination.<br />

component.js

```jsx
import React, { useState } from "react";
import { Pagination } from "pagination-sorting-searching-filtering";
const App = () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} setPage={setPage} totalPages={10} >
}
```

## License

MIT © [basitk41](https://github.com/basitk41)

---

This is created by [Basit Ali](https://github.com/basitk41).
