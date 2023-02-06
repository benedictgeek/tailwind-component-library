import { Meta, Story } from "@storybook/react";
import { Tabs } from "./tab";

const meta: Meta = {
  title: "Tabs",
  component: Tabs,
};

export default meta;

const Template: Story = (args) => {
  return (
    <Tabs
      {...args}
      items={[
        "General Details",
        "Documents",
        "Bank Details",
        "Loans",
        "Savings",
      ]}
    />
  );
};

export const Default = Template.bind({});
