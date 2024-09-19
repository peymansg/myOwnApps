import { useEffect, useState } from "react";
import BookModel from "../../modles/BookModel";
import { json } from "stream/consumers";
import { error } from "console";
import { SearchBook } from "../../layouts/searchBookPage/components/SearchBook";

export const SearchBookText = () => {
  const [httpError, setHttpError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBook] = useState<BookModel[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/api/books";
      const url = `${baseUrl} + "?page=0&size=9"`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }

      const jasonUrl = await response.json();
      const bookData = jasonUrl._embedded.books;

      const loadedBooks: BookModel[] = [];
      for (const key of bookData) {
        loadedBooks.push({
          id: bookData[key].id,
          title: bookData[key].title,
          author: bookData[key].author,
          description: bookData[key].description,
          copies: bookData[key].copies,
          copiesAvailable: bookData[key].copiesAvailable,
          category: bookData[key].category,
          img: bookData[key].img,
        });
      }
      setBook(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div>
          <div className="row mt-5">
            <div className="col-6 ">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="search"
                  aria-labelledby="search"
                />
                <button className="btn btn-outline-success">Search</button>
              </div>
            </div>
            <div className="col-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenueButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Front End
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Back End
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DevOps
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h5>Number of results: (22)</h5>
          <p>1 to 5 of 22 items:</p>
          {books.map((book) => (
            <SearchBook book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
