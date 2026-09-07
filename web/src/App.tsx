import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { RepoListPage } from "./pages/RepoListPage";
import { RepoOverviewPage } from "./pages/RepoOverviewPage";
import { CommitListPage } from "./pages/CommitListPage";
import { CommitViewPage } from "./pages/CommitViewPage";
import { FileBrowserPage } from "./pages/FileBrowserPage";
import { FileViewPage } from "./pages/FileViewPage";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="app-title">
          <span className="app-logo" aria-hidden="true">
            b
          </span>
          buhtig
        </Link>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<RepoListPage />} />
          <Route path="/:owner/:repoId" element={<RepoOverviewPage />} />
          <Route path="/:owner/:repoId/commits" element={<CommitListPage />} />
          <Route
            path="/:owner/:repoId/commit/:sha"
            element={<CommitViewPage />}
          />
          <Route
            path="/:owner/:repoId/tree/*"
            element={<FileBrowserPage />}
          />
          <Route path="/:owner/:repoId/blob/*" element={<FileViewPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
