const questions = [
  {
    "question": "A recent audit revealed that a new network was created in your GCP project. In this network, a GCE instance has an SSH port open to the world. You want to discover this network's origin.\n\nWhat should you do?",
    "options": [
      "Search for Create VM entry in the Stackdriver alerting console",
      "Navigate to the Activity page in the Home section. Set category to Data Access and search for Create VM entry",
      "In the Logging section of the console, specify GCE Network as the logging section. Search for the Create Insert entry",
      "Connect to the GCE instance using project SSH keys. Identify previous logins in system logs, and match these with the project owners list"
    ],
    "answer": [
      "In the Logging section of the console, specify GCE Network as the logging section. Search for the Create Insert entry"
    ],
    "multiple": false
  },
  {
    "question": "You want to make a copy of a production Linux virtual machine in the US-Central region. You want to manage and replace the copy easily if there are changes on the production virtual machine. You will deploy the copy as a new instance in a different project in the US-East region.\n\nWhat steps must you take?",
    "options": [
      "Use the Linux dd and netcat commands to copy and stream the root disk contents to a new virtual machine instance in the US-East region.",
      "Create a snapshot of the root disk and select the snapshot as the root disk when you create a new virtual machine instance in the US-East region.",
      "Create an image file from the root disk with Linux dd command, create a new virtual machine instance in the US-East region",
      "Create a snapshot of the root disk, create an image file in Google Cloud Storage from the snapshot, and create a new virtual machine instance in the US-East region using the image file the root disk."
    ],
    "answer": [
      "Create a snapshot of the root disk, create an image file in Google Cloud Storage from the snapshot, and create a new virtual machine instance in the US-East region using the image file the root disk."
    ],
    "multiple": false
  },
  {
    "question": "Your company runs several databases on a single MySQL instance. They need to take backups of a specific database at regular intervals. The backup activity needs to complete as quickly as possible and cannot be allowed to impact disk performance.\n\nHow should you configure the storage?",
    "options": [
      "Configure a cron job to use the gcloud tool to take regular backups using persistent disk snapshots.",
      "Mount a Local SSD volume as the backup location. After the backup is complete, use gsutil to move the backup to Google Cloud Storage.",
      "Use gcsfise to mount a Google Cloud Storage bucket as a volume directly on the instance and write backups to the mounted location using mysqldump.",
      "Mount additional persistent disk volumes onto each virtual machine (VM) instance in a RAID10 array and use LVM to create snapshots to send to Cloud Storage"
    ],
    "answer": [
      "Mount a Local SSD volume as the backup location. After the backup is complete, use gsutil to move the backup to Google Cloud Storage."
    ],
    "multiple": false
  },
  {
    "question": "You are helping the QA team to roll out a new load-testing tool to test the scalability of your primary cloud services that run on Google Compute Engine with Cloud Bigtable.\n\nWhich three requirements should they include? (Choose three.)",
    "options": [
      "Ensure that the load tests validate the performance of Cloud Bigtable",
      "Create a separate Google Cloud project to use for the load-testing environment",
      "Schedule the load-testing tool to regularly run against the production environment",
      "Ensure all third-party systems your services use is capable of handling high load",
      "Instrument the production services to record every transaction for replay by the load-testing tool",
      "Instrument the load-testing tool and the target services with detailed logging and metrics collection"
    ],
    "answer": [
      "Ensure that the load tests validate the performance of Cloud Bigtable",
      "Create a separate Google Cloud project to use for the load-testing environment",
      "Instrument the load-testing tool and the target services with detailed logging and metrics collection"
    ],
    "multiple": true
  },
  {
    "question": "Your customer is moving their corporate applications to Google Cloud Platform. The security team wants detailed visibility of all projects in the organization. You provision the Google Cloud Resource Manager and set up yourself as the org admin.\n\nWhat Google Cloud Identity and Access Management (Cloud IAM) roles should you give to the security team?",
    "options": [
      "Org viewer, project owner",
      "Org viewer, project viewer",
      "Org admin, project browser",
      "Project owner, network admin"
    ],
    "answer": [
      "Org viewer, project viewer"
    ],
    "multiple": false
  },
  {
    "question": "Your company places a high value on being responsive and meeting customer needs quickly. Their primary business objectives are release speed and agility. You want to reduce the chance of security errors being accidentally introduced.\n\nWhich two actions can you take? (Choose two.)",
    "options": [
      "Ensure every code check-in is peer reviewed by a security SME",
      "Use source code security analyzers as part of the CI/CD pipeline",
      "Ensure you have stubs to unit test all interfaces between components",
      "Enable code signing and a trusted binary repository integrated with your CI/CD pipeline",
      "Run a vulnerability security scanner as part of your continuous-integration /continuous-delivery (CI/CD) pipeline"
    ],
    "answer": [
      "Use source code security analyzers as part of the CI/CD pipeline",
      "Run a vulnerability security scanner as part of your continuous-integration /continuous-delivery (CI/CD) pipeline"
    ],
    "multiple": true
  },
  {
    "question": "You want to enable your running Google Kubernetes Engine cluster to scale as demand for your application changes.\n\nWhat should you do?",
    "options": [
      "Add additional nodes to your Kubernetes Engine cluster using the following command: gcloud container clusters resize CLUSTER_Name ג€\" -size 10",
      "Add a tag to the instances in the cluster with the following command: gcloud compute instances add-tags INSTANCE - -tags enable- autoscaling max-nodes-10",
      "Update the existing Kubernetes Engine cluster with the following command: gcloud alpha container clusters update mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10",
      "Create a new Kubernetes Engine cluster with the following command: gcloud alpha container clusters create mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10 and redeploy your application"
    ],
    "answer": [
      "Update the existing Kubernetes Engine cluster with the following command: gcloud alpha container clusters update mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10"
    ],
    "multiple": false
  },
  {
    "question": "Your marketing department wants to send out a promotional email campaign. The development team wants to minimize direct operation management. They project a wide range of possible customer responses, from 100 to 500,000 click-through per day. The link leads to a simple website that explains the promotion and collects user information and preferences.\n\nWhich infrastructure should you recommend? (Choose two.)",
    "options": [
      "Use Google App Engine to serve the website and Google Cloud Datastore to store user data.",
      "Use a Google Container Engine cluster to serve the website and store data to persistent disk.",
      "Use a managed instance group to serve the website and Google Cloud Bigtable to store user data.",
      "Use a single Compute Engine virtual machine (VM) to host a web server, backend by Google Cloud SQL."
    ],
    "answer": [
      "Use Google App Engine to serve the website and Google Cloud Datastore to store user data.",
      "Use a managed instance group to serve the website and Google Cloud Bigtable to store user data."
    ],
    "multiple": true
  },
  {
    "question": "Your company just finished a rapid lift and shift to Google Compute Engine for your compute needs. You have another 9 months to design and deploy a more cloud-native solution. Specifically, you want a system that is no-ops and auto-scaling.\n\nWhich two compute products should you choose? (Choose two.)",
    "options": [
      "Compute Engine with containers",
      "Google Kubernetes Engine with containers",
      "Google App Engine Standard Environment",
      "Compute Engine with custom instance types",
      "Compute Engine with managed instance groups"
    ],
    "answer": [
      "Google Kubernetes Engine with containers",
      "Google App Engine Standard Environment"
    ],
    "multiple": true
  },
  {
    "question": "One of your primary business objectives is being able to trust the data stored in your application. You want to log all changes to the application data.\n\nHow can you design your logging system to verify authenticity of your logs?",
    "options": [
      "Write the log concurrently in the cloud and on premises",
      "Use a SQL database and limit who can modify the log table",
      "Digitally sign each timestamp and log entry and store the signature",
      "Create a JSON dump of each log entry and store it in Google Cloud Storage"
    ],
    "answer": [
      "Digitally sign each timestamp and log entry and store the signature"
    ],
    "multiple": false
  },
  {
    "question": "Your company has a Google Workspace account and Google Cloud Organization. Some developers in the company have created Google Cloud projects outside of the Google Cloud Organization.\n\nYou want to create an Organization structure that allows developers to create projects, but prevents them from modifying production projects. You want to manage policies for all projects centrally and be able to set more restrictive policies for production projects. You want to minimize disruption to users and developers when business needs change in the future. You want to follow Google-recommended practices. Now should you design the Organization structure?",
    "options": [
      "1. Create a second Google Workspace account and Organization. 2. Grant all developers the Project Creator IAM role on the new Organization. 3. Move the developer projects into the new Organization. 4. Set the policies for all projects on both Organizations. 5. Additionally, set the production policies on the original Organization.",
      "1. Create a folder under the Organization resource named ג€Production.ג€ 2. Grant all developers the Project Creator IAM role on the new Organization. 3. Move the developer projects into the new Organization. 4. Set the policies for all projects on the Organization. 5. Additionally, set the production policies on the ג€Productionג€ folder.",
      "1. Create folders under the Organization resource named ג€Developmentג€ and ג€Production.ג€ 2. Grant all developers the Project Creator IAM role on the ג€Developmentג€ folder. 3. Move the developer projects into the ג€Developmentג€ folder. 4. Set the policies for all projects on the Organization. 5. Additionally, set the production policies on the ג€Productionג€ folder.",
      "1. Designate the Organization for production projects only. 2. Ensure that developers do not have the Project Creator IAM role on the Organization. 3. Create development projects outside of the Organization using the developer Google Workspace accounts. 4. Set the policies for all projects on the Organization. 5. Additionally, set the production policies on the individual production projects."
    ],
    "answer": [
      "1. Create folders under the Organization resource named ג€Developmentג€ and ג€Production.ג€ 2. Grant all developers the Project Creator IAM role on the ג€Developmentג€ folder. 3. Move the developer projects into the ג€Developmentג€ folder. 4. Set the policies for all projects on the Organization. 5. Additionally, set the production policies on the ג€Productionג€ folder."
    ],
    "multiple": false
  },
  {
    "question": "Your company has an application running on Compute Engine that allows users to play their favorite music. There are a fixed number of instances. Files are stored in Cloud Storage, and data is streamed directly to users. Users are reporting that they sometimes need to attempt to play popular songs multiple times before they are successful. You need to improve the performance of the application.\n\nWhat should you do?",
    "options": [
      "1. Mount the Cloud Storage bucket using gcsfuse on all backend Compute Engine instances. 2. Serve music files directly from the backend Compute Engine instance.",
      "1. Create a Cloud Filestore NFS volume and attach it to the backend Compute Engine instances. 2. Download popular songs in Cloud Filestore. 3. Serve music files directly from the backend Compute Engine instance.",
      "1. Copy popular songs into CloudSQL as a blob. 2. Update application code to retrieve data from CloudSQL when Cloud Storage is overloaded.",
      "1. Create a managed instance group with Compute Engine instances. 2. Create a global load balancer and configure it with two backends: ג—‹ Managed instance group ג—‹ Cloud Storage bucket 3. Enable Cloud CDN on the bucket backend."
    ],
    "answer": [
      "1. Create a managed instance group with Compute Engine instances. 2. Create a global load balancer and configure it with two backends: ג—‹ Managed instance group ג—‹ Cloud Storage bucket 3. Enable Cloud CDN on the bucket backend."
    ],
    "multiple": false
  },
  {
    "question": "The operations team in your company wants to save Cloud VPN log events for one year. You need to configure the cloud infrastructure to save the logs.\n\nWhat should you do?",
    "options": [
      "Set up a filter in Cloud Logging and a Cloud Storage bucket as an export target for the logs you want to save.",
      "Enable the Compute Engine API, and then enable logging on the firewall rules that match the traffic you want to save.",
      "Set up a Cloud Logging Dashboard titled Cloud VPN Logs, and then add a chart that queries for the VPN metrics over a one-year time period.",
      "Set up a filter in Cloud Logging and a topic in Pub/Sub to publish the logs."
    ],
    "answer": [
      "Set up a filter in Cloud Logging and a Cloud Storage bucket as an export target for the logs you want to save."
    ],
    "multiple": false
  },
  {
    "question": "You are working with a data warehousing team that performs data analysis. The team needs to process data from external partners, but the data contains personally identifiable information (PII). You need to process and store the data without storing any of the PIIE data.\n\nWhat should you do?",
    "options": [
      "Create a Dataflow pipeline to retrieve the data from the external sources. As part of the pipeline, use the Cloud Data Loss Prevention (Cloud DLP) API to remove any PII data. Store the result in BigQuery.",
      "Create a Dataflow pipeline to retrieve the data from the external sources. As part of the pipeline, store all non-PII data in BigQuery and store all PII data in a Cloud Storage bucket that has a retention policy set.",
      "Ask the external partners to upload all data on Cloud Storage. Configure Bucket Lock for the bucket. Create a Dataflow pipeline to read the data from the bucket. As part of the pipeline, use the Cloud Data Loss Prevention (Cloud DLP) API to remove any PII data. Store the result in BigQuery.",
      "Ask the external partners to import all data in your BigQuery dataset. Create a dataflow pipeline to copy the data into a new table. As part of the Dataflow bucket, skip all data in columns that have PII data"
    ],
    "answer": [
      "Create a Dataflow pipeline to retrieve the data from the external sources. As part of the pipeline, use the Cloud Data Loss Prevention (Cloud DLP) API to remove any PII data. Store the result in BigQuery."
    ],
    "multiple": false
  },
  {
    "question": "You want to allow your operations team to store logs from all the production projects in your Organization, without including logs from other projects. All of the production projects are contained in a folder. You want to ensure that all logs for existing and new production projects are captured automatically.\n\nWhat should you do?",
    "options": [
      "Create an aggregated export on the Production folder. Set the log sink to be a Cloud Storage bucket in an operations project.",
      "Create an aggregated export on the Organization resource. Set the log sink to be a Cloud Storage bucket in an operations project.",
      "Create log exports in the production projects. Set the log sinks to be a Cloud Storage bucket in an operations project.",
      "Create log exports in the production projects. Set the log sinks to be BigQuery datasets in the production projects, and grant IAM access to the operations team to run queries on the datasets."
    ],
    "answer": [
      "Create an aggregated export on the Production folder. Set the log sink to be a Cloud Storage bucket in an operations project."
    ],
    "multiple": false
  },
  {
    "question": "Your company has an application that is running on multiple instances of Compute Engine. It generates 1 TB per day of logs. For compliance reasons, the logs need to be kept for at least two years. The logs need to be available for active query for 30 days. After that, they just need to be retained for audit purposes. You want to implement a storage solution that is compliant, minimizes costs, and follows Google-recommended practices.\n\nWhat should you do?",
    "options": [
      "1. Install a Cloud Logging agent on all instances. 2. Create a sink to export logs into a regional Cloud Storage bucket. 3. Create an Object Lifecycle rule to move files into a Coldline Cloud Storage bucket after one month. 4. Configure a retention policy at the bucket level using bucket lock.",
      "1. Write a daily cron job, running on all instances, that uploads logs into a Cloud Storage bucket. 2. Create a sink to export logs into a regional Cloud Storage bucket. 3. Create an Object Lifecycle rule to move files into a Coldline Cloud Storage bucket after one month.",
      "1. Install a Cloud Logging agent on all instances. 2. Create a sink to export logs into a partitioned BigQuery table. 3. Set a time_partitioning_expiration of 30 days.",
      "1. Create a daily cron job, running on all instances, that uploads logs into a partitioned BigQuery table. 2. Set a time_partitioning_expiration of 30 days."
    ],
    "answer": [
      "1. Install a Cloud Logging agent on all instances. 2. Create a sink to export logs into a regional Cloud Storage bucket. 3. Create an Object Lifecycle rule to move files into a Coldline Cloud Storage bucket after one month. 4. Configure a retention policy at the bucket level using bucket lock."
    ],
    "multiple": false
  },
  {
    "question": "Your company has just recently activated Cloud Identity to manage users. The Google Cloud Organization has been configured as well. The security team needs to secure projects that will be part of the Organization. They want to prohibit IAM users outside the domain from gaining permissions from now on.\n\nWhat should they do?",
    "options": [
      "Configure an organization policy to restrict identities by domain.",
      "Configure an organization policy to block creation of service accounts.",
      "Configure Cloud Scheduler to trigger a Cloud Function every hour that removes all users that don't belong to the Cloud Identity domain from all projects.",
      "Create a technical user (e.g., crawler@yourdomain.com), and give it the project owner role at root organization level. Write a bash script that: ג€¢ Lists all the IAM rules of all projects within the organization. ג€¢ Deletes all users that do not belong to the company domain. Create a Compute Engine instance in a project within the Organization and configure gcloud to be executed with technical user credentials. Configure a cron job that executes the bash script every hour."
    ],
    "answer": [
      "Configure an organization policy to restrict identities by domain."
    ],
    "multiple": false
  },
  {
    "question": "Your company has an application running on Google Cloud that is collecting data from thousands of physical devices that are globally distributed. Data is published to Pub/Sub and streamed in real time into an SSD Cloud Bigtable cluster via a Dataflow pipeline. The operations team informs you that your Cloud Bigtable cluster has a hotspot, and queries are taking longer than expected. You need to resolve the problem and prevent it from happening in the future.\n\nWhat should you do?",
    "options": [
      "Advise your clients to use HBase APIs instead of NodeJS APIs.",
      "Delete records older than 30 days.",
      "Review your RowKey strategy and ensure that keys are evenly spread across the alphabet.",
      "Double the number of nodes you currently have."
    ],
    "answer": [
      "Review your RowKey strategy and ensure that keys are evenly spread across the alphabet."
    ],
    "multiple": false
  },
  {
    "question": "Your company has a Google Cloud project that uses BigQuery for data warehousing. There are some tables that contain personally identifiable information (PII).\n\nOnly the compliance team may access the PII. The other information in the tables must be available to the data science team. You want to minimize cost and the time it takes to assign appropriate access to the tables.\n\nWhat should you do?",
    "options": [
      "From the dataset where you have the source data, create views of tables that you want to share, excluding PII. 2. Assign an appropriate project-level IAM role to the members of the data science team. 3. Assign access controls to the dataset that contains the view.",
      "From the dataset where you have the source data, create materialized views of tables that you want to share, excluding PII. 2. Assign an appropriate project-level IAM role to the members of the data science team. 3. Assign access controls to the dataset that contains the view.",
      "Create a dataset for the data science team. 2. Create views of tables that you want to share, excluding PII. 3. Assign an appropriate project-level IAM role to the members of the data science team. 4. Assign access controls to the dataset that contains the view. 5. Authorize the view to access the source dataset.",
      "Create a dataset for the data science team. 2. Create materialized views of tables that you want to share, excluding PII. 3. Assign an appropriate project-level IAM role to the members of the data science team. 4. Assign access controls to the dataset that contains the view. 5. Authorize the view to access the source dataset."
    ],
    "answer": [
      "Create a dataset for the data science team. 2. Create views of tables that you want to share, excluding PII. 3. Assign an appropriate project-level IAM role to the members of the data science team. 4. Assign access controls to the dataset that contains the view. 5. Authorize the view to access the source dataset."
    ],
    "multiple": false
  },
  {
    "question": "Your operations team currently stores 10 TB of data in an object storage service from a third-party provider. They want to move this data to a Cloud Storage bucket as quickly as possible, following Google-recommended practices. They want to minimize the cost of this data migration.\n\nWhich approach should they use?",
    "options": [
      "Use the gsutil mv command to move the data.",
      "Use the Storage Transfer Service to move the data.",
      "Download the data to a Transfer Appliance, and ship it to Google.",
      "Download the data to the on-premises data center, and upload it to the Cloud Storage bucket."
    ],
    "answer": [
      "Use the Storage Transfer Service to move the data."
    ],
    "multiple": false
  },
  {
    "question": "You have a Compute Engine managed instance group that adds and removes Compute Engine instances from the group in response to the load on your application. The instances have a shutdown script that removes REDIS database entries associated with the instance. You see that many database entries have not been removed, and you suspect that the shutdown script is the problem. You need to ensure that the commands in the shutdown script are run reliably every time an instance is shut down. You create a Cloud Function to remove the database entries.\n\nWhat should you do next?",
    "options": [
      "Modify the shutdown script to wait for 30 seconds before triggering the Cloud Function.",
      "Do not use the Cloud Function. Modify the shutdown script to restart if it has not completed in 30 seconds.",
      "Set up a Cloud Monitoring sink that triggers the Cloud Function after an instance removal log message arrives in Cloud Logging.",
      "Modify the shutdown script to wait for 30 seconds and then publish a message to a Pub/Sub queue."
    ],
    "answer": [
      "Set up a Cloud Monitoring sink that triggers the Cloud Function after an instance removal log message arrives in Cloud Logging."
    ],
    "multiple": false
  },
  {
    "question": "You are managing several projects on Google Cloud and need to interact on a daily basis with BigQuery, Bigtable, and Kubernetes Engine using the gcloud CL tool. You are travelling a lot and work on different workstations during the week. You want to avoid having to manage the gcloud CLI manually.\n\nWhat should you do?",
    "options": [
      "Use Google Cloud Shell in the Google Cloud Console to interact with Google Cloud.",
      "Create a Compute Engine instance and install gcloud on the instance. Connect to this instance via SSH to always use the same gcloud installation when interacting with Google Cloud.",
      "Install gcloud on all of your workstations. Run the command gcloud components auto-update on each workstation",
      "Use a package manager to install gcloud on your workstations instead of installing it manually."
    ],
    "answer": [
      "Use Google Cloud Shell in the Google Cloud Console to interact with Google Cloud."
    ],
    "multiple": false
  },
  {
    "question": "Your company recently acquired a company that has infrastructure in Google Cloud. Each company has its own Google Cloud organization. Each company is using a Shared Virtual Private Cloud (VPC) to provide network connectivity for its applications. Some of the subnets used by both companies overlap. In order for both businesses to integrate, the applications need to have private network connectivity. These applications are not on overlapping subnets. You want to provide connectivity with minimal re-engineering.\n\nWhat should you do?",
    "options": [
      "Set up VPC peering and peer each Shared VPC together.",
      "Migrate the projects from the acquired company into your company's Google Cloud organization. Re-launch the instances in your companies Shared VPC.",
      "Set up a Cloud VPN gateway in each Shared VPC and peer Cloud VPNs.",
      "Configure SSH port forwarding on each application to provide connectivity between applications in the different Shared VPCs."
    ],
    "answer": [
      "Set up a Cloud VPN gateway in each Shared VPC and peer Cloud VPNs."
    ],
    "multiple": false
  },
  {
    "question": "You are managing several internal applications that are deployed on Compute Engine. Business users inform you that an application has become very slow over the past few days. You want to find the underlying cause in order to solve the problem.\n\nWhat should you do first?",
    "options": [
      "Inspect the logs and metrics from the instances in Cloud Logging and Cloud Monitoring.",
      "Change the Compute Engine Instances behind the application to a machine type with more CPU and memory.",
      "Restore a backup of the application database from a time before the application became slow.",
      "Deploy the applications on a managed instance group with autoscaling enabled. Add a load balancer in front of the managed instance group, and have the users connect to the IP of the load balancer."
    ],
    "answer": [
      "Inspect the logs and metrics from the instances in Cloud Logging and Cloud Monitoring."
    ],
    "multiple": false
  },
  {
    "question": "Your company has an application running as a Deployment in a Google Kubernetes Engine (GKE) cluster. When releasing new versions of the application via a rolling deployment, the team has been causing outages. The root cause of the outages is misconfigurations with parameters that are only used in production. You want to put preventive measures for this in the platform to prevent outages.\n\nWhat should you do?",
    "options": [
      "Configure liveness and readiness probes in the Pod specification.",
      "Configure health checks on the managed instance group.",
      "Create a Scheduled Task to check whether the application is available.",
      "Configure an uptime alert in Cloud Monitoring."
    ],
    "answer": [
      "Configure liveness and readiness probes in the Pod specification."
    ],
    "multiple": false
  },
  {
    "question": "Your company uses Google Kubernetes Engine (GKE) as a platform for all workloads. Your company has a single large GKE cluster that contains batch, stateful, and stateless workloads. The GKE cluster is configured with a single node pool with 200 nodes. Your company needs to reduce the cost of this cluster but does not want to compromise availability.\n\nWhat should you do?",
    "options": [
      "Create a second GKE cluster for the batch workloads only. Allocate the 200 original nodes across both clusters.",
      "Configure CPU and memory limits on the namespaces in the cluster. Configure all Pods to have a CPU and memory limits.",
      "Configure a HorizontalPodAutoscaler for all stateless workloads and for all compatible stateful workloads. Configure the cluster to use node auto scaling.",
      "Change the node pool to use preemptible VMs."
    ],
    "answer": [
      "Configure a HorizontalPodAutoscaler for all stateless workloads and for all compatible stateful workloads. Configure the cluster to use node auto scaling."
    ],
    "multiple": false
  },
  {
    "question": "Your company has a Google Cloud project that uses BigQuery for data warehousing on a pay-per-use basis. You want to monitor queries in real time to discover the most costly queries and which users spend the most.\n\nWhat should you do?",
    "options": [
      "1. In the BigQuery dataset that contains all the tables to be queried, add a label for each user that can launch a query. 2. Open the Billing page of the project. 3. Select Reports. 4. Select BigQuery as the product and filter by the user you want to check.",
      "1. Create a Cloud Logging sink to export BigQuery data access logs to BigQuery. 2. Perform a BigQuery query on the generated table to extract the information you need.",
      "1. Create a Cloud Logging sink to export BigQuery data access logs to Cloud Storage. 2. Develop a Dataflow pipeline to compute the cost of queries split by users.",
      "1. Activate billing export into BigQuery. 2. Perform a BigQuery query on the billing table to extract the information you need."
    ],
    "answer": [
      "1. Create a Cloud Logging sink to export BigQuery data access logs to BigQuery. 2. Perform a BigQuery query on the generated table to extract the information you need."
    ],
    "multiple": false
  },
  {
    "question": "Your company and one of its partners each have a Google Cloud project in separate organizations. Your company's project (prj-a) runs in Virtual Private Cloud (vpc-a). The partner's project (prj-b) runs in vpc-b. There are two instances running on vpc-a and one instance running on vpc-b. Subnets defined in both VPCs are not overlapping. You need to ensure that all instances communicate with each other via internal IPs, minimizing latency and maximizing throughput.\n\nWhat should you do?",
    "options": [
      "Set up a network peering between vpc-a and vpc-b.",
      "Set up a VPN between vpc-a and vpc-b using Cloud VPN.",
      "Configure IAP TCP forwarding on the instance in vpc-b, and then launch the following gcloud command from one of the instances in vpc-a gcloud: gcloud compute start-iap-tunnel INSTANCE_NAME_IN_VPC_8 22 \\ --local-host-port=localhost:22",
      "1. Create an additional instance in vpc-a. 2. Create an additional instance in vpc-b. 3. Install OpenVPN in newly created instances. 4. Configure a VPN tunnel between vpc-a and vpc-b with the help of OpenVPN."
    ],
    "answer": [
      "Set up a network peering between vpc-a and vpc-b."
    ],
    "multiple": false
  },
  {
    "question": "You want to store critical business information in Cloud Storage buckets. The information is regularly changed, but previous versions need to be referenced on a regular basis. You want to ensure that there is a record of all changes to any information in these buckets. You want to ensure that accidental edits or deletions can be easily rolled back.\n\nWhich feature should you enable?",
    "options": [
      "Bucket Lock",
      "Object Versioning",
      "Object change notification",
      "Object Lifecycle Management"
    ],
    "answer": [
      "Object Versioning"
    ],
    "multiple": false
  },
  {
    "question": "You have a Compute Engine application that you want to autoscale when total memory usage exceeds 80%. You have installed the Cloud Monitoring agent and configured the autoscaling policy as follows:\n\n✑ Metric identifier: agent.googleapis.com/memory/percent_used\n✑ Filter: metric.label.state = 'used'\n✑ Target utilization level: 80\n✑ Target type: GAUGE\n\nYou observe that the application does not scale under high load. You want to resolve this. What should you do?",
    "options": [
      "Change the Target type to DELTA_PER_MINUTE.",
      "Change the Metric identifier to agent.googleapis.com/memory/bytes_used.",
      "Change the filter to metric.label.state = 'used' AND metric.label.state = 'buffered' AND metric.label.state = 'cached' AND metric.label.state = 'slab'.",
      "Change the filter to metric.label.state = 'free' and the Target utilization to 20."
    ],
    "answer": [
      "Change the filter to metric.label.state = 'used' AND metric.label.state = 'buffered' AND metric.label.state = 'cached' AND metric.label.state = 'slab'."
    ],
    "multiple": false
  },
];

