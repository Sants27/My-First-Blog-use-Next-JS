import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      type: 'select',
      name: 'role',
      options: [
        { label: 'admin', value: 'admin' },
        { label: 'user', value: 'user' },
      ],
      defaultValue : "user"
    }
    // Email added by default
    // Add more fields as needed
  ],
}
