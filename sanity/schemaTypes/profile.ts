// sanity/schemaTypes/profile.ts
export default {
  name: 'profile',
  title: 'Profile & Settings',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      description: 'Contoh: Aliya Maysandra',
    },
    {
      name: 'profileImage',
      title: 'Hero Profile Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto profesional untuk bagian kanan atas layar (Hero Section).',
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'Contoh: Undergraduate Law Student',
    },
    {
      name: 'keywords',
      title: 'Keywords / Focus Areas',
      type: 'string',
      description: 'Contoh: Legal research, legal writing, dsb.',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    },
    // Statistik (Cards)
    { name: 'gpa', title: 'GPA Stat', type: 'string', description: 'Contoh: 3.90' },
    { name: 'statTwo', title: 'Statistik Kedua', type: 'string', description: 'Contoh: 3rd (Legal Opinion)' },
    { name: 'statTwoLabel', title: 'Label Statistik Kedua', type: 'string', description: 'Contoh: Legal Opinion' },
    { name: 'statThree', title: 'Statistik Ketiga', type: 'string', description: 'Contoh: 17' },
    { name: 'statThreeLabel', title: 'Label Statistik Ketiga', type: 'string', description: 'Contoh: of 94 countries' },
    { name: 'committee', title: 'Committee Led', type: 'string', description: 'Contoh: 44' },
    // Profile Section
    { name: 'profileTitle', title: 'Profile Section Title', type: 'string' },
    { name: 'profileDescription', title: 'Profile Section Description', type: 'text' },
    // Kontak
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'linkedin', title: 'LinkedIn Username/URL', type: 'string' },
  ],
}