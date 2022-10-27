export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
      {
        name: "avatar",
        title: "Avatar",
        type: "image",
        options: { 
          hotspot: true
        },
      },
      {
        name: "name",
        title: "Name",
        type: "string"
      },
      {
        name: "profession",
        title: "Profession",
        type: "string"
      },
      {
        name: "about",
        title: "About",
        type: "string"
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
        name: "social",
        title: "Social",
        type: "array",
        of: [
          {
            type: "reference",
            to: { 
              type: "social"
            }
          }
        ]
      },
      {
        name: "experience",
        title: "Experience",
        type: "array",
        of: [
          {
            type: "reference",
            to: { 
              type: "experience"
            }
          }
        ]
      },
      {
        name: "education",
        title: "Education",
        type: "array",
        of: [
          {
            type: "reference",
            to: { 
              type: "education"
            }
          }
        ]
      }
    ]
  }
  