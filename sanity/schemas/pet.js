// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
	title: 'Pet',
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
    title: 'Release date',
    name: 'releaseDate',
    type: 'date'
  }

  ]
}