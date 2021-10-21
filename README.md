# show user event is not a function

to get here, we made (to fit our project features) : 

```shell
$ npm init svelte@next
// select typescript
npx apply rossyman/svelte-add-jest
// use typescript
npx svelte-add@latest scss
```

We added the use of `$app/env` in index :

```typescript
import { browser } from '$app/env'
const queryString = browser ? document.location.search : '';
const query = new URLSearchParams(queryString);
console.log(query.get("counter"));
```

Then we added userEvent and a new test to click on the increment button

```javascript
test('should increment counter', () => {
  const button = renderedComponent.container.querySelector('.btn-increment');
  userEvent.click(button);
  userEvent.click(button);
  expect(renderedComponent.getByText('2')).toBeInTheDocument();
});
```

but we have : 

```shell
TypeError: userEvent.click is not a function

      30 |     test('should increment counter', () => {
      31 |       const button = renderedComponent.container.querySelector('.btn-increment');
    > 32 |       userEvent.click(button);
```