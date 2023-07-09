import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { VoteButtons } from "../components/VoteButtons/vote-buttons";

const meta = {
  component: VoteButtons,
  title: "Components/VoteButtons",
  tags: ["autodocs"],

  argTypes: {
    userVote: {
      options: [-1, 0, 1],
      control: { type: "number", min: -1, max: 1, step: 1 },
    },
  },
} satisfies Meta<typeof VoteButtons>;

export default meta;
type Story = StoryObj<typeof VoteButtons>;

export const NoVote: Story = {
  args: {
    voteCount: 21,
    userVote: 0,
  },
  decorators: [
    (Story) => (
      <div className="px-3">
        <Story />
      </div>
    ),
  ],
};

export const VotedUp: Story = {
  args: {
    voteCount: 20,
    userVote: 1,
  },
  decorators: [
    (Story) => (
      <div className="px-3">
        <Story />
      </div>
    ),
  ],
};

export const VotedDown: Story = {
  args: {
    voteCount: 19,
    userVote: -1,
  },
  decorators: [
    (Story) => (
      <div className="px-3">
        <Story />
      </div>
    ),
  ],
};
