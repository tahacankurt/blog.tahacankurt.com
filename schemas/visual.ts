import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'visual',
  title: 'Visuals (Videos & Photos)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'myTags',
      title: 'Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'myTags',

      },
    }),
  ],
});
