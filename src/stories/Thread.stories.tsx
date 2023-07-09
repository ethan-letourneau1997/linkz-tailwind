import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Reply } from "../components/Reply/reply";
import { Thread } from "../components/Thread/thread";

const meta = {
  component: Thread,
  title: "Components/Thread",
  tags: ["autodocs"],
} satisfies Meta<typeof Thread>;

export default meta;
type Story = StoryObj<typeof Thread>;

export const Basic: Story = {
  args: {
    child: (
      <Reply
        voteCount={147}
        dateTimePosted="2023-07-06T21:30:00"
        avatarLink="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        username="WhimsicalWhale789"
        replyText="The plaintiffs had argued that the damage inflicted during the massacre was a “public nuisance” from the start and were seeking relief from that nuisance as well as to “recover for unjust enrichment” others have gained from the “exploitation of the massacre."
      >
        <Reply
          voteCount={21}
          dateTimePosted="2023-07-07T21:30:00"
          avatarLink="https://i.pravatar.cc/151?u=a42581f4e29026704d"
          username="VelvetVortex47"
          replyText="The plaintiffs had argued that the damage inflicted during the massacre was a “public nuisance” from the start and were seeking relief from that nuisance as well as to “recover for unjust enrichment” others have gained from the “exploitation of the massacre. "
        >
          <Reply
            voteCount={-4}
            dateTimePosted="2023-07-07T21:30:00"
            avatarLink="https://i.pravatar.cc/152?u=a042581f4e2902670d"
            username="ElectricPixel"
            replyText="Fletcher was 7 years old when a violent White mob targeted Black residents and destroyed her community’s thriving Black economic hub. "
          />
        </Reply>
      </Reply>
    ),
  },
};

export const Single: Story = {
  args: {
    child: (
      <Reply
        voteCount={147}
        dateTimePosted="2023-07-06T21:30:00"
        avatarLink="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        username="WhimsicalWhale789"
        replyText="It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    ),
  },
};

export const Branching: Story = {
  args: {
    child: (
      <Reply
        voteCount={147}
        dateTimePosted="2023-07-07T21:30:00"
        avatarLink="https://i.pravatar.cc/151?u=a042581f429026704d"
        username="WhimsicalWhale789"
        replyText="It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      >
        <Reply
          voteCount={21}
          dateTimePosted="2023-07-05T21:30:00"
          avatarLink="https://i.pravatar.cc/151?u=a42581f4e29026704d"
          username="VelvetVortex47"
          replyText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        >
          <>
            <Reply
              voteCount={-4}
              dateTimePosted="2023-07-05T21:30:00"
              avatarLink="https://i.pravatar.cc/151?u=a042581f4e2902670d"
              username="ElectricPixel"
              replyText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            >
              <Reply
                voteCount={7}
                dateTimePosted="2023-07-05T21:30:00"
                avatarLink="https://i.pravatar.cc/151?u=a42581f4e29026704d"
                username="VelvetVortex47"
                replyText="Text of the printing and typesetting industry."
              />
            </Reply>
            <Reply
              voteCount={3}
              dateTimePosted="2023-07-05T21:30:00"
              avatarLink="https://i.pravatar.cc/152?u=a042581f4e2902670d"
              username="ElectricPixel"
              replyText="Text of the printing and typesetting industry."
            />
          </>
        </Reply>
      </Reply>
    ),
  },
};
