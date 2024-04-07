------------------using mongodb database deployed as statefulset--------------------------------

Step 1 : running the backend part (congig-map + deployment + service)
         (execution of the configmap file first is mandatory because it holds the configuration settings of your application)
Step 2 : running the frontend part (deployment + service)
Step 3 : running the monogdb-pvc (Persistent Volume Claim) file
Step 4 : running the mongodb-deployment-stsatefulset file
Step 5 : running the mongodb-secret file 
Step 6 : running the mongodb-headless-service file 

--------------------------------------------------------------------------------------------------

-> If somehow pods of the database are deleted then there is no loss of the data, new pods are created but the name remains the same that is assigned by the headless service 