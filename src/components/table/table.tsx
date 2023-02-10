import { ReactNode } from "react";

type HeaderItem = {
  value: ReactNode;
};

type DataItem = {
  value: ReactNode;
};

export interface TableProps {
  headers?: HeaderItem[];
  data: DataItem[][];
}

export const Table = ({ headers, data, ...props }: TableProps) => {
  return (
    <div className="min-w-[700px] overflow-x-auto">
      <table
        cellPadding={"0"}
        cellSpacing={"0"}
        className="w-full text-left border-collapse"
      >
        <thead>
          <tr className=" border-b border-b-white/10">
            {headers?.map(({ value }, index) => {
              return (
                <th
                  key={index}
                  className="py-[15px] font-semibold text-[#89969f]"
                >
                  {value}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((group, index) => {
            return (
              <tr key={index}>
                {group.map(({ value }, index) => {
                  return (
                    <td key={index} className="py-[15px] text-[#333333]">
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
