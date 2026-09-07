// Static fixture data for the Buhtig UI-only spike.
// No real Git storage or backend — everything here is mocked.

export interface FileNode {
  name: string;
  path: string;
  type: "file" | "dir";
  children?: FileNode[];
  content?: string;
  language?: string;
}

export interface Commit {
  sha: string;
  message: string;
  author: string;
  date: string;
  diff: string;
}

export interface Repo {
  id: string;
  name: string;
  owner: string;
  description: string;
  defaultBranch: string;
  readme: string;
  tree: FileNode[];
  commits: Commit[];
}

const buhtigTree: FileNode[] = [
  {
    name: "src",
    path: "src",
    type: "dir",
    children: [
      {
        name: "index.ts",
        path: "src/index.ts",
        type: "file",
        language: "ts",
        content: `export function main() {\n  console.log("Hello, buhtig!");\n}\n\nmain();\n`,
      },
      {
        name: "repo.ts",
        path: "src/repo.ts",
        type: "file",
        language: "ts",
        content: `export interface Repository {\n  name: string;\n  description: string;\n}\n`,
      },
    ],
  },
  {
    name: "README.md",
    path: "README.md",
    type: "file",
    language: "md",
    content: `# buhtig\n\nA small replica of GitHub.com. UI only, for now.\n`,
  },
  {
    name: "package.json",
    path: "package.json",
    type: "file",
    language: "json",
    content: `{\n  "name": "buhtig",\n  "version": "0.1.0"\n}\n`,
  },
];

const octoTree: FileNode[] = [
  {
    name: "lib",
    path: "lib",
    type: "dir",
    children: [
      {
        name: "octo.rb",
        path: "lib/octo.rb",
        type: "file",
        language: "ruby",
        content: `class Octo\n  def initialize(name)\n    @name = name\n  end\nend\n`,
      },
    ],
  },
  {
    name: "README.md",
    path: "README.md",
    type: "file",
    language: "md",
    content: `# octo-widgets\n\nA collection of widgets for octopi.\n`,
  },
];

export const repos: Repo[] = [
  {
    id: "buhtig",
    name: "buhtig",
    owner: "lukehoban",
    description: "A small replica of GitHub.com — UI only, for now.",
    defaultBranch: "main",
    readme: `# buhtig\n\nA small replica of GitHub.com. Just the UI for now — repos, commits, and a file browser, backed by fixture data.\n`,
    tree: buhtigTree,
    commits: [
      {
        sha: "5d3f6ae9",
        message: "Update project goal and refine responsibilities",
        author: "lukehoban",
        date: "2026-08-30T10:12:00Z",
        diff: `diff --git a/POLICY.md b/POLICY.md\n@@ -1,5 +1,7 @@\n # Project Goal\n\n-Build a small replica of GitHub.com.\n+Build a small replica of GitHub.com. Just the UI for now. Just Git storage\n+pieces (repos, commits, file browser).\n`,
      },
      {
        sha: "191d457a",
        message: "Add Repo Agent starter policy",
        author: "lukehoban",
        date: "2026-08-20T09:03:00Z",
        diff: `diff --git a/POLICY.md b/POLICY.md\nnew file mode 100644\n@@ -0,0 +1,20 @@\n+# Project Goal\n+...\n`,
      },
      {
        sha: "450451c1",
        message: "Initial commit",
        author: "lukehoban",
        date: "2026-08-01T08:00:00Z",
        diff: `diff --git a/README.md b/README.md\nnew file mode 100644\n@@ -0,0 +1,1 @@\n+# buhtig\n`,
      },
    ],
  },
  {
    id: "octo-widgets",
    name: "octo-widgets",
    owner: "lukehoban",
    description: "A collection of widgets for octopi.",
    defaultBranch: "main",
    readme: `# octo-widgets\n\nA collection of widgets for octopi. Sample fixture repo for the UI spike.\n`,
    tree: octoTree,
    commits: [
      {
        sha: "aa11bb22",
        message: "Add Octo widget class",
        author: "octocat",
        date: "2026-07-15T14:22:00Z",
        diff: `diff --git a/lib/octo.rb b/lib/octo.rb\nnew file mode 100644\n@@ -0,0 +1,4 @@\n+class Octo\n+  def initialize(name)\n+    @name = name\n+  end\n+end\n`,
      },
      {
        sha: "cc33dd44",
        message: "Initial commit",
        author: "octocat",
        date: "2026-07-01T09:00:00Z",
        diff: `diff --git a/README.md b/README.md\nnew file mode 100644\n@@ -0,0 +1,1 @@\n+# octo-widgets\n`,
      },
    ],
  },
];

export function findRepo(id: string): Repo | undefined {
  return repos.find((r) => r.id === id);
}

export function findFile(tree: FileNode[], path: string): FileNode | undefined {
  for (const node of tree) {
    if (node.path === path) return node;
    if (node.children) {
      const found = findFile(node.children, path);
      if (found) return found;
    }
  }
  return undefined;
}
