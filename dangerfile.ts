import { message, danger } from "danger";

const createList = (prefix: string) => (items: string[]) => {
  return `${prefix}\n- ${items.join("\n- ")}`;
};

message(createList("Created files in this PR:")(danger.git.created_files));
message(createList("Changed files in this PR:")(danger.git.modified_files));
message(createList("Deleted files in this PR:")(danger.git.deleted_files));
