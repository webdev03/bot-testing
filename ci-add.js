console.log(process.env.GH_ISSUE_COMMENT);
if (process.env.GH_ISSUE_COMMENT.startsWith("ADD: ") && process.env.GH_ISSUE_COMMENT.endsWith(" ")) {
  console.log("wow!")
}
