export type RepoPayload = {
  token: string
  owner: string
  repo: string
  pull_number: number
  merge_method?: 'merge' | 'squash' | 'rebase'
  commit_title?: string 
  commit_message?: string 
}
