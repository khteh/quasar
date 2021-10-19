import { mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QInput } from 'quasar'; // <= cherry pick only the components you actually use
import Fibonacci from '../../src/pages/Fibonacci'; // <= note the absence of `.vue` extension, here we are importing the JS/TS part of a Double File Component

const factory = mountFactory(Fibonacci, {
  // mount: { type: 'full' } <= uncomment this line to use `mount`; `shallowMount` is used by default as it will stub all **registered** components found into the template
  quasar: { components: { QInput } },  
  mount: {
    //type: 'full', <= uncomment this line to use `mount`; `shallowMount` is used by default as it will stub all **registered** components found into the template
  },
});

describe('Fibonacci', () => {
  test('Fibonacci with errors', () => {
    //const wrapper = factory(); // <= when no props are needed
    const wrapper = factory({ "n": "abc" }); // <= when props are needed    
    expect(wrapper).toBeFalsy();
  });
  test('Fibonacci with success', () => {
    //const wrapper = factory(); // <= when no props are needed
    const wrapper = factory({ "n": "20" }); // <= when props are needed    
    expect(wrapper).toBeTruthy();
  });
});