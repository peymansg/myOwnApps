export const ReturnBook = () => {
  return (
    <div className="col-xs-6 col-ms-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
          width="151"
          height="233"
          alt="Book"
        />
        <h6 mt-2> Book</h6>
        <p>Luv2code</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
