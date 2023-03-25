import { expect, test } from 'vitest';
import FormComponent from '../components/FormComponent.vue';
import { mount } from "@vue/test-utils";

test("FormComponent should have container class", () => {
  const wrapper = mount(FormComponent);
  const registerZone = wrapper.find("input");
  expect(registerZone.classes()).toContain("inputs");
});

