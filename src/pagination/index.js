import React from "react";
import PropTypes from "prop-types";
const Pagination = ({
  page = 1,
  setPage,
  totalPages = 1,
  first = "First",
  last = "Last",
  next = "Next",
  previous = "Previous",
}) => {
  page = page <= 0 ? 1 : page;
  totalPages = totalPages <= 0 ? 1 : totalPages;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination react-bootstrap-table-pagination justify-content-end">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            disabled={page === 1}
            onClick={() => setPage(1)}
          >
            {first}
          </button>
        </li>
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            {previous}
          </button>
        </li>
        <li className={`page-item ${page === 1 ? "active" : ""}`}>
          <button
            className="page-link"
            onClick={() => {
              page === 1
                ? setPage(1)
                : page === totalPages && totalPages !== 2
                ? setPage(page - 2)
                : setPage(page - 1);
            }}
          >
            {page === 1
              ? page
              : page === totalPages && totalPages !== 2
              ? page - 2
              : page - 1}
          </button>
        </li>
        {totalPages > 1 && (
          <li
            className={`page-item ${
              page === 1
                ? ""
                : totalPages === 2 && page === totalPages
                ? "active"
                : page === totalPages
                ? ""
                : "active"
            }`}
          >
            <button
              className="page-link"
              onClick={() => {
                page === 1
                  ? setPage(2)
                  : page === totalPages && totalPages !== 2
                  ? setPage(page - 1)
                  : setPage(page);
              }}
            >
              {page === 1
                ? 2
                : page === totalPages && totalPages !== 2
                ? page - 1
                : page}
            </button>
          </li>
        )}
        {totalPages > 2 && (
          <li className={`page-item ${page === totalPages ? "active" : ""}`}>
            <button
              className="page-link"
              onClick={() => {
                page === 1
                  ? setPage(3)
                  : page === totalPages
                  ? setPage(page)
                  : setPage(page + 1);
              }}
            >
              {page === 1 ? 3 : page === totalPages ? page : page + 1}
            </button>
          </li>
        )}
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            {next}
          </button>
        </li>
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
          >
            {last}
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  first: PropTypes.string,
  last: PropTypes.string,
  next: PropTypes.string,
  previous: PropTypes.string,
};

export default Pagination;
