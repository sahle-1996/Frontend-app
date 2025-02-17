import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-6 flex flex-col relative shadow-lg"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer hover:text-red-800 transition-colors"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-2 bg-red-300 rounded-lg text-white font-semibold text-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-600 text-sm font-medium">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-3 my-2">
          <PiBookOpenTextLight className="text-red-300 text-3xl" />
          <h2 className="my-1 text-lg font-semibold">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-3 my-2">
          <BiUserCircle className="text-red-300 text-3xl" />
          <h2 className="my-1 text-lg font-semibold">{book.author}</h2>
        </div>
        <p className="mt-4 text-gray-700 text-base">
          Anything You want to show
        </p>
        <p className="my-2 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
