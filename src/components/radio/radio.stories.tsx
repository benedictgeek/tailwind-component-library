import { Meta, Story } from "@storybook/react";
import { Radio } from "./radio";

const meta: Meta = {
  title: "Radio",
  component: Radio,
};

export default meta;

const Template: Story = (args) => {
  return <>
  <Radio {...args} />
  </> ;
};

export const Default = Template.bind({});
