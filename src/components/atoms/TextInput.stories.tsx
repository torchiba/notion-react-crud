// src/components/atoms/TextInput.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Atoms/TextInput",
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    value: "ここにテキストを入力",
  },
};

export const onChange: Story = {
  args: {
    value: "onChange!",
    onChange: () => {
      alert("changed!!");
    },
  },
};