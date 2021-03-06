//import { mount } from '@vue/test-utils';
import { QBtn, } from 'quasar'; // <= cherry pick only the components you actually use
import AutoGeneratedPage from '../../../../src/pages/AutoGenerate.vue'; // <= note the absence of `.vue` extension, here we are importing the JS/TS part of a Double File Component
describe('AutoGenerated Page tests', () => {
  it('Auto generated page from JSON should contain all the UI Elements', () => {
    cy.mount(AutoGeneratedPage);
    cy.get('[data-test="toggle-setting-0"]').eq(false);
    cy.get('[data-test="toggle-setting-0"]').focus().click();
    cy.get('[data-test="toggle-setting-0"]').eq(true);
    cy.get('[data-test="popup-edit-setting-1"]');
    expect(popUpEdit.props().hint).toEqual("Popup Edit box hint");
    const popUpEditNumber = autoGenerate.findComponent('[data-test="popup-edit-setting-2"]');
    expect(popUpEditNumber.exists()).toBeTruthy();
    expect(popUpEditNumber.props().hint).toEqual("Popup Edit box (Number) hint");
    expect(popUpEditNumber.props().dataType).toEqual("number");
    const dropDown = autoGenerate.findComponent('[data-test="dropdown-setting-3"]');
    expect(dropDown.exists()).toBeTruthy();
    expect(autoGenerate.vm.internalOptions.length).toEqual(3);
  });
})