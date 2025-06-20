export type Movie = {
_createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    // categories: [ [Object], [Object] ],
    description: string,
    director: string,
    movieLength: string,
    pais: string,
    // poster: { _type: 'image', alt: 'poster bird', asset: [Object] },       
    publishedAt: string,
    slug: { _type: 'slug', current: 'bird' },
    sortPosition: number,
    title: string,
    year: number
}