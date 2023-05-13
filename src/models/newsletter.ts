export type Newsletter = {
  id: number;
  title: string;
  shortContent: string;
  longContent: string;
  createdAt: string;
  author: string;
  tags: string[];
};

export class NewsletterImpl implements Newsletter {
  id: number;
  title: string;
  shortContent: string;
  longContent: string;
  createdAt: string;
  author: string;
  tags: string[] = [];

  constructor({
    id,
    title,
    shortContent,
    longContent,
    createdAt,
    author,
    tags,
  }: Newsletter) {
    this.id = id;
    this.title = title;
    this.shortContent = shortContent;
    this.longContent = longContent;
    this.createdAt = createdAt;
    this.author = author;
    this.tags = tags;
  }
}