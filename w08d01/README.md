# W08D01 - React Review

### To Do
- [x] Building Components
- [x] Props
- [x] Fetching Data from an API
- [x] Immutable Patterns
- [x] Q and A

### Bonus Content
- [ ] React Router (add multipage-like navigation to React) W11
- [ ] `useRef` (attach a reference to a particular DOM element)
- [ ] `useContext` (share data without prop drilling) W11
- [ ] Component Libraries (use someone else's components)

* custom hooks

```js
// back()
setMode(history[history.length - 1]);

setHistory((prevHistory) => {
  const copyOfHistory = [...prevHistory];
  copyOfHistory.pop();

  setMode(copyOfHistory[copyOfHistory.length - 1]);

  return copyOfHistory;
});

const newInterview = {...interview};

const history = [EMPTY]
```


```js
const username = 'Alice';
const password = '1234';

const user = {
  username,
  password
};
```











