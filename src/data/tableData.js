import { GuestIcon,Fair,SadEmoji,Sad,NewSad,NewFair } from '@/svgs/Icons';

const tableData = [
  {
    id: 1,
    uid: "NS12345",
    icon: <GuestIcon />,
    name: "Emily Johnson",
    days: 15,
    status: "Active",
    startDate: "08/01/25",
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
  chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },
  },

  {
    id: 2,
    uid: "NS12341",
    icon: <GuestIcon />,
    name: "Michael Smith",
    days: 7,
    status: "Pending",
    startDate: "07/20/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },

  {
    id: 3,
    uid: "NS12342",
    icon: <GuestIcon />,
    name: "Olivia Brown",
    days: 30,
    status: "Inactive",
    startDate: "06/10/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },

  {
    id: 4,
    uid: "NS12343",
    icon: <GuestIcon />,
    name: "James Davis",
    days: 12,
    status: "Active",
    startDate: "07/29/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },
  },

  {
    id: 5,
    uid: "NS12344",
    icon: <GuestIcon />,
    name: "Sophia Wilson",
    days: 5,
    status: "Pending",
    startDate: "07/25/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },

  {
    id: 6,
    uid: "NS14346",
    icon: <GuestIcon />,
    name: "Benjamin Moore",
    days: 18,
    status: "Inactive",
    startDate: "06/30/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },

  {
    id: 7,
    uid: "NS02347",
    icon: <GuestIcon />,
    name: "Charlotte Taylor",
    days: 10,
    status: "Active",
    startDate: "07/15/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },

  {
    id: 8,
    uid: "NS12149",
    icon: <GuestIcon />,
    name: "William Anderson",
    days: 22,
    status: "Pending",
    startDate: "07/10/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },

  {
    id: 9,
    uid: "NS10348",
    icon: <GuestIcon />,
    name: "Amelia Thomas",
    days: 17,
    status: "Active",
    startDate: "07/18/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },

  {
    id: 10,
    uid: "NS12346",
    icon: <GuestIcon />,
    name: "Daniel Jackson",
    days: 9,
    status: "Inactive",
    startDate: "06/28/25",
    checkinData: [
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
      {
        entryName: "Feeling good",
        date: "08/01/25",
        emotion: "Sad",
        stressor: "Loneliness"
      },
    ],
    journalsData: [
      {
        entryName: "Feeling good",
        date: "10/12/24",
        timeAdded: "08:15 AM",
      },
      {
        entryName: "Anxious thoughts",
        date: "10/12/24",
        timeAdded: "09:45 AM",
      },
      {
        entryName: "Productive day",
        date: "10/12/24",
        timeAdded: "12:30 PM",
      },
      {
        entryName: "Feeling low",
        date: "10/12/24",
        timeAdded: "03:10 PM",
      },
      {
        entryName: "Family time",
        date: "10/12/24",
        timeAdded: "06:20 PM",
      },
      {
        entryName: "Evening walk",
        date: "10/12/24",
        timeAdded: "07:50 PM",
      },
      {
        entryName: "Reflective thoughts",
        date: "10/12/24",
        timeAdded: "09:00 PM",
      },
      {
        entryName: "Calm night",
        date: "10/12/24",
        timeAdded: "10:25 PM",
      },
    ],
    copyMechanismData: [
      {
        activity: "Deep breathing",
        date: "10/12/24",
        timeAdded: "08:30 AM",
      },
      {
        activity: "Meditation",
        date: "10/12/24",
        timeAdded: "09:15 AM",
      },
      {
        activity: "Going for a walk",
        date: "10/12/24",
        timeAdded: "10:45 AM",
      },
      {
        activity: "Talking to a friend",
        date: "10/12/24",
        timeAdded: "01:00 PM",
      },
      {
        activity: "Writing journal",
        date: "10/12/24",
        timeAdded: "03:20 PM",
      },
      {
        activity: "Listening to music",
        date: "10/12/24",
        timeAdded: "05:00 PM",
      },
      {
        activity: "Watching a movie",
        date: "10/12/24",
        timeAdded: "07:30 PM",
      },
      {
        activity: "Reading a book",
        date: "10/12/24",
        timeAdded: "09:45 PM",
      },
    ],
    chartData: {

    stress: {
      color: "#F97010",
      avg:'4',
      feedback: "Loneliness",
      data: [
        { name: 'A', uv: 6 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    sleep: {
      color: "#00B4D8",
      avg:"5-6 hours",
      feedback: "Good",
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 6 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 1 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 9 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
    mood: {
      color: "#7F45E2",
      avg:"5-6 hours",
      feedback: <SadEmoji />,
      data: [
        { name: 'A', uv: 3 },
        { name: 'B', uv: 5 },
        { name: 'C', uv: 8 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 3 },
        { name: 'E', uv: 8 },
        { name: 'E', uv: 2 },
        { name: 'E', uv: 10 },
      ],
    },
    appetite: {
      color: "#E11D48",
      avg:'Fair',
      feedback: <Fair />,
      data: [
        { name: 'A', uv: 2 },
        { name: 'B', uv: 3 },
        { name: 'C', uv: 4 },
        { name: 'D', uv: 6 },
        { name: 'E', uv: 4 },
        { name: 'E', uv: 6 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 5 },
        { name: 'E', uv: 10 },
      ],
    },
  },

  },
];

export default tableData;
