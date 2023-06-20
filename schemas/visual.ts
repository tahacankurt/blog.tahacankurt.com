import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'visual',
  title: 'Visuals (Videos & Photos)',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField(
      {
        name: 'order',
        title: 'Order',
        type: 'number',
      },
    ),
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
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [
        { field: 'releaseDate', direction: 'asc' },
      ],
    },
    {
      title: 'Popularity',
      name: 'popularityDesc',
      by: [
        { field: 'popularity', direction: 'desc' },
      ],
    },
  ],
});
