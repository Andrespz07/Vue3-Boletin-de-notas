import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TableComponent from '../components/TableComponent.vue';

describe('TableComponent.vue', () => {
    it('renders class name in table', () => {
      const wrapper = mount(TableComponent, {
        props: {
          name: 'Juan',
          classes: 'Matemáticas',
          note: 9,
        },
      });
      
      expect(wrapper.find('td:nth-child(2)').text()).toMatch('Matemáticas');
    });
  });
  