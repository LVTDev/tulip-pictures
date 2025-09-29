import {PackageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const premioType = defineType({
  name: 'premio',
  title: 'Premio',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
       defineField({
      name: "Imagen",
      type: "image",
    
    }),

  ],
})
