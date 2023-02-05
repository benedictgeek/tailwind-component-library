import { Meta, Story } from "@storybook/react";
import { Radio } from "./radio";

const meta: Meta = {
  title: "Radio",
  component: Radio,
};

export default meta;

const Template: Story = (args) => {
  return (
    <>
      <Radio {...args} label="My option one" name="radioButton" className="my-2"/>
      <Radio {...args} label="My option two" name="radioButton" className="my-2"/>
      <Radio {...args} label="My option three" name="radioButton" className="my-2"/>
    </>
  );
};

export const Default = Template.bind({});
