import { VideoIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const movieType = defineType({
  name: "pelicula",
  title: "Pelicula",
  type: "document",
  icon: VideoIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "poster",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),

    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "director",
      type: "string",
    }),
    defineField({
      name: "categories",
      type: "array",
      //   of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "year",
      type: "number",
    }),
    defineField({
      name: "pais",
      type: "string",
    }),
    defineField({
      name: "movieLength",
      type: "string",
    }),
    defineField({
      name: "distribucionProduccion",
      type: "string",
      title: "Distribucion / Produccion",
      options: {
        list: ["distribucion", "produccion", "ninguno"],
      },
    }),
    defineField({
      name: "sortPosition",
      type: "number",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    // defineField({
    //   name: "body",
    //   type: "blockContent",
    // }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
