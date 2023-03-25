import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderComponent from '../components/HeaderComponent.vue';
import HomeView from '../views/HomeView.vue';

describe('Header Component and main tag', () => {
  test('should contain a props for header and main tag', () => {
    const title = 'Notes student';
    const wrapper = mount(HeaderComponent, {
      propsData: { title },
    });
    const mainTag = mount(HomeView);
    expect(wrapper.find('h1').text()).toBe(title);
    expect(mainTag.find('main').exists()).toBe(true);
  });
});
