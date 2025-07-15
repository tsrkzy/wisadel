import InputFormEmail from "@/components/common/InputFormEmail.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("InputFormEmail", () => {
  it("nameに指定された値をinput要素のname属性に指定してレンダリングする", () => {
    const attributeName = "email";
    const wrapper = mount(InputFormEmail, {
      props: {
        name: attributeName,
      },
    });
    expect(wrapper.find("input").exists()).toBe(true);
    expect(wrapper.find("input").attributes("name")).toBe(attributeName);
  });
  it("input要素に値を入力した場合、inputイベントが発火する", async () => {
    const wrapper = mount(InputFormEmail, {
      props: {
        name: "email",
      },
    });

    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);

    const mailAddress1 = "test1@lepra.jp";
    const mailAddress2 = "test2@lepra.jp";

    await input.setValue(mailAddress1);
    expect(wrapper.emitted()["update:modelValue"][0]).toStrictEqual([
      mailAddress1,
    ]);

    await input.setValue(mailAddress2);
    expect(wrapper.emitted()["update:modelValue"][1]).toStrictEqual([
      mailAddress2,
    ]);
  });
});
