import type { Meta, StoryObj } from "@storybook/react";

import { Reply } from "../components/Reply/reply";

const meta = {
  component: Reply,
  title: "Components/Reply",
  tags: ["autodocs"],
} satisfies Meta<typeof Reply>;

export default meta;
type Story = StoryObj<typeof Reply>;

export const Basic = {
  args: {
    username: "Swagger2121",
    avatarLink: "https://i.pravatar.cc/202",
    dateTimePosted: "2023-07-05T21:30:00",
    voteCount: 21,
    replyText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
} satisfies Story;
