export const DOTS = "...";

function usePagination(ipParams) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.

    Here I used custome hook.,Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before.
    Since Hooks are functions, I can pass information between them.
    Here I did the same thing. here i have passed 'ipParams' as argument to the function.
    
  */
  // debugger;
  let noOfPages = Math.ceil(ipParams.totalCount / ipParams.pageSize);
  if (ipParams.currentPage == 1 || ipParams.currentPage == 2) {
    if (ipParams.currentPage == noOfPages) {
      return [1];
    } else {
      return [1, 2, 3, DOTS, noOfPages];
    }
  } else if (
    ipParams.currentPage == noOfPages ||
    ipParams.currentPage == noOfPages - 1
  ) {
    return [1, DOTS, noOfPages - 2, noOfPages - 1, noOfPages];
  } else {
    return [
      1,
      DOTS,
      ipParams.currentPage - 1,
      ipParams.currentPage,
      ipParams.currentPage + 1,
      DOTS,
      noOfPages,
    ];
  }
}

export default usePagination;