questions.sort(() => Math.random() - 0.5);


let currentQuestion = 0;
let score = 0;
let showingFeedback = false;
let quizStartTime = new Date();

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const finishBtn = document.getElementById('finishTestBtn');



function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function updateProgress() {
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progressBar').style.width = `${progressPercent}%`;
  document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  const shuffledOptions = shuffleArray([...q.options]);
  
  const inputType = q.multiple ? "checkbox" : "radio";

    shuffledOptions.forEach(option => {
      const li = document.createElement("li");
      li.innerHTML = `
        <label class="option">
          <input type="${inputType}" name="option" value="${option}">
          <span>${option}</span>
        </label>`;
      optionsEl.appendChild(li);
    });

  // ✅ Now add the `.selected` logic AFTER options are rendered
  optionsEl.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      input.parentElement.classList.add('selected');
    });
  });

  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";
  showingFeedback = false;
  updateProgress();

  if (currentQuestion === questions.length - 1) {
    finishBtn.style.display = "block";
  } else {
    finishBtn.style.display = "none";
  }

    if (currentQuestion >= 1) {
      finishBtn.style.display = "block";
    } else {
      finishBtn.style.display = "none";
    }
}


let totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes = 5400 seconds
const timerEl = document.getElementById("timer");

function updateTimerDisplay() {
  const hours = Math.floor(totalTimeInSeconds / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = totalTimeInSeconds % 60;

  let timeParts = [];

  if (hours > 0) timeParts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0 || hours > 0) timeParts.push(`${minutes} min${minutes !== 1 ? 's' : ''}`);
  timeParts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

  timerEl.textContent = `Time Remaining: ${timeParts.join(', ')}`;
}


