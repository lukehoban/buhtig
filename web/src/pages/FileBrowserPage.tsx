import { Link, useParams } from "react-router-dom";
import { findRepo, findFile } from "../fixtures/data";
import type { FileNode } from "../fixtures/data";
import { FileTree } from "../components/FileTree";

function Breadcrumbs({
  repo,
  path,
}: {
  repo: { owner: string; id: string };
  path: string;
}) {
  const parts = path.split("/").filter(Boolean);
  return (
    <nav className="breadcrumbs">
      <Link to={`/${repo.owner}/${repo.id}`}>{repo.id}</Link>
      {parts.map((part, i) => {
        const acc = parts.slice(0, i + 1).join("/");
        const isLast = i === parts.length - 1;
        return (
          <span key={acc}>
            {" / "}
            {isLast ? (
              <span>{part}</span>
            ) : (
              <Link to={`/${repo.owner}/${repo.id}/tree/${acc}`}>{part}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export function FileBrowserPage() {
  const params = useParams();
  const { repoId } = params;
  const path = params["*"] ?? "";
  const repo = repoId ? findRepo(repoId) : undefined;

  if (!repo) {
    return <div className="page">Repository not found.</div>;
  }

  const node: FileNode | undefined = path ? findFile(repo.tree, path) : undefined;
  const children = node?.children ?? (path ? [] : repo.tree);

  return (
    <div className="page">
      <h1>
        {repo.owner}/{repo.name}
      </h1>
      <Breadcrumbs repo={repo} path={path} />
      <FileTree repo={repo} nodes={children} basePath={path} />
    </div>
  );
}
