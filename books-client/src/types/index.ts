export type Book = {
  id: number | "";
  title: string | "";
  publisherName: string | "";
  authorName: string | "";
  imageUrl: string | "";
  price: string | "";
};

export type CardProps = {
  book: Book;
};
