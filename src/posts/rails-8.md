---
title:  'Rails 8 Review'
date:   '2025-01-01'
category: Tech
thumbnail: "/assets/ruby.jpg"
---

![Ruby](/assets/ruby.jpg)

Recently, a new project came up and I decided to try building it with the newly released Ruby on Rails 8.0 and it immediately reminded me of how I felt in love with it almost a decade ago. Here are some of my favorite features.

## Built-in Authentication Generator

Rails 8 introduces a new authentication generator, making it even simpler to set up user authentication without needing external gems. With a single command, you can generate a fully functional authentication system:

```
rails generate authentication
```

This sets up user registration, login, password resets, and session management with minimal configuration. It streamlines a process that used to require Devise or other third-party solutions, making Rails even more self-sufficient out of the box.

## Easy Deployment with Kamal

Deploying a Rails 8 application has never been easier, thanks to Kamal. This lightweight deployment tool simplifies the process of deploying to a server with minimal configuration. I kid you not, all I had to configure was the server hostname (and proper credentials to access it) and the credentials for a Docker container registry, and run:

```
kamal setup
```

And Kamal handles everything from building and pushing Docker images, installing Docker on the server, restarting the application on the server, to setting up SSL certificates. After waiting a few minutes for DNS propagation, I can see the live app already. It was mindblowing. Redeploying again is:

```
kamal deploy
```

## Hotwire & Turbo

This last one isn't strictly new in Rails 8 but it has become more mature and worth mentioning. I usually use Rails in API-only mode with a separate React frontend. I never tried Hotwire and Turbo that Rails introduced earlier and decided to give it a try this time. And I am surprised by how effortless it was to build reactive, real-time applications without JavaScript bundling or transpiling thanks to import maps. Page loads feels snappy, delivering a modern user experience - all while writing mostly Ruby.
