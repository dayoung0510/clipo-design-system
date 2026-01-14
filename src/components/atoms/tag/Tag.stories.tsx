import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  args: {
    label: "샘플 태그",
    backgroundColor: "#bee3f8",
    color: "#1a365d",
    variant: "solid",
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
