import { Link, useParams } from "react-router-dom";
import { findRepo } from "../fixtures/data";

export function CommitListPage() {
  const { repoId } = useParams();
  const repo = repoId ? findRepo(repoId) : undefined;

  if (!repo) {
    return <div className="page">Repository not found.</div>;
  }

  return (
    <div className="page">
      <h1>
        Commits · {repo.owner}/{repo.name}
      </h1>
      <ul className="commit-list">
        {repo.commits.map((commit) => (
          <li key={commit.sha} className="commit-list-item">
            <Link
              to={`/${repo.owner}/${repo.id}/commit/${commit.sha}`}
              className="commit-message"
            >
              {commit.message}
            </Link>
            <div className="commit-meta">
              <span className="commit-author">{commit.author}</span>
              {" committed on "}
              <span className="commit-date">
                {new Date(commit.date).toLocaleDateString()}
              </span>
              {" · "}
              <code className="commit-sha">{commit.sha.slice(0, 7)}</code>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
