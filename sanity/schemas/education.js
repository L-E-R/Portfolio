export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
      {
        name: "institution",
        title: "Institution",
        type: "string"
      },
      {
        name: "program",
        title: "Program",
        type: "string",
      },
      {
        name: "dateStarted",
        title: "Start Date",
        type: "date"
      },
      {
        name: "dateEnded",
        title: "End Date",
        type: "date"
      },
      {
        name: "summary",
        title: "Summary",
        type: "string"
      }
    ]
  }
  