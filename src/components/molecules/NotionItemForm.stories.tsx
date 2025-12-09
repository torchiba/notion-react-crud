// src/components/molecules/NotionItemForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import NotionItemForm from "./NotionItemForm";

const meta: Meta<typeof NotionItemForm> = {
  title: "Molecules/NotionItemForm",
  component: NotionItemForm,
};

export default meta;

type Story = StoryObj<typeof NotionItemForm>;

export const EmptyForm: Story = {
  args: {
    onSubmit: (payload) => {
      alert(`送信された値：\nタイトル: ${payload.title}\n詳細: ${payload.detail}`);
    },
  },
};