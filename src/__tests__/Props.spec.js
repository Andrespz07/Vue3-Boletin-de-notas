import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderComponent from '../components/HeaderComponent.vue';

describe('HeaderComponent', () => {
  it('renders title prop', () => {
    const title = 'Student notes';
    const wrapper = mount(HeaderComponent, {
      props: {
        title
      }
    });
    expect(wrapper.text()).toContain(title);
  });
});
