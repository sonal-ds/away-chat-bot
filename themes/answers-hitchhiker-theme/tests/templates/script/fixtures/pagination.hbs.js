ANSWERS.addComponent("Pagination", Object.assign({}, {
  container: "#js-answersPagination",
  onPaginate: (newPageNumber, oldPageNumber, totalPages) => {
    if (window.parentIFrame) {
      const paginateMessage = { action: 'paginate' };
      window.parentIFrame.sendMessage(JSON.stringify(paginateMessage));
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // Safari
    }
  },
    verticalKey: "testKey",
}, {}));
