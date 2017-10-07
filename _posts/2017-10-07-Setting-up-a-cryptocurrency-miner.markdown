---
published: true
title: Setting up your first Mining rig (Using Ubuntu 16.04 LTS Server)
layout: post
---
![](https://cryptoyeti.com/wp-content/uploads/2016/10/mining-zcash-326x245.png)

Since a few months i started getting more and more interested in crypto and now i can share my experience with Mining. <br>
<br>
At the very beginning of Mining many were attracted by Bitcoin since the difficulty was so low that everyone with some spare GPUs could start and be an active node of the Bitcoin network and earn some satoshi, Nowadays this is still a thing but the miners have evolved and investors came into the game with huge datacenters full of ASICs/13 GPU rigs dedicated to mining a single coin and boosting the difficulty to the very top causing low budget miners to shutoff their rigs since you cannot make any profits with just a bunch of GPUs.<br>
What happened next? Different coins started becoming profitable and allowing more GPU owners to jump into the mining game using another cryptocurrency like Ethereum, Zcash, Ethereum Classic, Monero.. and many others, if you ever noticed GPU prices this summer you probably saw that the value of AMD/Nvidia GPUs was incredibly high and the European/American market started struggling finding those cards as "Mining Whales" started buying 300-400 cards per order making Hobbist/Gamers life harder.<br>

Ok cool, now i see that Ethereum/Zcash/Monero/...Coin xyz... is still PoW(Proof of Work) and i can mine coins till end of 20xx how can i start mining? <br>
First of all you need to consider that mining takes a lot of energy at least 80-140W per card depending on under/overclock settings so if your electrical system cannot sustain the draw of all the total energy you cannot start mining there.<br>
After you have made your elettrical considerations you can start setting up your Mining rig, the only components necessary for mining are:<br>


- Multiple GPUs: Depending on the algorithm you need to choose the best Hashrate per Watt, for example if you want to mine only Zcash the best GPUs for this coins are Nvidia because of their hardware architecture (Pascal) that is much more <br>
effective with coins like Zcash whereas on AMD cards you will perform better on Ethereum coins (Just look for AMD RX 4xx/5xx vs Nvidia GTX 10XX benchmaks and see the Hashrate per Watt differences).

- Motherboard: This is a key choice because will decide how many GPU cards can you fit into a single rig, the best option are BTC edition (MoBo that were designed for BTC mining) because they can fit up to 6-13 PCI-e slots <br>

- CPU: The only requirement for the CPU is that supports the Motherboard socket but in case you want to start CPU mining then you need to search for the most appropriate CPU and rethink about the Motherboard.
 
- PSU: Another important choice is the power supply not only for the connectors (if you have 5 or more GPUs you need to take into account that you need 5 PCI power connectors and another 5 for the Risers) but also for Watt and efficiency.
  Don't be cheap on the quality and take only Gold/Silver/Platinum PSUs. <br>
  <br>
- Storage: SSD drives today are cheap and draw less power than standard HD, you need up to 60GB depending on the mined coin and if you need to store the complete Blockchain.<br>
<br>
- Risers: Those connectors allow you to fit multiple GPUs into the single motherboard because you cannot keep 6+ GPUs directly connected on the motherboard so you need to extend the PCI-e adapter.<br>
  Important consideration: Risers (Sata or Molex) must be feed from different cables and not all from the same PSU cable because of Amperage can burn connectors as they can only draw less than 70W, what you can do:<br>
  4 GPUs --> Directly connected to PSU PCI-e power connectors (example: 2 cables from PSU with 2 PCI-e power connectors)<br>
  4 Risers --> converted to Sata --> 2 PSU sata cables  (NO MORE THAN 2 SATA CABLES PER POWER CABLE FROM PSU)<br>
  The best option should be one cable per Riser connector/GPU but for this you will end up having at least 2-3 PSUs, many people say that the limit is 2-3 cables on the same power cable coming from PSU.<br>
<br>
After you got all the hardware you just need to connect all the hardware (If you don't have experience you can google how to build a pc and basically it's the same thing), you need to choose your OS:<br>
- EthOS - Mining distro based on Ubuntu with all drivers/mining scripts ready<br>
- SMOS - Mining OS much like EthOS<br>
- Pure Windows - Install the OS and check for the correct GPU drivers and use MSIAfterburner or EVGA Precision for overclocking (Some have issues with Windows 10 and have switched to 7 for driver stability)<br>
- Ubuntu 16.04 - If you have some Linux experience this is your best option, you need only to install/compile the correct drivers and start mining<br>
<br>
<br>
<br>
Setting Up your Ubuntu 16.04 Miner (Nvidia):<br>
Adding the Graphics repository<br><br>

```sudo apt-add-repository ppa:graphics-drivers/ppa ```<br><br>

Installing the drivers and Nvidia SMI<br><br>

```sudo apt-get install nvidia-smi```<br>
```sudo apt-get install nvidia-384```<br>
<br><br>

Now you just have to choose your miner and mining pool to start mining (I assume you already have a Wallet for the coin you want to mine).<br>
Examples:<br>
<br>
EWBF Miner --> Zcash<br>
Ethminer --> Ethereum<br>
ccminer --> Monero<br>
<br><br>

Most of those scripts have examples inside them so you need only to change Wallet/Pool settings:<br><br>


EWBF:<br>
0.3.4b/miner --server POOL-ADDRESS --user WALLET-ADDRESS.RIG-NAME --pass z --port 3333 --pec --log 2 --logfile /var/log/ewbf.log --tempunits C --templimit 85<br>
<br>
To start mining you just have to start the mining script (under a screen session to keep the script active even when you close terminal) and keep an eye on GPU,connectors temps (green zone is 50-70, warning zone 70-80 but still ok, critical zone 80-90, gpu lock/driver automatically stops 90-100) .<br><br>


Some of the most known mining pools are:<br>
- https://nanopool.org<br>
- http://dwarfpool.com/<br>
- https://zcash.flypool.org/<br>
- https://ethermine.org/<br>
- http://nicehash.com/<br>
<br>
Almost every mining pool will allow you to see statistics via web & or alerting via email if miner shuts down.<br>
<br>
You can also set up your own pool but it does make sense only if you have enough hashrate, for example if you have 1-5 rigs just go for a shared mining pool whereas if you have 20+ rigs you can start thinking about solo mining so all profits are maximized. <br>
<br><br>


Remote Control is quite easy, since this is a Linux based system you can Portforward SSH ports on your Router and enable SSH-Key authentication for remote management (Filter IP ranges with IPtables if you know that you will connect only from provier X). <br>
Other alternatives are:<br>
- OpenVPN on rig --> PortForward OpenVPN ports --> Connect via Android Device to VPN --> SSH OR Miner API managemnt via VPN.
<br>
- Telegram Bot listening for you commands and sends you information about the miner (for example trsh script: https://github.com/fnzv/trsh --> create custom commands for example /gpu_stats --> gives back to you gpu statistics)
<br>
- Setting up a VPN with your Router then from there connect to your rig (OpenWRT,DD-WRT & co..)
<br>
- ... your own backdoor :)

<br><br>
After you are up and running just HODL and keep mining
