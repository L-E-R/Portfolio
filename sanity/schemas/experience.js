export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string"
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: { 
        hotspot: true
      },
    },
    {
      name: "compay",
      title: "Company",
      type: "string"
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
      name: "isCurrentlyWorkingHere",
      title: "Current Position",
      type: "boolean"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: { 
            type: "skill"
          }
        }
      ]
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    }
  ]
}
