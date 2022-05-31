import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  // ** Used use state to add React state to function components.
  const { posts } = blogs;
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const startValue = (Number(currentPage) - 1) * Number(rowsPerPage);

  const currentPaginationData = posts.slice(
    startValue,
    rowsPerPage * currentPage
  );
  //  **
  // debugger;

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={posts.length}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={setCurrentPage}
        onPageSizeOptionChange={setRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
