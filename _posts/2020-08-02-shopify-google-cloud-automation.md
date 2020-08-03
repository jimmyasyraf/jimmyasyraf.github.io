---
layout: post
title:  "Automating my Shopify store with Google Cloud Functions"
date:   2020-05-01 16:52:46 -0400
categories: jekyll update
excerpt: Recently, I have launched my Shopify store OwnSticker, selling custom stickers that you can personalize easily and see the result rendered in real-time...
---

Recently, I have launched my Shopify store [OwnSticker](https://ownsticker.com), selling custom stickers that you can personalize easily and see the result rendered in real-time. This was achieved with some SVG and Javascript magic.

The problem is that there are manual processes involved that a lazy person like me would very much not want to do and would love to automate. This includes preparing the final file for printing after an order is placed and uploading and sending it over to my supplier. Luckily, Shopify provides webhook triggers for specific events and my supplier provides an API for placing orders. So this is only a matter of bridging those two.

Since this thing would be event-driven, this would be a great use case for me to learn about serverless computing. I knew about AWS Lambda, an event-driven, serverless computing platform provided by AWS, but again, because I don't like AWS because of their very bad UI, I turned to Google Cloud, in this case Google Cloud Functions. So this is how it looks like.

![Shopify automation](/assets/shopify_automation.png)

First of all, when a customer places an order on my store, it will trigger a webhook where a callback URL can be assigned, in this case, my Google Cloud Function endpoint. The webhook event provides all the necessary order data in JSON. Each request contains a HMAC-SHA256 header that is signature generated from the contents of the request body which will then needs to be verified from Google Cloud Function's end. My function will then proceed to do its magic of generating the print file and then do a POST request with my API key to my supplier for placing an order for printing the stickers. And that's it, my Shopify store is now automated and running passively while I sleep.

![OwnSticker](/assets/ownsticker.gif)