import { Link, useParams } from "react-router-dom";
import { findRepo, findFile } from "../fixtures/data";

export function FileViewPage() {
  const params = useParams();
  const { repoId } = params;
  const path = params["*"] ?? "";
  const repo = repoId ? findRepo(repoId) : undefined;
  const file = repo ? findFile(repo.tree, path) : undefined;

  if (!repo || !file || file.type !== "file") {
    return <div className="page">File not found.</div>;
  }

  const parts = path.split("/").filter(Boolean);

  return (
    <div className="page">
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
      <pre className={`file-content language-${file.language ?? "text"}`}>
        <code>{file.content}</code>
      </pre>
    </div>
  );
}
