# 4. Backing services

 - Any service on which your application relies for its functionality.

 - Datastores, queue/message systems, caching systems, metric gathering services, SMTP, file storage...

 - Treat backing services as bound resources, accessed via a URL/credentials stored in the config. This allows to attach and detach backing services without the need to re-deploy the app.

## Notes

 - If the resource is local to your environment, is it still a backing service?
