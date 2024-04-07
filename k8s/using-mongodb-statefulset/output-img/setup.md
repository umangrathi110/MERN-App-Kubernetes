Running MERN App using Mongodb database deployed as statefulset
---

**Step 1** : Running the backend part (congig-map + deployment + service)
         (execution of the configmap file first is mandatory because it holds the configuration settings of your application)
         
**Step 2** : Running the frontend part (deployment + service**)

**Step 3** : Running the monogdb-pvc (Persistent Volume Claim) file

**Step 4** : Running the mongodb-deployment-stsatefulset file

**Step 5** : Running the mongodb-secret file 

**Step 6** : Running the mongodb-headless-service file 

--------------------------------------------------------------------------------------------------

-> If somehow pods of the database are deleted then there is no loss of the data, new pods are created but the name remains the same that is assigned by the headless service 

**Headless Service**
To write the data on the particular pod by web application we need to pass the DNS  name to the web application and other db pods can refer to this DNS name to clone data and synchronization.

This DNS name is clusterwise unique, this is provided by Headless Service.

Headless service has no IP and neither it can perform load balancing. 
