# 11. Logs

Definition: stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services.

 - A twelve-factor app never concerns itself with routing or storage of its output stream.

 - Processes should write to stdout or stderr.

 - In staging or production, streams are captured by the execution environment and routed to a destination for viewing, gathering metrics and long-term archival.

### Heroku

 - Heroku uses Logplex to collate logs from all the running processes (across all dynos), system components and backing services. Limit 1500 lines.

`heroku logs`
`heroku logs --source app`
`heroku logs --source heroku`
`heroku logs --source app --dyno api`
`heroku logs -n 200`
`heroku logs --tail`
