async function withLoading(commit: Function, callback: Function) {
  commit("setLoadingStatus", true);
  await callback();
  commit("setLoadingStatus", false);
}

/*====================*/

export default withLoading;
