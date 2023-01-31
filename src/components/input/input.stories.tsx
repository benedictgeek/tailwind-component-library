import { Meta, Story } from "@storybook/react";
import { FormGroup } from "../formGroup/formGroup";
import { SearchIcon } from "../icons";
import { Input } from "./input";
const meta: Meta = {
  title: "Input",
  component: Input,
};

export default meta;

const Template: Story = (args) => {
  return <Input {...args} />;
};

const WithFormGroup: Story = (args) => {
  return (
    <FormGroup label="Phone Number" htmlFor="phoneNumber">
      <Input {...args} id="phoneNumber" />
    </FormGroup>
  );
};

const WithIconsTemplate: Story = (args) => {
  return (
    <FormGroup label="Phone Number" htmlFor="phoneNumber">
      <Input
        {...args}
        id="phoneNumber"
        iconRight={<SearchIcon color="black" />}
      />
    </FormGroup>
  );
};

export const Default = Template.bind({});
export const WithLabel = WithFormGroup.bind({});
export const WithIcons = WithIconsTemplate.bind({});
