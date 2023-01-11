import { danger, message, warn } from "danger";

const createList = (prefix) => (items) => {
  return `${prefix}<br>- ${items.join("<br>- ")}`;
};

const allFiles = [
  ...danger.git.created_files,
  ...danger.git.modified_files,
  ...danger.git.deleted_files,
];
const nonMdFiles = allFiles.filter((file) => !file.endsWith(".md"));

if (nonMdFiles.length > 0) {
  warn(
    `Looks like you edited some non-md files. Be careful!` +
      nonMdFiles.join(" - ")
  );
}

message(createList("Created files in this PR:")(danger.git.created_files));
message(createList("Changed files in this PR:")(danger.git.modified_files));
message(createList("Deleted files in this PR:")(danger.git.deleted_files));
