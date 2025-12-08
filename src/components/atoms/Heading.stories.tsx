// src/components/atoms/Heading.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
};

export default meta;

// どんな状態・挙動を試すか
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    children: "見出し1",
  },
};