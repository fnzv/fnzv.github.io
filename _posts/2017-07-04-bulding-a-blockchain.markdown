---
published: true
title: Building a Private Blockchain with Ethereum
layout: post
---
As title says this is a summary on how to setup your private Blockchain with Ethereum <br><br>
Requirements:<br>
- 2+ Ubuntu 16 servers/vps or locally on your computer <br>
- Geth<br>

Difficulty level: CTRL+C/CTRL+V a.k.a DigitalOcean style<br>

1) Install Ethereum (with repo):<br>

#### sudo apt-get install software-properties-common<br>
#### sudo add-apt-repository -y ppa:ethereum/ethereum<br>
#### sudo apt-get update<br>
#### sudo apt-get install ethereum

<br>
2) Create an Ethereum Account/Address:<br>

#### geth account new

<br>
Output:<br>
root@eth-01:/home/ubuntu# geth account new
WARN [07-04|21:27:58] No etherbase set and no accounts found as default
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase:
Repeat passphrase:
Address: {YOUR ETHEREUM ADDRESS}


3) Generate the 'Genesis' block of your blockchain with:<br>
#### geth init genesis.json<br><br>
genesis.json format is:<br>
{<br>
    "config": {<br>
        "chainId": 13,<br>
        "homesteadBlock": 0,<br>
        "eip155Block": 0,<br>
        "eip158Block": 0<br>
    },<br><br>
    "difficulty": "200000000",<br>
    "gasLimit": "2100000",<br>
    "alloc": {<br>
        "{YOUR ETHEREUM ADDRESS GENERATED FROM ABOVE": { "balance": "100000000" }<br>
    }<br>
}<br>

NOTE:
On "chainId" put your networkid <br>

3) Run the first node with (networkid must be different from (1=Frontier, 2=Morden (disused), 3=Ropsten and 4) :

#### geth --datadir="/tmp/eth01" -verbosity 6 --port 30301 --networkid 13 --nodiscover console


You can run this command under screen/NOHUP or any other way to keep it on background (pls not systemd).<br>


NOTE:
All the nodes must start the blockchain from the same genesis.json file (The first block).<br>


To dinamically add other nodes you must follow the same steps from above (install eth, genesis from same block & run node on same net id) then add the node as an Admin peer with: <br>

From the geth console run this to get your node public key: <br>
#### admin.nodeInfo.enode

Output:<br>

"enode://0e6b3bf7242d5c731e3da325eb7a2c2bd08be3acecf701d410a70043110a491e8b93f05b97222040b27aa6e32fb0fea05d3572e069f646a5b0c793695f9e1f52@[::]:30301?discport=0"

This is your public-key@ip:30303 and its the identifier for the node, to make the nodes see eachother you need to add them as peers with:<br>


#### admin.addPeer("enode://public-key@ip:30303")


<br>
How to check if peers are UP: <br>

#### net.peerCount

or

#### admin.peers
<br>

How to add statically Admin Peers:
Create a .json file inside the data dir with all the public-keys of the nodes that are allowed on the multi-node private blockchain, in this case:<br>
/tmp/eth01/static-nodes.json

Format:

[
  "enode://pubkey@ip-of-other-node:port" ,
   "enode://pubkey@ip-of-other-node2:port"
]

<br>
Your blockchain is ready for transactions/testing/development
<br>

Tested on multiple Ubuntu instances, for testing purposes you can also run multiple nodes on the same host or locally on your computer just change ports or you will get binding errors/exceptions.<br>

Make sure the Ethereum nodes can see eachother on port 30303 (Test with telnet) locally or via wan.<br>
<br>






