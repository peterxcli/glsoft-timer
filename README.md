# calculator

## Calculator

### Requirement

- number : 0-9 , 0.x
- Basic calculation : + , - , * , \ , % , =
- memory : `m+`, `m-`, `m`
- clear : ac

### issue

#### clock rotate animation

- [x] solution 1: lower the time-unit setting in the timeStoreSlice
- [ ] solution 2: use css animation, like linear or some alter to resolve

#### the setting close button click event accidentally pass to the overlay

- [x] solution 1: use `pointer-events: none;` to disable the click/drag action, but cause more problem, like the click event would trigger the timer drag event
- [ ] ignore it
