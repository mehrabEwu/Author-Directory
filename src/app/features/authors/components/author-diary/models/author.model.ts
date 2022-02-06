export class Author {
  _id: string;
  name: string;
  bio: string;
  dateAdded: Date;
  dateModified: Date;
  description: string;
  link: string;
  quoteCount: number;
  slug: string;
  isFav:boolean
  constructor(obj: any) {
    this._id = obj?._id || '';
    this.name = obj?.name || '';
    this.bio = obj?.bio || '';
    this.dateAdded = obj?.dateAdded ? new Date(obj?.dateAdded) : new Date();
    this.dateModified = obj?.dateModified
      ? new Date(obj?.dateModified)
      : new Date();
    this.description = obj?.description || '';
    this.link = obj?.link || '';
    this.quoteCount = obj?.quoteCount ?? 0;
    this.slug = obj?.slug || '';
    this.isFav=obj.isFav || false
  }
}