function startTimer() {
  countdownInterval = setInterval(() => {
    totalTimeInSeconds--;
    updateTimerDisplay();

    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Submitting your quiz.");
      showResult();
    }
  }, 1000);
}



let countdownInterval = setInterval(() => {
  totalTimeInSeconds--;
  updateTimerDisplay();

  if (totalTimeInSeconds <= 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}, 1000);

updateTimerDisplay(); // show initial value



nextBtn.addEventListener("click", () => {
  const currentQ = questions[currentQuestion];
  const selectedInputs = Array.from(document.querySelectorAll("input[name='option']:checked"));
  const correctAnswers = currentQ.answer;

  if (!showingFeedback) {
    if (selectedInputs.length === 0) return alert("Please select at least one option.");

    const selectedValues = selectedInputs.map(input => input.value);
    const isCorrect = correctAnswers.length === selectedValues.length &&
                      correctAnswers.every(ans => selectedValues.includes(ans));

    // Disable all inputs
    document.querySelectorAll("input[name='option']").forEach(input => input.disabled = true);

    // Highlight correct and incorrect
    document.querySelectorAll("input[name='option']").forEach(input => {
      const parentLabel = input.parentElement;
      if (correctAnswers.includes(input.value)) {
        parentLabel.classList.add("correct");
      }
      if (input.checked && !correctAnswers.includes(input.value)) {
        parentLabel.classList.add("incorrect");
      }
    });

    // Feedback
    if (isCorrect) {
      score++;
      resultEl.innerHTML = `<p style="color: green;">✅ Correct!</p>`;
    } else {
      resultEl.innerHTML = `<p style="color: red;">❌ Incorrect.</p>
                            <p>Correct Answer: <strong>${correctAnswers.join(", ")}</strong></p>`;
    }

    nextBtn.textContent = currentQuestion < questions.length - 1 ? "Next Question" : "See Result";
    showingFeedback = true;

  } else {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const parts = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0 || h > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);

  return parts.join(' ');
}


// Save score to history in localStorage
function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const durationInSeconds = Math.floor((endTime - quizStartTime) / 1000);
  const duration = formatDuration(durationInSeconds);

  const scoreRecord = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];
  history.push(scoreRecord);
  localStorage.setItem('quizScoreHistory', JSON.stringify(history));
}

