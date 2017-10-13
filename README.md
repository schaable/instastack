# 8. Concurrency

 - Adding CPUs, RAM, and other resources (virtual or physical) to a single monolithic application is called vertical scaling.

 - Adding more processes and then distributing the load of your application
among those processes is called horizontal scaling.

 - Twelve-factor apps use horizontal scaling. The share-nothing, horizontally partitionable nature of twelve-factor app processes means that adding more concurrency is a simple and reliable operation.

### Notes

 - Node limited scalability:
    - It’s single-threaded, so it can’t automatically take advantage of additional CPU cores.
    - Hard memory limit of about 1.5 GB, so it also cannot automatically take advantage of additional memory.