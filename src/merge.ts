import {RepoPayload} from './types'
import {getOctokit} from '@actions/github'
import {info, setFailed} from '@actions/core'
export async function merge(payload: RepoPayload): Promise<string> {
  return new Promise(async resolve => {
    const octokit = getOctokit(payload.token)
    if (payload.test_mode) {
      info("Testing mode on, no action will be executed")
      process.exit()
    }
    try {
      await octokit.rest.pulls.merge({
        owner: payload.owner,
        repo: payload.repo,
        pull_number: payload.pull_number,
        merge_method: payload.merge_method,
        commit_title: payload.commit_title,
        commit_message: payload.commit_message
      })
    } catch (e) {
      setFailed(
        `Failed to ${payload.merge_method} the PR #${payload.pull_number} at ${payload.owner}/${payload.repo}\n${e}`
      )
      process.exit(1)
    }

    setTimeout(() => resolve('done!'))
  })
}
