import { Meta, Story } from "@storybook/react";
import { CheckBox } from "./checkbox";
const meta: Meta = {
  title: "CheckBox",
  component: CheckBox,
};

export default meta;

const Template: Story = (args) => {
  return <CheckBox {...args} label={"Please check this box to continue"} />;
};

export const Default = Template.bind({});
