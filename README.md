# 9. Disposability

 - Twelve factor apps can be started or stopped rapidly facilitating fast elastic scaling, rapid deployment of code or config changes, and robustness of production deploys.

 - When shutting down gracefully, worker processes should return jobs to the worker queue so that another process can pick up the job and continue on.

 - When shut down non-gracefully, like a power outage, the job should be automatically passed on to another process after a timeout.
