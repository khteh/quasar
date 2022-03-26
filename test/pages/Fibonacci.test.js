import { qLayoutInjections, installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount } from '@vue/test-utils';
import { QBtn, } from 'quasar'; // <= cherry pick only the components you actually use
import FibonacciPage from '../../src/pages/Fibonacci'; // <= note the absence of `.vue` extension, here we are importing the JS/TS part of a Double File Component
installQuasarPlugin();
describe('FibonacciPage', () => {
  it('mounts without errors', () => {
    const wrapper = mount(MyButton);
    expect(wrapper).toBeTruthy();
  });
  it('Fibonacci with errors', async () => {
    const wrapper = mount(FibonacciPage, {
      global: { provide: qLayoutInjections() },
    });
    const { vm } = wrapper;

    const input = await wrapper.find("#fibInput");
    expect(input.exists()).toBe(true)
    input.setValue("Hello");

    const button = wrapper.findComponent(QBtn);
    await button.trigger('click');

    const result = await wrapper.find("#fibResult");
    expect(result.exists()).toBe(true)    
    expect(result.element.value).toBe('1');
  });
  it('Fibonacci with success', async () => {
    const wrapper = mount(FibonacciPage, {
      global: { provide: qLayoutInjections() },
    });
    const { vm } = wrapper;

    const input = await wrapper.find("#fibInput");
    expect(input.exists()).toBe(true)
    input.setValue("20");

    const button = wrapper.findComponent(QBtn);
    await button.trigger('click');

    const result = await wrapper.find("#fibResult");
    expect(result.exists()).toBe(true)    
    expect(result.element.value).toBe('6765');
  });
});