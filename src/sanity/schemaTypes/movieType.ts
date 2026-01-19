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
      name: "titleENG",
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
      name: "descriptionENG",
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
        list: [
          "distribucion",
          "produccion",
          "ninguno",
          "produccionDistribucion",
        ],
      },
    }),
    defineField({
      name: "premios",
      type: "array",
      //   of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
      of: [defineArrayMember({ type: "reference", to: { type: "premio" } })],
    }),
    defineField({
      name: "sortPosition",
      type: "number",
    }),
    defineField({
      name: "genero",
      type: "string",
    }),

    defineField({
      name: "enlaceTrailer",
      type: "string",
    }),
    defineField({
      name: "pressKit",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "fechaEstreno",
      type: "date",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "proximosEstrenos",
      type: "boolean",
    }),
    defineField({
      name: "imagenes",
      title: "Imagenes",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "produccionEmpresas",
      title: "Empresas Produccion",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Nombre", type: "string" },
            { name: "role", title: "Role", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "reconocimientos",
      title: "Reconocimientos",
      type: "array",
      // of: [{ type: "image" }],

      of: [
        {
          type: "object",
          fields: [
            { name: "festival", title: "Festival", type: "string" },
            { name: "premio", title: "Premio", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "reconocimientosENG",
      title: "ReconocimientosENG",
      type: "array",
      // of: [{ type: "image" }],

      of: [
        {
          type: "object",
          fields: [
            { name: "festival", title: "Festival", type: "string" },
            { name: "premio", title: "Premio", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "ligaDePrueba",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "teaser",
      type: "boolean",
      initialValue: false,
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
