### TDD
 - The order of operations in TDD, in a development environment, is a little different than what we have experienced through our labs in a learning environment
    - Red: Write tests and watch them fail (Which means we need to plan our app ahead of time)
    - Green: Write working code to pass tests
    - Refactor: Clean up code and still have tests pass

- We have all encountered situations where manual testing is a big time sink, i.e. filling out a validated form in its entirety every time you need to bug test it (Sucks)

- TDD comes at a cost: Initial set up of the app takes a lot longer, but this upfront cost is made in exchange for a much faster testing process down the line.


### React:
 - In React, testing is often done using two frameworks, Jest and Enzyme
  - Jest: A JavaScript testing library created by Facebook; bundled into create-react-app, ready to go.
  - Enzyme: A JavaScript testing utility for React, created by AirBnB. Allows us to test Components, their data, behavior, and output.

### Jest:
 - Easy to digest Docs, straightforward testing.

 ```javascript
 describe("Basic Jest testing", () => {
     it("adds two and two together and equals 4", () => {
       expect(2 + 2).toEqual(4)
     })

     it("adds two and two together and is not null", () => {
       expect(2 + 2).not.toBeNull()
     })
 })
 ```

### Enzyme:
- Docs not quite as nice, but easy to navigate once you crack into them.

```javascript
import { shallow } from 'enzyme';
import App from '../App';

describe("App", () => {
  it("Renders successfully", () => {
    let wrapper = shallow(<App />)
    expect(wrapper.find('div').length).toEqual(1)
  })
})
```

### Try it out:

Let's try it ourselves by building a basic React App

 - From App, render a component <NationalArchives />

 - NationalArchives has state.documents, set to "Declaration of Independence"
 - NationalArchives renders a component, <NicolasCage />

 - NicolasCage wants to steal the Declaration of Independence

*Bonus:*
 - NicolasCage can steal the Declaration of Independence 
