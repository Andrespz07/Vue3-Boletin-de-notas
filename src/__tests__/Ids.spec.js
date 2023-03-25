import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import FormComponent from '../components/FormComponent.vue';

describe('Form Component', () => {
  test('should have correct id attribute', () => {
    const wrapper = mount(FormComponent);
    const registerSection = wrapper.find('#register-zone');
    expect(registerSection.attributes('id')).toBe('register-zone'); 
  });
});
