import { Meta, Story } from "@storybook/react";
import { Button } from "./button";
const meta: Meta = {
  title: "Button",
  component: Button,
};

export default meta;

const Template: Story = (args) => {
  return <Button {...args}>hello world</Button>;
};

export const Default = Template.bind({});
