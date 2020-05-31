import React from "react";
import "./pagination.css";

const pagination = ({ totalPosts, postPerPage, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav aria-label="Page navigation example" className="navPagination">
            <ul class="pagination">
                {
                    pageNumber.map((item) => {
                        return <li class="page-item">
                            <a class="page-link" className="pagelink" onClick={() => paginate(item)}>{item}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default pagination;