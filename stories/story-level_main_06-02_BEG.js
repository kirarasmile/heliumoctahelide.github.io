var story = [
    [
        "bg_corridor",
        "avg_npc_042",
        "avg_npc_026",
        "char_014_riope",
        "bg_building_3",
        "char_017_homura_5",
        "char_017_homura_4",
        "char_017_homura_8"
    ],
    [
        "m_dia_street_loop",
        "m_dia_street_intro",
        "d_gen_walk_n",
        "m_dia_darkness02_loop",
        "m_dia_darkness02_intro",
        "d_gen_rungeneral"
    ],
    [
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0,b:0,fadetime:1,block:true});background.showImage({image:'bg_corridor',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:1.5, block:true});voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.drawCharacter({});playground.drawDialog({text:'咦......Rosmontis，你在做什么？'});",
        "playground.clearDialog();playground.drawCharacter({name:'avg_npc_042',fadetime:1,block:true});delay(1.5);playground.drawDialog({name:'Rosmontis',text:'我......我想修好这个便携终端。'});",
        "playground.drawDialog({name:'Rosmontis',text:'六年到去年的记忆我都记在这里了......'});",
        "playground.drawDialog({name:'Rosmontis',text:'今天早上，我想读六月十二号记录的时候，屏幕突然就不亮了。'});",
        "playground.drawDialog({name:'Rosmontis',text:'如果......如果真的再读不了......'});",
        "playground.drawDialog({name:'Rosmontis',text:'三月十四号和爸爸去植物园，七月的登山，还有第四个四月，妈妈......'});",
        "playground.drawDialog({name:'Rosmontis',text:'......妈妈......'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawDialog({text:'别，别哭！那个啥，你不太擅长用电子屏幕对吧？'});",
        "playground.drawDialog({text:'为什么不等Scout来帮你修一下呢？可露希尔也可以啊？'});",
        "playground.drawDialog({text:'我帮你拿给可露希尔吧，几分钟就搞定啦！'});",
        "playground.drawCharacter({name:'avg_npc_042'});playground.drawDialog({name:'Rosmontis',text:'Scout是......'});",
        "playground.drawDialog({name:'Rosmontis',text:'是那个吗，走路很轻的干员吗？'});",
        "playground.drawCharacter({});playground.drawDialog({text:'是他啊！有印象吗？'});",
        "playground.drawCharacter({name:'avg_npc_042'});playground.drawDialog({name:'Rosmontis',text:'嗯。'});",
        "playground.drawDialog({name:'Rosmontis',text:'给人很干净的感觉......像白色的瓷砖一样。'});",
        "playground.drawDialog({name:'Rosmontis',text:'他就在那。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'......啊？'});",
        "playground.clearDialog();playground.drawCharacter({name:'avg_npc_026',fadetime:1,block:true});delay(1);playground.drawDialog({name:'Scout',text:'从没听过你对我的评价，现在才知道，原来我感受起来是这么脆弱。'});",
        "playground.drawCharacter({});background.cameraShake({duration:0.4, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({text:'你什么时候来的？！'});",
        "playground.drawCharacter({name:'avg_npc_026'});playground.drawDialog({name:'Scout',text:'可以说是一直都在。我习惯隐藏自己了。'});",
        "playground.drawCharacter({name:'avg_npc_042'});playground.drawDialog({name:'Rosmontis',text:'Scout先生他确实一直都在的。'});",
        "playground.drawDialog({name:'Rosmontis',text:'为什么煌没有感觉到呢？'});",
        "playground.drawCharacter({});playground.drawDialog({text:'......我是比较粗线条，没看到啦！'});",
        "playground.drawDialog({text:'不是，你听她说了那么久，怎么不帮她修下啊。'});",
        "playground.drawCharacter({name:'avg_npc_026'});playground.drawDialog({name:'Scout',text:'抱歉，接下来我们有任务。我得花些精力校准武器。'});",
        "playground.drawDialog({name:'Scout',text:'你可能要请可露希尔或是机械师Mechanist先生去解决了。'});",
        "playground.drawCharacter({});playground.drawDialog({text:`是那个，营救Dr.${nickname}的任务吗？`});",
        "playground.clearDialog();voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_014_riope',fadetime:1,block:true});delay(1);playground.drawDialog({name:'Ace',text:'是。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'哦哦，你也来了。'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'作为主要发起人之一，如果我自己都不去，罗德岛精英干员不是成了笑话？'});",
        "playground.drawCharacter({name:'avg_npc_026',name2:'char_014_riope',focus:1});playground.drawDialog({name:'Scout',text:'阿斯卡纶怎么回复你的？'});",
        "playground.drawCharacter({name:'avg_npc_026',name2:'char_014_riope',focus:2});playground.drawDialog({name:'Ace',text:'一样的托辞。她不会参与。同往常一样，她一直都和凯尔希站一边。'});",
        "playground.drawCharacter({name:'avg_npc_026',name2:'char_014_riope',focus:1});playground.drawDialog({name:'Scout',text:'......你有没有考虑过，现在可能不是最佳时机？'});",
        "playground.drawCharacter({name:'avg_npc_026',name2:'char_014_riope',focus:2});playground.drawDialog({name:'Ace',text:'但这也可能是我们最后的机会。'});",
        "playground.drawDialog({name:'Ace',text:'为了躲避这次天灾，切尔诺伯格很可能会在驶离这里后，转向乌萨斯腹地。在乌萨斯内部展开营救，成功的概率趋近于零。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawDialog({text:`听你们说了那么多回，这个Dr.${nickname}真有那么神奇吗？`});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'和阿米娅与凯尔希一样神奇。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'avg_npc_042',focus:2});playground.drawDialog({name:'Rosmontis',text:'我见过博士吗？'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'avg_npc_042',focus:1});playground.drawDialog({name:'Ace',text:'没有。不过很快你就能见到了。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'avg_npc_042',focus:2});playground.drawDialog({name:'Rosmontis',text:'嗯。我也很想感受一下博士的样子。'});",
        "playground.drawDialog({name:'Rosmontis',text:'很想。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'avg_npc_042',focus:1});playground.drawDialog({name:'Scout',text:'你会的，小猫。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawDialog({text:'对了，Ace。 你下辖小队里，有个叫灰喉的非患者。'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'这事我记得。她应该还在单独舱室接受指导。'});",
        "playground.drawDialog({name:'Ace',text:'煌，听我一句。我带着她几个月了，她也许不太会表达，但绝对没有恶意。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'但她对我的队员说，“我不知道你们感染者有多痛苦。”'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'我清楚。但她可能真的只是很疑惑，她想要去问这个问题。'});",
        "playground.drawDialog({name:'Ace',text:'我没资格要求干员立即明白我们的处境，而且，灰喉从没质疑过罗德岛的命令。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'其他我不管，我绝对不允许任何人侮辱我的队员，更别说诋毁罗德岛感染者们的奋斗了。'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'不是现在。我知道你在克制怒意，但真的，不是现在。'});",
        "playground.drawCharacter({});background.cameraShake({duration:0.4, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawDialog({text:'她当着我的面这么说！'});",
        "playground.drawCharacter({name:'avg_npc_026'});playground.drawDialog({name:'Scout',text:'大猫，消停些。'});",
        "playground.drawDialog({name:'Scout',text:'你也有任务在身。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'......是啊。'});",
        "playground.drawDialog({text:'行吧，回来再处理。'});",
        "playground.drawDialog({text:'谁叫Ace资历比我老呢。'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'一旦你开始用这种口气说话，我就怀疑你是想戏弄别人。'});",
        "playground.drawCharacter({name:'char_014_riope',name2:'avg_npc_026',focus:2});playground.drawDialog({name:'Scout',text:'她可能真的在取笑你。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'他只要有两天没修胡子，我就一定会觉得他资历特别老。'});",
        "playground.drawCharacter({name:'avg_npc_042',name2:'char_014_riope',focus:1});playground.drawDialog({name:'Rosmontis',text:'Ace，胡子很硬。'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'......啊。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'哈哈哈。那我去帮她送东西了。我也有任务在身，先走啦。'});",
        "playground.drawDialog({text:'等我任务结束回来，我们再去好好喝一场吧！'});",
        "playground.drawCharacter({name:'avg_npc_026'});playground.drawDialog({name:'Scout',text:'可别再喝得吐一地了。'});",
        "playground.drawDialog({name:'Scout',text:'Misery擦了两小时地板，再让他见那种场面，他恐怕也要吐出来。'});",
        "playground.drawCharacter({});playground.drawDialog({text:'谁知道你酒量那么好啊！'});",
        "playground.drawDialog({text:'Rosmontis，机械师过会儿就把终端给你送过来。'});",
        "playground.drawDialog({text:'乖乖等着就好了，别把这事儿忘了哦！'});",
        "playground.drawCharacter({name:'avg_npc_042'});playground.drawDialog({name:'Rosmontis',text:'嗯，我不会忘的！再见！'});",
        "playground.drawCharacter({name:'avg_npc_026'});playground.drawDialog({name:'Scout',text:'小心烫伤！'});",
        "playground.drawCharacter({});playground.drawDialog({text:'不会啦，自己的法术，我有分寸的啦！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:2});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_building_3',screenadapt:'coverall'});blocker.blocker({a:0,fadetime:2,block:true});voice.playMusic({intro:'m_dia_darkness02_intro', key:'m_dia_darkness02_loop', volume:0.8, crossfade:3, delay:0.5});playground.drawCharacter({name:'char_017_homura_5'});playground.drawDialog({name:'煌',text:'......怎么会变成你们先走一步？'});",
        "playground.drawDialog({name:'煌',text:'Ace，灰喉这样的非感染者，真的值得你去培育吗？'});",
        "playground.drawDialog({name:'煌',text:'我们能得到多少信任，又能奉献出多少信任？'});",
        "playground.drawDialog({name:'煌',text:'如果博士......'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_rungeneral', volume:0.9});delay(2);playground.Decision({options:[['你要说什么？！', '......', '如果我也不相信罗德岛的话？']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_017_homura_4'});playground.drawDialog({name:'煌',text:'要说你的坏话。当面说。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_017_homura_4'});playground.drawDialog({name:'煌',text:'如果博士已经来了，那就赶紧出来，别偷偷摸摸的，想躲在墙角不被发现是需要技术的。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_017_homura_4'});playground.drawDialog({name:'煌',text:'那我就把你吊在电线杆上做整合运动的诱饵。放心！不会死的，也就多中几箭吧，开个刀就好了！'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_017_homura_4'});playground.drawDialog({name:'煌',text:'......唉。'});",
        "playground.drawDialog({name:'煌',text:'唉！'});",
        "playground.drawDialog({name:'煌',text:'阿米娅让你来的？'});",
        "playground.drawDialog({name:'煌',text:'好了别说了。她就这点最好，也就这点最不好......'});",
        "playground.drawDialog({name:'煌',text:'我时时想做些什么提醒下她，让她想想“她还只是个孩子”这种事......每每都适得其反。'});",
        "playground.drawDialog({name:'煌',text:'只要她还领导着罗德岛，是不是就不可能把她那个小大人架子放下来？哎。'});",
        "playground.drawDialog({name:'煌',text:'当然，如果不是阿米娅让你来，而是你主动要来陪我什么的，我是不会反感的。'});",
        "playground.drawDialog({name:'煌',text:`......拖后腿？放心吧，带着三个你我都能行动自如，别说只一个Dr.${nickname}了。`});",
        "playground.drawDialog({name:'煌',text:'哎，你看那边。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});background.showImage({image:'bg_building_3',screenadapt:'coverall'});blocker.blocker({a:0,fadetime:1,block:true});playground.drawCharacter({});playground.drawDialog({name:'整合运动成员',text:'为什么不走！你们走啊！我们不想打了！'});",
        "playground.drawDialog({name:'近卫局成员',text:'唔......我们不会向感染者屈服！'});",
        "playground.drawDialog({name:'整合运动成员',text:'你们就几个人，为什么要这么做，有什么好处！'});",
        "playground.drawDialog({name:'近卫局成员',text:'这是职责！'});",
        "playground.drawDialog({name:'整合运动成员',text:'那就不要怪我们下手狠了！你没看到我们背后那些怪物吗！快些逃啊！！'});",
        "playground.drawDialog({name:'近卫局成员',text:'哪有什么怪物？！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});background.showImage({image:'bg_building_3',screenadapt:'coverall'});blocker.blocker({a:0,fadetime:1,block:true});playground.drawCharacter({name:'char_017_homura_4'});playground.drawDialog({name:'煌',text:'看到那批正在穿小巷的整合运动没？他们好像在进攻龙门人的阵线欸。那几个龙门人应该撑不太久......'});",
        "playground.drawDialog({name:'煌',text:'给我规划条路线呗。'});",
        "playground.Decision({options:[['正常的还是......']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_017_homura_8'});playground.drawDialog({name:'煌',text:'当然是最快的啦！'});",
        "playground.drawDialog({name:'煌',text:'别那个表情嘛。扛着你跳上跳下，这也不是第一次了。'});",
        "playground.drawDialog({name:'煌',text:'好！把那群整合运动揍趴下，顺带帮一把那些龙门人吧！'});",
        "delay(0.3);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];