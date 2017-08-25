<<<<<<< e7276335b98bcf26cfef10dc620bf713d1c43565
# 2. Dependencies

 - Explicitly declare and isolate dependencies.

    - All dependencies and their versions should be declared in a manifest file (package.json, Gemfile, etc).

    - Then a command is run (usually during the deployment process) to download the right versions and put them in place.

 - Never rely on the existence of system wide packages or tools.

## Notes

 - Avoids the issue of moving a legacy system to a new server.

 - Helps narrowing the gap between environments.

 - Makes onboarding new developers easy (just a new deploy).
=======
# 1. Codebase

 - A twelve-factor app is always tracked in a version control system. Moreover, all your application code lives in a *single* repository.

 - If you have multiple codebases, then you have a distributed system with multiple apps talking to each other, and you should treat them as separate apps with their own repos (and each one can comply with the twelve-factor).

 - Having multiple apps sharing code is a violation of the twelve-factor. The solution is to factor shared code into libraries and include them through the dependency manager.

 - A deploy is a running instance of the app. There will be many deploys of the app: development, staging, production. The codebase is the same for all the deploys, although each one could use a different version.

## Violations

 - Modifying production (a deploy instance) by hand.
 - An app with a desktop and mobile version, both using the same API. Tracked in one repo.
>>>>>>> Add factor key points
