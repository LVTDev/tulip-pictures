export type Movie = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pressKit: any
_createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    categories: Category[],
    description: string,
    director: string,
    movieLength: string,
    pais: string,
    poster: { _type: string, alt: string, asset: [] },       
    publishedAt: string,
    slug: { _type: 'slug', current: 'bird' },
    sortPosition: number,
    title: string,
    year: number
    index ?: number
    distribucionProduccion: string
    proximosEstrenos ?: boolean
    fechaEstreno?: Date
    enlaceTrailer?: string
    pressKitURL?: string
    imagenes?: []
    produccionEmpresas?:{
      name: string
      role?: string
    } []
    reconocimientos?:{
      festival: string
      premio?: string
    } []
}

type Category = {
    _id: string
    title: string
}