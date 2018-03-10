---
published: true
title: Monitoring trains the sysadmin way
layout: post
---


After discovering that the site viaggiatreno.it and lefreccie.it kindly offers some API to their train data i decided to implement my own monitoring system to get a complete overview of what is happening 
in the public train system and never miss a train.<br><br>

![](https://raw.githubusercontent.com/fnzv/fnzv.github.io/master/imgs/grafana-dash.png)

<br><br> 
## Master Plan:
1) Scrape all data available (Train departure/arrival,delays,stations....) <br>
2) Standardize the format so i can implement pluggable systems (Grafana, Telegram Bot, Website, Twitter..)<br>
3) At least have fun when i hear "We are sorry for the inconvenience" while i check my systems<br>
<br><br>


## Scraping all the relevant datasets<br>
All the data is collected with a script every 30 minutes using as input the site APIs and station lists, the ouput will be saved into InfluxDB (Legit, delay time tracking with timeseries DBs) 
and a local folder for historical data that i will use later with git.<br>
<br>


## Standardize format <br>
To allow multiple systems comunicate together you always need to take raw data (train datasets) and standardize it into a more pluggable format:
- InfluxDB  (Pros: A lot of client support, Grafana, Alerts, SQL...  Cons: Some more resources usage)
- Git+Local (Pros: Efficent historical data tracking and easy full-text search...  Cons: None)
<br>


## Developing "Pluggable" systems:<br>
- The Grafana Dashboard gathers all the relevant metrics that i cherry picked from InfluxDB (Train departure/arrival, delay, last station detected, train number, timestamp).
With this datasets i could easily create a dashboard that can really give you all the information that you can see on station information display sistems.
<br><br> ![](https://raw.githubusercontent.com/fnzv/fnzv.github.io/master/imgs/delays-dash.png) <br>
- The telegram bot [](https://t.me/Trenordalerts_bot) is written in Go and with under 300 lines of code is it possible to read all the collected data of delays and comunicate them to the user.
The alerting part of the bot is more complex than the "Give me info of xyz train" because i need to identify the user before sending an alert (obvious.. i don't want to recieve alerts of my friend's train) so i implemented 
a connector with a relational DB where i track chat_ids and alerts. <br>
- Static Website [](https://trenistats.it/) <br>
This is where the magic happens [](https://d3js.org/), the flow of the data is very simple now and i just need to gather data from one of my inputs (InfluxDB,Git or Local Dir) and show some graphs.
How?
The html code is automatically generated via a running script that collects the data from the local repo and generates the index.html for the static site.
Even if i'm not a frontend specialist i managed to make something cool out of it (pure google fu skills and design 101)
- Twitter bot [](https://twitter.com/trenistats) <br>
The bot gathers information from the local repo and triggers alerts via Twitter APIs if trains start/have long delays and tagging the main italian company that's responsible for the transportation system.
Like the Telegram bot this is written in Go with very few lines, basicaly take what i have already did for Telegram + Twitter API integration.
<br><br>

That's it, i could have gone more far into dashboarding and alerting but this setup seems to work fine for me. <br>
I tried integrating Elasticsearch + Kibana for more fun stuff but Influx + Grafana did the job very well (it just works.. and no json decoding fights). <br>

<p align="center">
  <img src="https://raw.githubusercontent.com/fnzv/fnzv.github.io/master/imgs/jsonmeme.jpeg?raw=true" alt="Sublime's custom image"/>
</p>

