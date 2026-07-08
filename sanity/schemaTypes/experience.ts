// sanity/schemas/experience.ts
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'period',
      title: 'Period / Date',
      type: 'string',
      description: 'Contoh: Apr 2026 — Now',
    },
    {
      name: 'company',
      title: 'Company / Organization',
      type: 'string',
      description: 'Contoh: LKBH Universitas Esa Unggul',
    },
    {
      name: 'role',
      title: 'Role / Position',
      type: 'string',
      description: 'Contoh: Legal Admin',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Deskripsi pekerjaan atau tanggung jawab.',
    },
    {
      name: 'image',
      title: 'Hover Image (Dokumentasi)',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto ini akan muncul secara melayang saat baris pengalaman disorot kursor.',
    },
  ],
}