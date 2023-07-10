import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Reply } from "../components/Reply/reply";
import { TextEditor } from "../components/Editor/text-editor";

const meta = {
  component: TextEditor,
  title: "Components/Editor",
  tags: ["autodocs"],
} satisfies Meta<typeof TextEditor>;

export default meta;
type Story = StoryObj<typeof TextEditor>;

export const Basic: Story = {
  args: {},
};
