// sanity/schemas/work.ts
export default {
  name: 'work',
  title: 'Selected Work',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag / Category',
      type: 'string',
      description: 'Contoh: Legal Opinion atau Moot Court',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Contoh: National Legal Opinion Competition',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Penjelasan singkat tentang karya atau pencapaian.',
    },
    {
      name: 'image',
      title: 'Certificate / Documentation',
      type: 'image',
      options: { hotspot: true },
    }
  ],
}