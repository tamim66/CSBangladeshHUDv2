# CSbangladeshHud-CS2
> [!IMPORTANT]
> All credit goes to [dionpirotta](https://github.com/dionpirotta).
Made minor changes in CSS from his CSGO [HUD](https://github.com/dionpirotta/Custom-CSGO-HUD#examples)

![](https://i.postimg.cc/pLjyWDp4/vlcsnap-2023-10-16-18h40m22s166.png)

### How does it work?
Basically, CS2 is streaming data to local app-server, that transforms data and then load it to local webpage.

### installation
- Download and install node.js
- Download this repo somewhere
- /cfg/gamestate_integration_observerspectator.cfg needs to be placed in cfg folder in CS2 location
- CS2 needs to run on Fullscreen Windowed 
- After running CS2 and connecting to match (or replaying a demo, you can use this in it too)
- Start RUN file (.bat for Windows, .sh for Linux)
- Copy the given link from terminal and paste it in any browser to access the hud
- Go to create match select team then press save & force refresh HUD
- Go to match tab copy the link from browser

![](https://i.postimg.cc/G2SV64wK/image-2023-10-16-190538812.png)

### OBS setup 
- Join spectator.
- Enter "cl_draw_only_deathnotices 1" in game console.
- Make a browser source in OBS.
- copy & paste the hud link in url box.

 ![](https://i.postimg.cc/DfL9L646/image-2023-10-17-105054631.png)

### change league logo /sponsor logo

- To change league/sponsor left & right images make 395x70pixel banner and replace them from these dir without renaming them
- \public\files\league.png
- \public\files\img\elements.png



