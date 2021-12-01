import {getOctokit} from '@actions/github'
import {RepoPayload} from './types'
export async function merge(payload: RepoPayload): Promise<string> {
  return new Promise(async resolve => {
    const octokit = getOctokit(payload.token)

    await octokit.rest.pulls.merge({
      owner: payload.owner,
      repo: payload.repo,
      pull_number: payload.pull_number,
      merge_method: payload.merge_method,
      commit_title: payload.commit_title,
      commit_message: payload.commit_message
    })

    setTimeout(() => resolve('done!'))
  })
}
