---
title:  "Why Raw SQL Sometimes Outperforms ActiveRecord in Ruby on Rails"
date:   "2021-01-15"
category: Tech
thumbnail: "/assets/running.jpg"
---

![Race](/assets/running.jpg)

When building web applications in Ruby on Rails, developers often taken ActiveRecord for granted for its convenience and readability. ActiveRecord is an abstraction layer that allows you to interact with your database using Ruby methods instead of raw SQL. However, this abstraction can sometimes come at the cost of performance, especially in scenarios where precise, large-scale operations are required, and I've personally experienced it.

Here's an example.

```
users = User.all
users.each do |user|
  puts user.posts.count
end
```

Here, ActiveRecord executes one query to fetch all users, followed by one query per user to count their posts. If there are 1000 users, that’s 1001 database queries.

In Rails, you can execute this with **ActiveRecord::Base.connection.execute()**. Instead of multiple queries, a single SQL query using a JOIN and GROUP BY can fetch the data more efficiently. Like so.

```
SELECT users.id, COUNT(posts.id) AS posts_count
FROM users
LEFT JOIN posts ON posts.user_id = users.id
GROUP BY users.id
```

This query retrieves all the data in one go, drastically reducing the number of database calls.

You may argue that often times it can be done with ActiveRecord with **joins()**, **group()**, etc but for more complex queries that involves custom aggregates will often require raw SQ since ActiveRecord doesn’t support every SQL feature out of the box.
