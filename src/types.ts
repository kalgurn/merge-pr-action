export type RepoPayload = {
  token: string
  owner: string
  repo: string
  pull_number: number
  merge_method?: 'merge' | 'squash' | 'rebase' | undefined
  commit_title?: string | undefined
  commit_message?: string | undefined
}
