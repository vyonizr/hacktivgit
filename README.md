# hacktivgit

## List of routes

| Route | HTTP | Header(s) | Params | Body | Description |
| ----- | ---- | --------- | --------- | ---- | ----------- |
| `api/repos` | GET | `Authorization: token <your_github_token>` | `none` | `none` | Get all your repositories info (**Requires authentication**) |
| `api/repos` | POST | `Authorization: token <your_github_token>` | `none` | `name:String`, `description:String` | Create a repository (**Requires authentication**) |
| `api/repos/username/:username` | GET | `Authorization: token <your_github_token>` | `username` | `none` | Find someone's repo by username |
| `api/repos/starred` | GET | `Authorization: token <your_github_token>` | `none` | `none` | Get repos you have starred (**Requires authentication**) |
| `api/repos/starred/search?q=<repo_name_or_description>` | GET | `Authorization: token <your_github_token>` | `none` | `none` | Search your starred repositories by its name or description (**Requires authentication**) |
| `api/repos/:owner/:repo` | PUT | `Authorization: token <your_github_token>` | `owner`, `repo` | `none` | Star a repo (**Requires authentication**) |
| `api/repos/:owner/:repo` | DELETE | `Authorization: token <your_github_token>` | `owner`, `repo` | `none` | Unstar a repo (**Requires authentication**) |

## Usage

Make sure you have Node.js and npm installed on your computer, then run this command:

``` shell
npm install
```

Rename the file `.env.example` to `.env` and paste your_github_token right after `GITHUB_TOKEN=`. After that, run:

``` shell
npm run dev
```

Access the API via `http://localhost:4000/`