import { NavLink, useParams } from "react-router-dom";
import { findRepo } from "../fixtures/data";
import { FileTree } from "../components/FileTree";

export function RepoOverviewPage() {
  const { repoId } = useParams();
  const repo = repoId ? findRepo(repoId) : undefined;

  if (!repo) {
    return <div className="page">Repository not found.</div>;
  }

  return (
    <div className="page">
      <h1>
        {repo.owner}/{repo.name}
      </h1>
      <p className="repo-description">{repo.description}</p>
      <nav className="repo-nav">
        <NavLink to={`/${repo.owner}/${repo.id}`} end>
          Code
        </NavLink>
        <NavLink to={`/${repo.owner}/${repo.id}/commits`}>Commits</NavLink>
      </nav>
      <h2>Files</h2>
      <FileTree repo={repo} nodes={repo.tree} basePath="" />
      <h2>README.md</h2>
      <pre className="readme">{repo.readme}</pre>
    </div>
  );
}
