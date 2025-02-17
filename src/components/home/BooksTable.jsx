import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books, onDelete }) => {
  const handleDeleteClick = (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      onDelete(bookId);
    }
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 py-2 text-left text-sm font-semibold text-gray-600">
              No
            </th>
            <th className="border-b-2 border-gray-300 py-2 text-left text-sm font-semibold text-gray-600">
              Title
            </th>
            <th className="border-b-2 border-gray-300 py-2 text-left text-sm font-semibold text-gray-600 max-md:hidden">
              Author
            </th>
            <th className="border-b-2 border-gray-300 py-2 text-left text-sm font-semibold text-gray-600 max-md:hidden">
              Publish Year
            </th>
            <th className="border-b-2 border-gray-300 py-2 text-left text-sm font-semibold text-gray-600">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="hover:bg-gray-100">
              <td className="border-b border-gray-200 py-3 text-center text-sm text-gray-700">
                {index + 1}
              </td>
              <td className="border-b border-gray-200 py-3 text-center text-sm text-gray-700">
                {book.title}
              </td>
              <td className="border-b border-gray-200 py-3 text-center text-sm text-gray-700 max-md:hidden">
                {book.author}
              </td>
              <td className="border-b border-gray-200 py-3 text-center text-sm text-gray-700 max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border-b border-gray-200 py-3 text-center">
                <div className="flex justify-center gap-x-4">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="text-green-600 hover:text-green-800"
                  >
                    <BsInfoCircle className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    <AiOutlineEdit className="text-xl" />
                  </Link>
                  <button
                    onClick={() => handleDeleteClick(book._id)}
                    className="text-red-600 hover:text-red-800 transition-all ease-in-out duration-300"
                  >
                    <MdOutlineDelete className="text-xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
