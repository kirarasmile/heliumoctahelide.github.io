var story = [
    [
        "bg_wild_a",
        "char_002_amiya_7",
        "char_136_hsguma",
        "char_1504_cqbw",
        "char_010_chen_2",
        "char_010_chen_1",
        "char_002_amiya_6",
        "char_010_chen_4",
        "char_002_amiya_1",
        "bg_1_call"
    ],
    [
        "m_sys_loading_loop",
        "m_sys_loading_intro",
        "p_imp_grenade_n",
        "d_avg_phone"
    ],
    [
        "background.showImage({image:'bg_wild_a', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_sys_loading_intro', key:'m_sys_loading_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'后撤！重整队形！'});",
        "playground.drawDialog({name:'阿米娅',text:'让他们走吧！'});",
        "playground.drawDialog({name:'阿米娅',text:'再这样下去，我们的队伍会被敌人分隔！'});",
        "playground.drawDialog({name:'阿米娅',text:'如果敌人还有后续的战力增援，后果不堪设想......'});",
        "playground.drawDialog({name:'阿米娅',text:'这些整合运动......不是在针对我们！'});",
        "playground.drawDialog({name:'阿米娅',text:'优先保证我方干员的安全！'});",
        "playground.drawDialog({name:'阿米娅',text:'狙击干员，暂时停止对撤退的整合运动的攻击！'});",
        "playground.drawDialog({name:'阿米娅',text:'优先支援星熊警官！'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'真烦人！'});",
        "playground.drawCharacter({name:'char_1504_cqbw'});playground.drawDialog({name:'W',text:'不错不错，居然被你撑住了~'});",
        "playground.drawDialog({name:'W',text:'不过，你还能撑几发呢？'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'那要看你的命有多硬了！'});",
        "playground.drawDialog({name:'星熊',text:'——————老陈！快！'});",
        "playground.drawCharacter({name:'char_010_chen_2'});blocker.blocker({a:0.3, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});blocker.blocker({a:0,fadetime:0.1, block:true});playground.drawDialog({name:'陈',text:'包围那个女人！'});",
        "playground.drawCharacter({name:'char_1504_cqbw'});playground.drawDialog({name:'W',text:'哦哦，近卫局的后援吗？'});",
        "playground.drawCharacter({name:'char_010_chen_2'});playground.drawDialog({name:'陈',text:'放下你的武器！'});",
        "playground.drawCharacter({name:'char_1504_cqbw', name2:'char_010_chen_1', focus:1});playground.drawDialog({name:'W',text:'陈长官，我们又见面了~'});",
        "playground.drawCharacter({name:'char_1504_cqbw', name2:'char_010_chen_1', focus:2});playground.drawDialog({name:'陈',text:'油腔滑调不能救你的命。'});",
        "playground.drawDialog({name:'陈',text:'你对龙门做的，我会加倍在你身上讨回来。'});",
        "playground.drawCharacter({name:'char_1504_cqbw', name2:'char_010_chen_1', focus:1});playground.drawDialog({name:'W',text:'哎呀~真可怕~'});",
        "playground.drawDialog({name:'W',text:'但我这次不是来找你的。'});",
        "playground.drawDialog({name:'W',text:'阿米娅，接好~'});",
        "playground.drawCharacter({name:'char_1504_cqbw', name2:'char_002_amiya_6', focus:2});playground.drawDialog({name:'阿米娅',text:'我？这是......移动电话......？'});",
        "playground.drawDialog({name:'W',text:'是的，有人想和你说点事~'});",
        "playground.drawCharacter({name:'char_1504_cqbw', name2:'char_002_amiya_6', focus:2});playground.drawDialog({name:'阿米娅',text:'————————？！'});",
        "playground.drawCharacter({name:'char_1504_cqbw', name2:'char_002_amiya_6', focus:1});playground.drawDialog({name:'W',text:'好，这样我的任务就完成啦。'});",
        "playground.drawDialog({name:'W',text:'另外这个，不是给阿米娅的，而是送给你们的。'});",
        "playground.drawDialog({name:'W',text:'后会有期咯~'});",
        "playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'小心！'});",
        "background.cameraShake({duration:1, xstrength:14, ystrength:20, vibrato:30, randomness:90, fadeout:false});blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});voice.playSound({key:'p_imp_grenade_n', volume:0.7});blocker.blocker({a:0, fadetime:0.3, block:false});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'——近距离爆破——？！'});",
        "playground.drawDialog({name:'阿米娅',text:'不对，是闪光弹！'});",
        "playground.drawDialog({name:'阿米娅',text:'别被她迷惑——'});",
        "playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'——来不及了。'});",
        "playground.drawDialog({name:'陈',text:'已经让她跑了。'});",
        "playground.drawDialog({name:'陈',text:'跑起来可也真的是快，趁着近卫局还没稳定阵形，一瞬间就溜走了。'});",
        "playground.drawDialog({name:'陈',text:'你也要小心你手上的东西，如果是炸弹的话......'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......这个，倒是普通的移动电话没错......'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'只是......莫非......'});",
        "playground.drawDialog({name:'阿米娅',text:'——————'});",
        "playground.drawDialog({name:'阿米娅',text:'喂？'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, block:true, fadetime:0.5});playground.drawCharacter({fadetime:0});background.showImage({fadetime:0});blocker.blocker({a:0, fadetime:0.5, block:true});delay(0.5);playground.drawDialog({text:'————'});",
        "voice.playSound({key:'d_avg_phone'});delay(2);playground.drawImage({image:'bg_1_call', fadetime:1, xscale:1, yscale:1, block:true});delay(0.6);playground.drawDialog({name:'米莎',text:'你是......'});",
        "playground.drawDialog({name:'米莎',text:'阿米娅......？'});",
        "playground.drawDialog({name:'阿米娅',text:'米莎！告诉我你在哪！我——'});",
        "playground.drawDialog({name:'米莎',text:'阿米娅......'});",
        "playground.drawDialog({name:'米莎',text:'......'});",
        "playground.clearDialog();playground.drawImage({fadetime:0.6, block:true});playground.drawDialog({name:'男人的声音',text:'————振作点！别睡！你不能睡！！'});",
        "playground.drawDialog({name:'少女的声音',text:'......优先......处理重伤人员！！给他输血！！快啊！！'});",
        "playground.drawDialog({name:'老人的声音',text:'米莎！你怎么在这！让一让......不，你，你快去跟——'});",
        "playground.drawDialog({name:'青年的声音',text:'......可恶......为什么......明明都是感染者......'});",
        "playground.drawDialog({name:'青年的声音',text:'罗德岛......这些家伙为什么会做这种事？！'});",
        "playground.drawDialog({name:'女性的声音',text:'......我们从一开始就被他们遗弃了！！没有出路的......没有......！'});",
        "playground.drawDialog({name:'男孩的声音',text:'别死！别死啊！我们说好，说好要一起回家的......！'});",
        "playground.drawDialog({name:'女孩的声音',text:'......呜......哥哥......不......'});",
        "playground.clearDialog();delay(0.5);playground.drawImage({image:'bg_1_call', fadetime:1, xscale:1, yscale:1, block:true});playground.drawDialog({name:'米莎',text:'听到了吗，这些声音......？'});",
        "playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:'是整合运动的感染者......吗？'});",
        "playground.drawDialog({name:'米莎',text:'我想起来了。'});",
        "playground.drawDialog({name:'米莎',text:'不，我一直忘不掉。我只是......不愿想起。'});",
        "playground.drawDialog({name:'米莎',text:'没错，是整合运动毁了我们的家，我爸爸也......'});",
        "playground.drawDialog({name:'米莎',text:'但......这是我们，自作自受。'});",
        "playground.drawDialog({name:'米莎',text:'当年，我眼睁睁地看着我的弟弟被拖走......他哭着叫我的名字，我却转过头——'});",
        "playground.drawDialog({name:'米莎',text:'——躲进了自己的房间。'});",
        "playground.drawDialog({name:'米莎',text:'当他又来找我的时候......他放弃了许多东西。'});",
        "playground.drawDialog({name:'米莎',text:'他依然爱着我，我却害怕了，逃跑了......'});",
        "playground.clearDialog();delay(1);playground.drawDialog({name:'米莎',text:'但我明白。'});",
        "playground.drawDialog({name:'米莎',text:'这一切只是要让当时迫害他们的人，都尝尝感染者遭受的痛苦。'});",
        "playground.drawDialog({name:'米莎',text:'乌萨斯人......我......都不过是自作自受。'});",
        "playground.drawDialog({name:'米莎',text:'如今我是感染者了。'});",
        "playground.drawDialog({name:'米莎',text:'......也到了，我该偿还自己罪孽的时候了。'});",
        "playground.drawDialog({name:'阿米娅',text:'米莎，别做傻事！'});",
        "playground.drawDialog({name:'阿米娅',text:'无论过去的人们怎么对待感染者，只要你现在改变——'});",
        "playground.drawDialog({name:'米莎',text:'没用的。'});",
        "playground.drawDialog({name:'米莎',text:'我又能，改变得了什么呢？'});",
        "playground.drawDialog({name:'米莎',text:'我太清楚了。'});",
        "playground.drawDialog({name:'米莎',text:'因为我，就是当年视而不见的人之一......'});",
        "playground.drawDialog({name:'米莎',text:'成为感染者之后，我看得......更加清楚了。'});",
        "playground.drawDialog({name:'米莎',text:'普通人是怎么对待感染者的，感染者也会那样去对待普通人。'});",
        "playground.drawDialog({name:'米莎',text:'这是他们应得的。'});",
        "playground.drawDialog({name:'阿米娅',text:'不......'});",
        "playground.drawDialog({name:'米莎',text:'这一切，不过是我自己种下的残忍种子所结的恶果......'});",
        "playground.drawDialog({name:'米莎',text:'我理应受到这样的折磨。'});",
        "playground.clearDialog();delay(1);playground.drawDialog({name:'米莎',text:'我就该是感染者，我就该被惩罚——'});",
        "playground.drawDialog({name:'米莎',text:'但是，为什么，为什么——'});",
        "playground.drawDialog({name:'米莎',text:'他明明，什么错也没有啊？！'});",
        "playground.drawDialog({name:'米莎',text:'他只不过是突然被发现是感染者而已......'});",
        "playground.drawDialog({name:'米莎',text:'当时的他，才刚刚开始要我帮他写作业啊！'});",
        "playground.drawDialog({name:'米莎',text:'如果我，如果那时候，保护了他的话......'});",
        "playground.drawDialog({name:'阿米娅',text:'米莎！冷静点！'});",
        "playground.drawDialog({name:'阿米娅',text:'伤害无辜市民的并不是你！这些都不是你的错！'});",
        "playground.drawDialog({name:'米莎',text:'在最开始，谁又不是无辜的呢？！！'});",
        "playground.drawDialog({name:'阿米娅',text:'——'});",
        "playground.clearDialog();delay(1);playground.drawDialog({name:'米莎',text:'错的，错的就只有感染者这个身份而已......'});",
        "playground.drawDialog({name:'米莎',text:'如果这只是互相报复的话，是谁，是谁导致了这悲剧呢......！'});",
        "playground.drawDialog({name:'米莎',text:'如果乌萨斯没有把感染者当作可怕的牲畜一样对待......'});",
        "playground.drawDialog({name:'米莎',text:'又有谁会恨乌萨斯入骨呢！'});",
        "playground.drawDialog({name:'米莎',text:'为什么感染者，就一定要遭遇这些折磨呢！！'});",
        "playground.drawDialog({name:'阿米娅',text:'米莎......'});",
        "playground.drawDialog({name:'阿米娅',text:'碎骨已经死了，你可以回到我们这里，我们一定会......'});",
        "playground.drawDialog({name:'米莎',text:'——'});",
        "playground.drawDialog({name:'米莎',text:'是，是啊。'});",
        "playground.drawDialog({name:'米莎',text:'碎骨已经死了。'});",
        "playground.drawDialog({name:'米莎',text:'......阿米娅。我已经有了答案......'});",
        "playground.drawDialog({name:'米莎',text:'我是一个感染者。'});",
        "playground.drawDialog({name:'米莎',text:'我站在感染者这边。'});",
        "playground.drawDialog({name:'阿米娅',text:'不————'});",
        "playground.drawDialog({name:'米莎',text:'是的，阿米娅，你也是感染者......'});",
        "playground.drawDialog({name:'米莎',text:'你应该能够理解。'});",
        "playground.drawDialog({name:'阿米娅',text:'是的，我也是......罗德岛大家和我，都知道你的想法......我明白的。'});",
        "playground.drawDialog({name:'阿米娅',text:'但是，米莎，仅仅是将自己从普通人置换到感染者的身份中，是什么都不会改变的！'});",
        "playground.drawDialog({name:'阿米娅',text:'请等等我，我立刻来找你！'});",
        "playground.drawDialog({name:'米莎',text:'别过来。'});",
        "playground.drawDialog({name:'阿米娅',text:'——米莎！你在——'});",
        "playground.drawDialog({name:'米莎',text:'你说得对，阿米娅，你说得对......我只是愧疚而已。我只是......太过软弱了而已。'});",
        "playground.drawDialog({name:'米莎',text:'但我已经决定了。'});",
        "playground.drawDialog({name:'米莎',text:'即使只有一步，我也要......踏出这一步。'});",
        "playground.drawDialog({name:'米莎',text:'对不起，阿米娅，对不起......'});",
        "playground.drawDialog({name:'米莎',text:'整合运动是感染者......'});",
        "playground.drawDialog({name:'米莎',text:'他们，也是感染者啊......'});",
        "playground.drawDialog({name:'米莎',text:'再见了......'});",
        "playground.drawDialog({name:'阿米娅',text:'米莎？米莎？！米莎！！'});",
        "playground.drawDialog({name:'阿米娅',text:'......'});"
    ]
];