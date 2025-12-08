// src/components/atoms/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "ボタン",
  },
};

export const WithClick: Story = {
  args: {
    children: "クリックしてね!",
    onClick: () => {
      alert("clicked!");
    },
  },
};