# 3. Config

 - Everything that vary accross environments.

 - Strict separation of config from code. Don't store config in your repo!

 - Put config in environment variables, each one should be fully orthogonal to other env vars.

## Notes

 - Single place for all the configuration.

 - Why env vars? Easy to change without updating code. Language agnostic.
