---
title:  "Lettergories 2 with Rails Solid Cable, Solid Queue and Turbo"
date:  "2025-05-18"
category: Tech
thumbnail: "/assets/lettergories.png"
---

![Lettergories](/assets/lettergories.png)

I recently revived my game Lettergories. It used to be this complex setup: a Rails backend, a React Native frontend, Postgres, Redis, and everything deployed through Kubernetes. It worked, but honestly — it was heavy. Too many moving parts. Too much overhead for a project meant to be nimble and fun. And costly too.

Now? It’s just a Rails monolith, powered by Turbo, with real-time updates via Solid Cable, background job processing with Solid Queue and deployed with Kamal.

The best part? I had it all working again in just a couple of days. No React. No app store submissions. The Rails ecosystem has matured to a point where you can build fast, reactive, modern apps without a frontend framework and without cloud-native overkill. It’s Rails the way it’s meant to be — fast to build, easy to deploy, and joyful to work with.
