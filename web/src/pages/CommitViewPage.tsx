import { useParams } from "react-router-dom";
import { findRepo } from "../fixtures/data";

export function CommitViewPage() {
  const { repoId, sha } = useParams();
  const repo = repoId ? findRepo(repoId) : undefined;
  const commit = repo?.commits.find((c) => c.sha === sha);

  if (!repo || !commit) {
    return <div className="page">Commit not found.</div>;
  }

  return (
    <div className="page">
      <h1>{commit.message}</h1>
      <div className="commit-meta">
        <span className="commit-author">{commit.author}</span>
        {" committed on "}
        <span className="commit-date">
          {new Date(commit.date).toLocaleDateString()}
        </span>
        {" · "}
        <code className="commit-sha">{commit.sha}</code>
      </div>
      <pre className="diff">{commit.diff}</pre>
    </div>
  );
}
