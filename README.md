# creators_backend
Responsible for hosting creators platform backend with nodejs,express mongoose, nodemon and pm2 as a load balancer.

* # Edit .env file 
 set **username = yourusername**  
 set **password = yourpassword**

* # Different folders inside src ?
    src folder hosts the main content of our development, #everything 

    * controller:
        every piece of code we will write will be inside controller, logic to handle frontend events 
    * router:
        router defines the routes for the incomming request using http/2 protocol 
        and serve as a gate way, if want to add new routes edit this file.
    * models:
        home for mongodb database schemas using mongoose ODM
    * security:
        defines the protocol's for authentication and authorzation

* #Different folders inside public
    public folder hosts all the static files and content for the platform 
    