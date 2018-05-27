---
published: true
title: Loadstressing from the cloud with DTBOT
layout: post
---


Today i finally decided to opensource some of my code created to reach my maximum level of lazyness, Automatically loadstressing web infrastructures via Telegram. <br>
The other challenge was to see/prove if Golang can be a replacement/alternative for Python scripting.<br><br>

Repo: <a href='https://github.com/fnzv/DTBOT'>https://github.com/fnzv/DTBOT</a>

Here is the diagram to better explain what i wanted to do:

![](https://raw.githubusercontent.com/fnzv/fnzv.github.io/master/imgs/dtbot-diagram.png)
<br>
*Disclaimer before i even start* <br>
I'm not responsible for anything you do with this tool, this was made only for legit web loadstressing/benchmarking YOUR OWN infra. <br>
I know that most of the code can be written more efficently/well, don't hate on my exec_shell() ahah  <br>
*end of disclamer* <br>

<br><br><br> 
## The main "ingredients" are:
- Ansible <br>
- Golang <br>
- Telegram <br>
- At least one cloud provider with some resources <br>
<br><br>



It all starts from the Telegram Bot that keeps listening commands from the allowed "chat_id" configured and whenever a predefined command is sent the bot (Written in Golang) runs the predefined Ansible playbook with extra args and gives feedback
to the user via Telegram. <br>

This is a classic example for load stressing from Openstack using DTBOT: <br>
1) User writes to Loadstresser bot chat "/create 5" which triggers the bot to execute the underlying Ansible playbook to deploy 5 VMs on the Openstack Configured Credendials. <br>
If you check the logs (/var/log/dtbot.log) with a small Ansible background you can understand what's really happening:  <br>
```2018/05/19 14:35:46 Command: source /etc/dtbot/os_creds && ansible_python_interpreter=/usr/bin/python3 ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -vv /etc/dtbot/playbooks/create-infra.yaml --extra-vars="total_nodes=5 telegramtoken=botTOKEN telegramchatid=CHATID"```


2) After a few minutes User recieves feedback that VMs are ready and can start loadstressing with: ```/load http://example.org <Num clients> <Num VMs involved> <Time in seconds> ```  <br>

The defined command /load was created for simplicity and uses WRK (https://github.com/wg/wrk) as a stresser which works great out of the box without complex configuration files. <br>

<p align="center">
  <img src="https://raw.githubusercontent.com/fnzv/fnzv.github.io/master/imgs/dtbot-telegram.jpg?raw=true" width="260" height="500" alt="Sublime's custom image"/>
</p>


After some time passed loadstressing i decided to add a bit of complexity with Jmeter configurations and custom bash scripts so any User can configure or use it's own loadstressing tool (jmeter, vegeta, nghttp2, locust.io ..). <br><br>


The defined commands for custom Jmeter scripts are /loadj (Openstack) and /loadj_aws (AWS) which follows the exact previous work flow (Telegram -> Golang -> Ansible) but loads a remote configuration file (.jmx in case of Jmeter) and executes the tool with the custom configuration file.  <br>

Note: The remote configuration file must be RAW (gist/any pastebin can be used for this). <br>

Example: /loadj <Remote Jmeter RAW configuration> <Number of Openstack nodes to use>  or /loadj_aws <Remote Jmeter RAW configuration> (to run jmx conf on all AWS nodes) <br>

You can find a simple .jmx example inside the repo under examples/ <br>

If you reached that point and you still asking what DT stands for.. well it's just "DownTime" :) <br>


<br><br>
## Brief How To/Usage (more info on github repo):
<br>
1) Create a bot and save the bot Token, you can do it by writing "/newbot" to BotFather (https://telegram.me/botfather)
<br>
2) Use the Quick-Install of dtbot on a Ubuntu 16.04 machine and configure it.<br>
   Required configuration files are located under ```/etc/dtbot/``` : <br>
   - dtbot.conf ( Chat ID and Telegram Token, to find what chat id you have just write some messages to your bot and then open from the browser this url: https://api.telegram.org/bot<token>/getUpdates ) <br>
   - os_creds (if you want to create VMs on the Openstack Provider) - Openstack credential source file <br>
   - aws_creds` (if you want to create VMs on AWS) - AWS ACCESS and SECRET key source file (you just need the exports for those enviroment variables) <br>
3) (re)start dtbot via systemd: service dtbot restart <br>
   If everything is fine you should see "Authorized on account BOT_NAME" on /var/log/dtbot <br>
   
3.5) Take some time to adjust the Ansible Playbooks based on your cloud enviroment (AWS or Openstack): <br>
 - ```/etc/dtbot/playbooks/aws-create-infra.yaml``` - You can keep it as-is but you need to change the "key_name:" with one present in your account, this VM should be able to SSH into newly created AWS instances with this key so generate a new key on the machine and add it to AWS) <br>
 - ```/etc/dtbot/playbooks/create-infra.yaml``` - The only part that needs to be changes is the "flavor:" and "image:" name wich changes based on the Openstack provider <br>
 - Other changes that might be done are always the same but on also the other playbooks: info.yaml,ddos.yaml (Openstack flavor,image) <br>

<br>
4) Try to send some commands to your Telegram Bot: <br>
  ```
  /help - shows the command list
   /create N - Deploys N VMs on Openstack, multiple runs won't deploy more VMs but just checks is N VM is present
   /create_aws N - Deploys N VM on AWS, multiple runs will deploy more VMs
   /stop N - Stops loadstressing tasks on N VMs (Openstack)
   /stop_aws - Stops all loadstressing tasks on ALL AWS VMs 
   /destroy N - Deletes N VMs created on Openstack (0 to N)
   /destroy_aws - Deletes ALL loadstressing VMs created on AWS (Will just shutoff all VMs accessible by the dtbot key and therefore will be deleted because of 'delete on shutoff')
   /load <URL> <Num clients> <Num VMs involved> <Time in seconds> - Start load stressing on Openstack N VMs
   /load_aws <URL> <Num clients> <Time in seconds> - Start load stressing on ALL AWS create VMs
   /loadj <URL> <Num VMs involved> - Executes given JMX Jmeter script on N VMs (Openstack), URL must be raw and displaying directly the text
   /loadj_aws <URL> - Executes given JMX Jmeter script on all AWS VMs, URL must be raw and displaying directly the text
   /load_custom <URL> <Total nodes> - Executes custom bash script provided on Openstack VMs, URL must be raw and displaying directly the text
   /load_custom_aws <URL> - Executes custom bash script provided on all AWS VMs, URL must be raw and displaying directly the text
   /info N - Gathers info on N VMs on Openstack (Established connections and ifconfig stats), useful to check current stresstest status. (Example: start /load then after all the VMs started check /info N to see stats/data)
   ```
   
 5) Start loadstressing and tune your infra cache,db & webserver... repeat :) <br><br>
    ![](https://raw.githubusercontent.com/fnzv/fnzv.github.io/master/imgs/dtbot-requests.png)

   
Pro-Tips:
- The bot can be added to Telegram Groups and accept commands from all members of the group, just find out the chat_id of the group and add it into the dtbot.conf
- Check the logs on /var/log/dtbot.log to see what's happening and in case change parameters/values on ansible playbooks.
- Execute manually Ansible on the dtbot VM to see if something is wrong (ansible-playbook -vv, you can copy/paste the command from the logs)
- On AWS use a different region from your production env
