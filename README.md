# 7. Port binding

 - Export your app's services via port binding.

 - Your app doesn't rely on the existence of a web server / container. Instead those dependencies are bundled with your app making your app self contained.

 - Beyond the 12 factor app: a slightly less restrictive guideline is that there must always be
a 1:1 correlation between application and application server.

 - An application developed with exported port binding in mind supports environment-specific port binding without having to change any code.

 - Using this approach means that your app can become a backing service for other apps.