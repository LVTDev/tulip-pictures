export type Movie = {
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
}

type Category = {
    _id: string
    title: string
}