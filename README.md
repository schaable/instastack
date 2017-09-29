# 6. Processes

 - The app is executed as one or more processes.

 - Twelve-factor processes are stateless<sup>[1]</sup> and share-nothing.

 - Provides robustness and better scalability.

# Violations

 - Sticky sessions.

 - Using the file system to persist data.


[1] All long-lasting state must be provided by backing services.
