---
layout: post
title:  "Lettergories' tech stack"
date:   2020-04-18 16:52:46 -0400
categories: jekyll update
excerpt: The server-side stack of Lettergories is built with Ruby on Rails, with Postgres as the relational database and Redis for queues and background jobs. It started off...
---

> One of my 2020 resolution was to start blogging again after I stopped seven years ago. So here it is, only this time, instead of a life diary, I'll be focusing on writing about Ruby on Rails, React and robotics. Welcome!

### Background

Almost a year ago, I released Lettergories, a cross-platform multiplayer online word game centered around players competing in finding words beginning with a letter that fits a few categories. It is available on [iOS](https://apps.apple.com/ca/app/lettergories/id1453368764) and [Android](https://play.google.com/store/apps/details?id=com.lettergoriesmobile&hl=en). The idea behind the game came from one of my childhood games I used to play with my friends at school on the back of our notebooks.
<p>&nbsp;</p>

### The stack
The server-side stack of Lettergories is built with Ruby on Rails, with Postgres as the relational database and Redis for queues and background jobs. It started off with the core application for the API endpoints and a Sidekiq background worker to process each game round. 

![Lettergories Architecture](/assets/lettergories_architecture.png)

After I introduced public match into the game, I added another background worker that is dedicated to running the matchmaking service. Having another background worker instead of sharing the same background worker and using multiple queues guarantees me that the jobs will run concurrently independent of each other.

All the services in Lettergories are containerized and run inside a Kubernetes cluster on Google Cloud. Using Kubernetes over deploying it to Heroku gives me the ability to optimize infrastructural resources thanks to the more efficient use of hardware.

The client-side stack of Lettergories is built with React Native as it lets me write the same code for both iOS and Android. If I ever work on the web version of Lettergories, I can also reuse the same code too, well most of it.
<p>&nbsp;</p>

### The CI/CD pipeline

I use CircleCI as the CI/CD platform. It's responsible for running tests, building the Docker image and deploying to Google Kubernetes Engine.  
![Lettergories Pipeline](/assets/lettergories_pipeline.png)
Lettergories currently has a little over 100 tests. Upon test succeeding, it proceeds to build the Docker image and push it to Google Container Registry. Before deploying the new changes, it spins up a one-off pod to run database migrations. Afterwards, it updates the necessary Kubernetes deployment with the new image tag and performs a rolling update to the staging environment. Once a feature is tested on staging, I will proceed with deploying to production by merging to master branch.
<p>&nbsp;</p>

### Logging and Monitoring
Google Kubernetes Engine integrates natively with their Stackdriver, which helps with resource-level logs and metrics. Application-level logs are collected in Stackdriver too but I drain the logs to SumoLogic because SumoLogic's log search is better at search and filtering as it allows me to run more complex queries. For monitoring and catching errors, I use Sentry where Sentry will notify me through email whenever there are any issues. Its trace page provides all the context needed to debug
<p>&nbsp;</p>

