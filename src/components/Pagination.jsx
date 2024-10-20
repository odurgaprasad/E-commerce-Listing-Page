import React from "react";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1} // Disable if on the first page
        className="p-2 mx-1 border rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages} // Disable if on the last page
        className="p-2 mx-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
