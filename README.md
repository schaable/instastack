# 10. Dev/prod parity

 - Keep environments as similar as possible.

 - Gaps:
   - An extended period between deployments.
   - Different tools used for each environment.
   - Developers write the code while dev ops do the deploy/testing.

### Tools

 - VM/Container (Vagrant, Virtualbox, Docker) + CM tools (Puppet, Chef, Ansible)

 - `heroku local` (populates environment with .env content!) / Foreman
