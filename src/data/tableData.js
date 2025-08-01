// data/TableData.js

import { GuestIcon } from '@/svgs/Icons';

const tableData = [
  {
    id: 1,
    icon: <GuestIcon />,
    name: "Emily Johnson",
    days: 15,
    status: "Active",
    startDate: "08/01/25",
  },
  {
    id: 2,
    icon: <GuestIcon />,
    name: "Michael Smith",
    days: 7,
    status: "Pending",
    startDate: "07/20/25",
  },
  {
    id: 3,
    icon: <GuestIcon />,
    name: "Olivia Brown",
    days: 30,
    status: "Inactive",
    startDate: "06/10/25",
  },
  {
    id: 4,
    icon: <GuestIcon />,
    name: "James Anderson",
    days: 12,
    status: "Active",
    startDate: "07/29/25",
  },
];

export default tableData;
