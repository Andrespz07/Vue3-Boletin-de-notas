import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FormComponent from '../components/FormComponent.vue';


describe('FormComponent', () => {
  it('adds student to table when Add button is clicked', async () => {
    const wrapper = mount(FormComponent)

    const input = wrapper.find('input[type="text"]')
    await input.setValue('John Doe')
    const addButton = wrapper.find('button')
    await addButton.trigger('click')

    const table = wrapper.find('table')
    expect(table.html()).toContain('John Doe')
  })
})

  