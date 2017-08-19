---
published: true
title: How to detect & mitigate (D)DoS Attacks using FastNetMon
layout: post
---

![](ddos-warz.gif)
<br>
Recently i was researching a lot on the various denial of service attacks and how to mitigate them from Layer 1 to 7 and as always the most convinient way to stop any attacks is keeping the bad requests/traffic away from your services starting from the first layers of the ISO/OSI model.<br>
#### Realistically the only ways to prevent DDoS attacks are:<br>
a) Layer 3-4 mitigation with **BGP/Cloud** Scrubbing (Sending all your network traffic using BGP or 'sophisticated' VPNs to third-party POP's to delegate attack mitigation).<br>
   Pros: This is the only and smart way to properly mitigating attacks, your services won't be hit by attacks/malicious traffic.<br>
   Cons: Paying an External Provider & bandwidth costs, All your traffic is re-routed so latency, packetloss and any other network issue that could happen to the External Provider affects you directly....And yes there could be false positives and customers may be locked out of their services.<br><br>
   <br>
b) DNS Obfuscation/**CDN Mitigation**/Proxying only legit requests, a well-known example is CloudFlare  (Kinda like Security through Obfuscation.. and it works only if you have certain services and know your stuff.)<br>
   Pros: If you only have HTTP(S) services exposed this is a great option and it's cheap or free.. (You can also setup your own private proxying with Nginx on some VPS/Cloud provider with DDoS protection). <br>
   Cons: Doesn't work well if you have other exposed services like Email servers,FTP or any dedicated exposed network assigned to you (Example.. if you are a Carrier you can't just hide your site using DNS since they will hit you announced AS networks... )
<br><br><br>
c) **Layer 6-7 mitigation** using server/service side counter-measures (Enabling Nginx rate limiting, Cache filtering, Apache mod_security & mod_evasive bans ..)<br>
   Pros: Easily to configure and some low-end attacks can be mitigated (Example: Website scans, Automated Bots/Aggressive crawlers..)<br>
   Cons: A real attack will saturate your Uplink and bring you down all your services<br>
   <br><br><br>
d) DIY DDoS protection using Linux boxes and the good old packet filter.<br>
   Pros: It's free, it just works, You need only to create your own "patterns" and attack/network blacklists.<br>
   Cons: You need to have at least 100G Uplinks and expesive dedicated servers to process all fast incoming/outgoing traffic, You have to manage all the network issues your self and if you saturate your link <br>
         with the upstream BGP provider they may drop your traffic and/or blackhole you anyways as no one wants unwanted bandwidth costs & saturated links by malicious traffic or bogus packets.<br><br><br>
	
Before do you even think of option d) watch this:<br>
![](https://github.com/fnzv/fnzv.github.io/blob/beedd3afa60078ac41b7b574738a22f690bec90a/ddos-fish.gif?raw=true)


Cool, but how i detect attacks?  Well if you have $$ and you only believe enterprise stuff --> grab that 500+ grand network box and put it in front of your DC... whereas if you are an opensource guy you can go for
FastNetMon (By Pavel Odintsov) and setup your own Anti-DDoS detection/mitigation solution.<br>
<br>
What is FastNetMon?<br>
**FastNetMon** is DDoS analyzer that will allow you to detect nearly realtime attacks or suspicious traffic (Example: VPS X is compromised and starts doing SYN Flood --> detected and alerted by FNM), FNM isn't just a <br>
detection tool but also helps to mitigate attacks after the ban rule is triggered by running a bash script (So there are a lot of cool stuff to do.. Slack webhooks..Keep a track of Influx metircs..Email Alerts...Send an emergency call/SMS)<br>
<br>
Scenario 1:<br>
VPS provider on Hypervisor X protects customers with FNM and when an attacks is detected on NetFlow/sFlow/IPFIX traffic the bash script automatically adds a blackhole rule on edge network device/hypervisor host to avoid degrading network performance for 
other customers<br>
<br>
Scenario 2:<br>
Carrier needs to monitor traffic flows on their network boxes, Set ups FNM and gather all flows to monitor subnets to re-route traffic (GoBGP & ExaBGP are supported by FNM) when links are saturated<br>
<br>
..<br>
...<br>
<br>
And so on<br>
<br>

The FNM setup is quite easy to get up and running, the tricky part is setting up Grafana,Influxdb metrics but that's not a problem if you are interested only in detection/mitigation.<br>
If you are into dashboarding you could also set up an ELK (this is the icing on the cake) to gather NetFlow data and create great visualization with Kibana (Total PPS in, Top "Talkers" on outgoing/incoming traffic, Traffic Categories, Sort by TCP/UDP..). <br>



The only requirements are:<br>
- Small Server/Virtual Machine that will recieve all the flow traffic from routers/switches via a capture backend (https://github.com/pavel-odintsov/fastnetmon/blob/master/docs/CAPTURE_BACKENDS.md)<br>
- For automated BGP integration you need to allow the Server to talk directly to the routers/switches<br>


Links and Resources:<br>
- Github documentation: https://github.com/pavel-odintsov/fastnetmon/tree/master/docs<br>
- FastNetMon site: https://fastnetmon.com/ (Thank you Pavel for this project) <br>
- Managing Flows: http://pmacct.net/ (Great tool from Paolo Lucente) if you want to collect properly flows you can use nfacct <br>

For any question & discussion don't esitate contact me as these topics are really interesting <br><br>
