import { type SchemaTypeDefinition } from 'sanity'

// 1. Import file menggunakan path sejajar ('./')
import experience from './experience'
import work from './work'
import profile from './profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  // 2. Masukkan ke dalam array types
  types: [profile, experience, work],
}