// Show full history above quiz
function displayScoreHistory() {
  const container = document.querySelector(".container");
  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];

  // Remove existing history display if any
  const existingHistory = document.getElementById('scoreHistory');
  if (existingHistory) existingHistory.remove();

  if (history.length === 0) return;

  // Create history table
  const historyDiv = document.createElement('div');
  historyDiv.id = 'scoreHistory';
  historyDiv.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>#</th>
          <th>Score</th>
          <th>Time Taken</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        ${history.map((item, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td>${item.score} / ${item.total}</td>
            <td>${item.duration || '-'}</td>
            <td>${item.date}</td>
          </tr>`).join('')}
      </tbody>
    </table>
    <button id="clearHistoryBtn" style="margin-top: 10px;">Clear History</button>
    <hr>
  `;

  container.insertBefore(historyDiv, document.getElementById("quiz"));

  // Add clear history button event listener
  document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your score history?")) {
      localStorage.removeItem('quizScoreHistory');
      displayScoreHistory(); // Remove history display
    }
  });
}

// Updated showResult to save score and show history
function showResult() {
  saveScoreToHistory(score, questions.length);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
`;
  finishBtn.style.display = "none";

  displayScoreHistory();

  // ✅ Restart logic with timer reset
  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    // Reset quiz state
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    // Reset timer
    clearInterval(countdownInterval);
    totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes
    updateTimerDisplay();
    startTimer(); // start a new countdown

    // Re-shuffle and reload quiz
    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });
}

// Initial call to show history on page load
// displayScoreHistory(); 

finishBtn.style.display = "none"; // start hidden

startTimer();

// Initial call to load first question
loadQuestion();
