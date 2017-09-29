# 2. Dependencies

 - Explicitly declare and isolate dependencies.

    - All dependencies and their versions should be declared in a manifest file (package.json, Gemfile, etc).

    - Then a command is run (usually during the deployment process) to download the right versions and put them in place.

 - Never rely on the existence of system wide packages or tools.

## Notes

 - Avoids the issue of moving a legacy system to a new server.

 - Helps narrowing the gap between environments.

 - Makes onboarding new developers easy (just a new deploy).

