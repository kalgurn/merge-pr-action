[![build-test](https://github.com/kalgurn/merge-action/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/kalgurn/merge-action/actions/workflows/test.yml)

# Merge PR action

This action performs a pull request merge in the target repository.

# Usage

```yaml
on:
  push:
    branches:
      - 'release/*'
jobs:
  merge-pr-action:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: kalgurn/merge-pr-action@1.0.0
        with:
          token: ${{ github.token }}
          owner: ${{ github.owner }}
          repo: ${{ github.repository }}
          pull_number: ${{ github.pull_number }}
```

# Input parameters
```yaml
token:
    required: true
    description: 'GitHub authentication token, can be PAT or Application JWT token'
  owner:
    required: true
    description: 'Repository owner/organization name'
  repo:
    required: true
    description: 'Repository name'
  pull_number:
    required: true
    description: 'Number of Pull  Request'
  merge_method:
    required: false
    description: 'Merge method to use. Possible values are merge, squash or rebase. Default is merge.'
    default: 'merge'
  commit_title:
    required: false
    description: 'Title for the automatic commit message.'
  commit_message:
    required: false
    description: 'Extra detail to append to automatic commit message.'
```