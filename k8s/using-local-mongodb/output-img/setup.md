------------------using mongodb database deployed as deployment --------------------------------

Step 1 : running the backend part (congig-map + deployment + service)
         (execution of the configmap file first is mandatory because it holds the configuration settings of your application)
Step 2 : running the frontend part (deployment + service)
Step 3 : running the database part (mongodb-secret + deployment + service)

--------------------------------------------------------------------------------------------------

Here Database is deployed as deployment in this case : 
-> if somehow the pods of the database crashed or deleted then all our data will be lost.
-> also in case of more than 1 pods, pods have the different data as service randomly forwards the traffic to the pods and these pods are not connected (not synchronized).

Can verify it by deleteing the database pods
