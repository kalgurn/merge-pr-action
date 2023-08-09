import * as core from '@actions/core'
import {RepoPayload} from './types'
import {merge} from './merge'

async function run(): Promise<void> {
  try {
    const payload: RepoPayload = {
      token: core.getInput('token'),
      owner: core.getInput('owner'),
      repo: core.getInput('repo'),
      pull_number: Number(core.getInput('pull_number')),
      merge_method: core.getInput(
        'merge_method'
      ) as RepoPayload['merge_method'],
      commit_title: core.getInput('commit_title'),
      commit_message: core.getInput('commit_message'),
      test_mode: core.getBooleanInput('test_mode')
    }
    // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.debug(
      `Merging PR #${payload.pull_number} for the ${payload.owner}/${payload.repo}`
    )

    await merge(payload)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
