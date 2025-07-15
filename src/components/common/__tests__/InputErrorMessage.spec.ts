import InputErrorMessage from "@/components/common/InputErrorMessage.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("InputErrorMessage", () => {
  it("props.messageに値が設定された場合は表示する", () => {
    const wrapper = mount(InputErrorMessage, {
      props: {
        message: "エラーメッセージ",
      },
    });
    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.text()).toBe("エラーメッセージ");
  });
  it("props.messageに値が設定されていない場合はレンダリングしない", () => {
    const wrapper = mount(InputErrorMessage);
    expect(wrapper.find("span").exists()).toBe(false);
  });
});
