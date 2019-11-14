var story = [
    [
        "bg_lungmen_b",
        "char_012_misa_1",
        "char_002_amiya_4",
        "char_103_angel_1",
        "char_107_liskam_1",
        "char_106_franka_1",
        "char_102_texas_1",
        "char_002_amiya_1",
        "char_002_amiya_6"
    ],
    [
        "m_sys_loading_loop",
        "m_sys_loading_intro"
    ],
    [
        "background.showImage({image:'bg_lungmen_b', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_sys_loading_intro', key:'m_sys_loading_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_012_misa_1'});playground.drawDialog({name:'米莎',text:'呜唔......'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'她......怎么了？'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'阿米娅',text:'这，这是矿石病发作的征兆！'});",
        "playground.drawDialog({name:'阿米娅',text:'啧，才一星期就......！'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'矿石病也有急性的吗？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'芙兰卡，你是哪种？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'怎么，关心我了吗？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'阿米娅，如果芙兰卡病逝了，我希望能在罗德岛火化她。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'喂！'});",
        "playground.drawDialog({name:'芙兰卡',text:'你很过分哦，雷蛇！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'平时老说要传染我的不是你吗！'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'阿米娅',text:'哈，哈哈......'});",
        "playground.drawDialog({name:'阿米娅',text:'急性和慢性之分，具体回答起来有些复杂......'});",
        "playground.drawDialog({name:'阿米娅',text:'但至少，米莎她的情况，非常危险。'});",
        "playground.drawDialog({name:'阿米娅',text:'这样下去，在很短的时间内，矿石病就有可能威胁到她的生命。'});",
        "playground.drawDialog({name:'阿米娅',text:'只能先应急处理一下......'});",
        "playground.drawDialog({name:'阿米娅',text:'但对米莎的病情进行控制这件事，刻不容缓。'});",
        "playground.drawDialog({name:'阿米娅',text:'必须向龙门声明这一点。事件平息之后，我们必须把米莎接回罗德岛。'});",
        "playground.drawDialog({name:'阿米娅',text:'这是我们对任务目标的责任。'});",
        "playground.drawCharacter({name:'char_002_amiya_4', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'呃......'});",
        "playground.drawDialog({name:'能天使',text:'她是不是......快爆了？'});",
        "background.cameraShake({duration:1, xstrength:0, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'唉！疼！为什么要打我......'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'德克萨斯',text:'说话注意点。'});",
        "playground.drawCharacter({name:'char_102_texas_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'呜......'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'如果有一天我快爆了，我一定会努力爬到你身边的。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_103_angel_1', focus:2});playground.drawDialog({name:'能天使',text:'对不起！芙兰卡小姐！以前多有得罪请原谅我！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_103_angel_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'噗。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'先把目标转移到安全的地区吧。'});",
        "playground.drawDialog({name:'雷蛇',text:'顺便，我们后方，发生了些情况。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawDialog({name:'感染者',text:'你们要干什么！！滚出去！！'});",
        "playground.drawDialog({name:'整合运动成员',text:'大家都是感染者，我们不想动粗！别挡路！'});",
        "playground.drawDialog({name:'感染者',text:'你已经毁了我们的家，现在还要把近卫局引过来吗！别想过去！！'});",
        "playground.drawDialog({name:'感染者',text:'你......！不识时务的家伙，快滚开！！'});",
        "playground.drawDialog({name:'感染者',text:'呜啊！'});",
        "playground.drawDialog({name:'感染者',text:'别逼我们！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'（要动手吗？）'});",
        "playground.drawDialog({name:'芙兰卡',text:'（看来他们是跟丢了。现在动手的话，罗德岛会暴露行踪。）'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'（会不会干扰到任务进程？如果会，后果有多严重？）'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'（有一定影响，但——）'});",
        "playground.drawDialog({name:'芙兰卡',text:'（没有那么严重吧？）'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'那就干吧。'});",
        "playground.drawDialog({name:'阿米娅',text:'如果条件允许，救助感染者是罗德岛理所当然的任务。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'哼哼，好。'});",
        "playground.drawDialog({name:'芙兰卡',text:'果然当初选择跟着你是正确的。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_6', focus:2});playground.drawDialog({name:'阿米娅',text:'那是什么意思......芙兰卡小姐？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_6', focus:1});playground.drawDialog({name:'芙兰卡',text:'没什么没什么，就是夸夸你！'});",
        "playground.drawCharacter({name:'char_002_amiya_6', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'大概意思是，性格和你很合得来吧？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'你为什么那么懂我呢？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'大概是因为，你可真烦人吧？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'唔......'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'该教训一下这帮为非作歹的家伙了。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'嗯。'});",
        "playground.drawDialog({name:'阿米娅',text:'小心那些会在各个建筑物间跳来跳去的整合运动感染者。'});",
        "playground.drawDialog({name:'阿米娅',text:'除此之外，还要记得保全龙门本地的感染者！'});",
        "playground.drawCharacter({name:'char_102_texas_1'});playground.drawDialog({name:'德克萨斯',text:'难度不小。'});",
        "playground.drawDialog({name:'德克萨斯',text:'——但，没问题。'});",
        "playground.drawCharacter({name:'char_103_angel_1'});playground.drawDialog({name:'能天使',text:'那就，上吧！'});",
        "playground.drawDialog({name:'能天使',text:`Dr.${nickname}，要好好指挥我和德克萨斯哦！`});"
    ]
];