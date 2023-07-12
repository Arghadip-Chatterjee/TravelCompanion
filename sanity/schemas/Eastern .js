// schemas/pet.js
export default {
    name: 'eastern',
    type: 'document',
    title: 'Eastern',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
  
      {
          title: 'Description',
          name: 'description',
          type: 'text'
      },
  
      {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
  
    {
        title: 'Phone Number',
        name: 'phone',
        type: 'number'
    },

    {
      title: 'URL',
      name: 'Url',
      type: 'url'
    }
  
    ]
  }