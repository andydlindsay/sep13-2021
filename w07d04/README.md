# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
* Can't be called conditionally (must be top level)
* From within components and React functions (aka other hooks)
* All hooks have to start with `use`

### Pure Functions
* Runs without side effects
* Doesn't rely on any data other than parameters
* That it will return the same value given the same arguments
* It does 1 job 

```js
let addingNumber = 5;

const addTwo = (num) => {
  console.log('i am not pure');
  addingNumber = 7;
  return num + addingNumber;
}
```

### Side Effects
* Setting up a socket connection
* Retrieving data
* console.log
* Directly manipulating the DOM







