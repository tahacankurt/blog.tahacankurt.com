import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary';
import { tags } from 'sanity-plugin-tags';
import schemaTypes from './schemas';
import { dataset, projectId } from './env';

export default defineConfig({
  basePath: '/studio',
  name: 'TAHA_CANKURT_Blog',
  title: 'Taha Cankurt Blog',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), codeInput(), cloudinarySchemaPlugin(), tags({})],
  schema: {
    types: schemaTypes,
  },
});
