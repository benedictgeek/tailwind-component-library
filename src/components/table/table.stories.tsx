import { Meta, Story } from "@storybook/react";
import { Table } from "./table";

const meta: Meta = {
  title: "Table",
  component: Table,
};

export default meta;

const Template: Story = (args) => {
  return (
    <Table
      {...args}
      headers={[
        { value: "S/N" },
        { value: "Name" },
        { value: "Age" },
        { value: "Gender" },
        { value: "Location" },
        { value: "role" },
        { value: "status" },
      ]}
      data={[
        [
          { value: 1 },
          { value: "John Doe" },
          { value: "Male" },
          { value: 28 },
          { value: "New York" },
          { value: "Software Engineer" },
          { value: "Active" },
        ],
        [
          { value: 2 },
          { value: "Jane Doe" },
          { value: "Female" },
          { value: 31 },
          { value: "Los Angeles" },
          { value: "Project Manager" },
          { value: "Active" },
        ],
        [
          { value: 3 },
          { value: "Bob Smith" },
          { value: "Male" },
          { value: 35 },
          { value: "Chicago" },
          { value: "Data Scientist" },
          { value: "Inactive" },
        ],
        [
          { value: 4 },
          { value: "Alice Johnson" },
          { value: "Female" },
          { value: 29 },
          { value: "Houston" },
          { value: "Web Developer" },
          { value: "Active" },
        ],
        [
          { value: 5 },
          { value: "Michael Brown" },
          { value: "Male" },
          { value: 33 },
          { value: "Miami" },
          { value: "UX Designer" },
          { value: "Active" },
        ],
        [
          { value: 6 },
          { value: "Emily Davis" },
          { value: "Female" },
          { value: 25 },
          { value: "Dallas" },
          { value: "Product Manager" },
          { value: "Inactive" },
        ],
        [
          { value: 7 },
          { value: "William Thompson" },
          { value: "Male" },
          { value: 27 },
          { value: "San Francisco" },
          { value: "Quality Assurance" },
          { value: "Active" },
        ],
        [
          { value: 8 },
          { value: "Sarah Smith" },
          { value: "Female" },
          { value: 32 },
          { value: "Seattle" },
          { value: "Software Architect" },
          { value: "Active" },
        ],
        [
          { value: 9 },
          { value: "David Johnson" },
          { value: "Male" },
          { value: 36 },
          { value: "Boston" },
          { value: "DevOps Engineer" },
          { value: "Inactive" },
        ],
        [
          { value: 10 },
          { value: "Jennifer Wilson" },
          { value: "Female" },
          { value: 30 },
          { value: "Denver" },
          { value: "Data Analyst" },
          { value: "Active" },
        ],
      ]}
    />
  );
};

export const Default = Template.bind({});
