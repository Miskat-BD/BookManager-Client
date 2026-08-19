import BookCard from "@/components/BookCard";
import { getBooks } from "@/lib/books";

const BooksPage = async () => {
    const data = await getBooks()
    const books = data.data
    console.log(books);
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-7">
            {
                books.map(book => <BookCard key={book.id} book={book}></BookCard>)
            }
        </div>
    );
};

export default BooksPage;