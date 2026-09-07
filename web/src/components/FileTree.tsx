import { Link } from "react-router-dom";
import type { FileNode, Repo } from "../fixtures/data";

export function FileTree({
  repo,
  nodes,
}: {
  repo: Repo;
  nodes: FileNode[];
  basePath: string;
}) {
  return (
    <ul className="file-tree">
      {nodes.map((node) => (
        <li key={node.path} className={`file-tree-item file-tree-${node.type}`}>
          {node.type === "dir" ? (
            <span className="file-tree-dir-name">{node.name}/</span>
          ) : (
            <Link to={`/${repo.owner}/${repo.id}/blob/${node.path}`}>
              {node.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
