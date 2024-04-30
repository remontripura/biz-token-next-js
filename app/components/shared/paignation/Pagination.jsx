"use client"

import { useState } from "react";

const Pagination = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="mx-1 px-3 py-1 bg-gray-200"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`mx-1 px-3 py-1 ${
                currentPage === pageNumber + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => paginate(pageNumber + 1)}
            >
              {pageNumber + 1}
            </button>
          )
        )}
        <button
          className="mx-1 px-3 py-1 bg-gray-200"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
