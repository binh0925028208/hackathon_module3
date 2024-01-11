import "./app.css";
import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import "react-toastify/dist/ReactToastify.css";
import { FilterValue, SorterResult } from "antd/es/table/interface";
// chịu òi, học lại thôi :((
interface DataType {
  id: number;
  name: string;
  desc: string;
}
const express = require("express");
const router = express.Router();

// const dbPath = path.join( "/public/users.json");
const dataBase: DataType[] = [
  {
    id: 2,
    name: "Ervin Howell",
    desc: "âsdasdasdasd",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    desc: "âsdasdasdasd",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    desc: "âsdasdasdasd",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    desc: "âsdasdasdasd",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    desc: "âsdasdasdasd",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    desc: "âsdasdasdasd",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    desc: "âsdasdasdasd",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    desc: "âsdasdasdasd",
  },
];
// router.get("/", (req: any, res: any) => {
//   fs.readFile(dbPath, (err: any, data: any) => {
//     if (err) {
//       res.status(400).json({ msg: "Error" });
//     } else {
//       let dataJson = JSON.parse(data);
//       dataBase.push(dataJson);
//       res.status(200).json(dataJson);
//     }
//   });
// });

const App: React.FC = () => {
  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Desc",
      dataIndex: "desc",
      key: "desc",
      sorter: (a, b) => a.desc.length - b.desc.length,
      sortOrder: sortedInfo.columnKey === "desc" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <>
      <div className="studentList">
        <div className="buttonAdd">
          <button className="addNewUser">Add new</button>
        </div>
        <div>
          <h2>STUDENT LIST</h2>
          <Table
            columns={columns}
            dataSource={dataBase}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default App;
