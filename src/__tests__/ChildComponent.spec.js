import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import FormComponent from '../components/FormComponent.vue';
import TableComponent from '../components/TableComponent.vue';

describe('Form Component and Table Component', () => {
  test('should contain TableComponent', () => {
    const wrapper = mount(FormComponent);
    const tableComponent = wrapper.findComponent(TableComponent);

    expect(tableComponent).toBeDefined();
  });
});
