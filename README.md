# 5. Build, release, run

 - A codebase is transformed into a (non-development) deploy through three stages: Build->Release->Run

 - Build stage: transform which converts the codebase into an executable bundle (compile code, fetch dependencies, etc.)

 - Release stage: combines the build with the deploy's current config.

 - Run stage: runs the app in the execution environment.

 - The three stages should be strictly separated from each other.

 - The build stage can be complex and developers manage it. The run stage, however, should be simple and bullet-proof.

# Discussion

 - Rollback
 