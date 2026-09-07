import { Link } from "react-router-dom";
import { repos } from "../fixtures/data";

export function RepoListPage() {
  return (
    <div className="page">
      <h1>Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="repo-list-item">
            <Link to={`/${repo.owner}/${repo.id}`} className="repo-name">
              {repo.owner}/{repo.name}
            </Link>
            <p className="repo-description">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
