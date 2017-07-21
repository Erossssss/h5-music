/**
 * Created by Administrator on 2017/4/5.
 */
$(document).ready(function () {
    let database = [          //乐库
        {
            id: 1,
            geshou: `南征北战`,
            name: `青藏高原`,
            src: `song/青藏高原.mp3`,
            zhuanji: `持续高温`,
            icon: `img/1.jpg`,
            bigimg: `img/7.jpg`
        },
        {
            id: 2,
            geshou: "李宗盛",
            name: `山丘`,
            src: `song/山丘.mp3`,
            zhuanji: `跨年演唱会`,
            icon: `img/2.jpg`,
            bigimg: `img/8.jpg`,
            lyrics:[
                {time:`00:00.00`,lyrics:`我爱歌词网 www.5ilrc.com`},
                {time:`00:01.00`,lyrics:`山丘 - 李宗盛`},
                {time:`00:05.00`,lyrics:`词：李宗盛`},
                {time:`00:07.00`,lyrics:`曲：李宗盛`},
                {time:`00:09.00`,lyrics:`歌词编辑：◎靖☆康◎`},
                {time:`00:12.00`,lyrics:`QQ：228846602`},
                {time:`00:15.00`,lyrics:``},
                {time:`00:19.59`,lyrics:`想说却还没说的 还很多`},
                {time:`00:28.97`,lyrics:`攒着是因为想写成歌`},
                {time:`00:33.91`,lyrics:`让人轻轻地唱着 淡淡地记着`},
                {time:`00:41.38`,lyrics:`就算终于忘了 也值了`},
                {time:`00:45.72`,lyrics:``},
                {time:`00:50.02`,lyrics:`说不定我一生涓滴意念`},
                {time:`00:54.40`,lyrics:`侥幸汇成河`},
                {time:`00:59.50`,lyrics:`然后我俩各自一端`},
                {time:`01:04.59`,lyrics:`望着大河弯弯 终于敢放胆`},
                {time:`01:11.53`,lyrics:`嘻皮笑脸 面对 人生的难`},
                {time:`01:18.68`,lyrics:`也许我们从未成熟`},
                {time:`01:22.46`,lyrics:`还没能晓得 就快要老了`},
                {time:`01:25.73`,lyrics:`尽管心里活着的还是那个年轻人`},
                {time:`01:29.97`,lyrics:``},
                {time:`01:33.35`,lyrics:`因为不安而频频回首`},
                {time:`01:35.86`,lyrics:`无知地索求 羞耻于求救`},
                {time:`01:39.25`,lyrics:`不知疲倦地翻越 每一个山丘`},
                {time:`01:44.85`,lyrics:`越过山丘 虽然已白了头`},
                {time:`01:51.92`,lyrics:`喋喋不休 时不我予的哀愁`},
                {time:`01:59.88`,lyrics:`还未如愿见着不朽`},
                {time:`02:02.66`,lyrics:`就把自己先搞丢`},
                {time:`02:05.66`,lyrics:`越过山丘 才发现无人等候`},
                {time:`02:12.30`,lyrics:`喋喋不休 再也唤不回温柔`},
                {time:`02:19.66`,lyrics:`为何记不得上一次是谁给的拥抱`},
                {time:`02:25.84`,lyrics:`在什么时候`},
                {time:`02:27.35`,lyrics:``},
                {time:`02:32.04`,lyrics:`我没有刻意隐藏 也无意让你感伤`},
                {time:`02:41.25`,lyrics:`多少次我们无醉不欢`},
                {time:`02:46.04`,lyrics:`咒骂人生太短 唏嘘相见恨晚`},
                {time:`02:53.14`,lyrics:`让女人把妆哭花了 也不管`},
                {time:`02:59.97`,lyrics:`遗憾我们从未成熟`},
                {time:`03:03.72`,lyrics:`还没能晓得 就已经老了`},
                {time:`03:07.21`,lyrics:`尽力却仍不明白`},
                {time:`03:09.16`,lyrics:`身边的年轻人`},
                {time:`03:11.92`,lyrics:``},
                {time:`03:14.47`,lyrics:`给自己随便找个理由`},
                {time:`03:17.35`,lyrics:`向情爱的挑逗 命运的左右`},
                {time:`03:20.59`,lyrics:`不自量力地还手 直至死方休`},
                {time:`03:26.22`,lyrics:`越过山丘 虽然已白了头`},
                {time:`03:33.61`,lyrics:`喋喋不休 时不我予的哀愁`},
                {time:`03:40.09`,lyrics:`还未如愿见着不朽`},
                {time:`03:43.93`,lyrics:`就把自己先搞丢`},
                {time:`03:46.82`,lyrics:`越过山丘 才发现无人等候`},
                {time:`03:53.20`,lyrics:`喋喋不休 再也唤不回了温柔`},
                {time:`04:00.75`,lyrics:`为何记不得上一次是谁给的拥抱`},
                {time:`04:06.74`,lyrics:`在什么时候`},
                {time:`04:10.89`,lyrics:``},
                {time:`04:37.96`,lyrics:`越过山丘 虽然已白了头`},
                {time:`04:44.60`,lyrics:`喋喋不休 时不我予的哀愁`},
                {time:`04:51.33`,lyrics:`还未如愿见着不朽`},
                {time:`04:54.87`,lyrics:`就把自己先搞丢`},
                {time:`04:57.93`,lyrics:`越过山丘 才发现无人等候`},
                {time:`05:04.36`,lyrics:`喋喋不休 再也唤不回了温柔`},
                {time:`05:11.58`,lyrics:`为何记不得上一次是谁给的拥抱`},
                {time:`05:17.91`,lyrics:`在什么时候`},
                {time:`05:22.02`,lyrics:`喋喋不休 时不我予的哀愁`},
                {time:`05:25.76`,lyrics:`向情爱的挑逗 命运的左右`},
                {time:`05:28.84`,lyrics:`不自量力地还手 直至死方休`},
                {time:`05:36.30`,lyrics:``},
                {time:`05:39.08`,lyrics:`为何记不得上一次是谁给的拥抱`},
                {time:`05:42.93`,lyrics:`在什么时候`},
                {time:`05:46.01`,lyrics:``}
            ]
        },
        {
            id: 3,
            geshou: `杨宗纬`,
            name: `那人男人`,
            src: `song/那个男人.mp3`,
            zhuanji: `原色`,
            icon: `img/3.jpg`,
            bigimg: `img/9.jpg`
        },
        {
            id: 4,
            geshou: `龙井说唱`,
            name: `夜三里`,
            src: `song/夜三里.mp3`,
            zhuanji: `龙井说唱3`,
            icon: `img/4.jpg`,
            bigimg: `img/10.jpg`
        },
        {
            id: 5,
            geshou: `谢安琪`,
            name: `钟无艳`,
            src: `song/钟无艳.mp3`,
            zhuanji: `3/8`,
            icon: `img/5.jpg`,
            bigimg: `img/11.jpg`
        }
    ];
    $.each(database,function (index,obj) {  //index必须写
        let li = $('<li>',{'id':obj.id});
        li.appendTo($('.in'));
        li.html(`<span class="iconfont"></span>      
      <span>${obj.name}</span>
      <span>${obj.geshou}</span>
      <span>${obj.zhuanji}</span>
      <span class="iconfont">&#xe71f;</span>`);
    });
    let n=0;
    let li=$('.in').children('li');
    let span=li[n].children[n];
    span.innerHTML=`&#xe601;`;
    let audio=document.querySelector('audio');
    $('.start').click(function () {
        audio.play();
        $('#shut').css('display','block');
        $('.start').css('display','none');
    });
    $('#shut').click(function () {
        audio.pause();
        $('#shut').css('display','none');
        $('.start').css('display','block');
    });
    audio.oncanplay=function () {
        $('.tiao1').css('width','100%')
    };
    audio.oncanplaythrough=function () {
        $('.tiao').click(function (e) {
            audio.currentTime=e.offsetX/$('.tiao').offsetWidth * audio.duration;
            audio.play();
        })
    };
    audio.ontimeupdate = function () {
        $('.time').children().eq(0).html(gettime(audio.currentTime));
        $('.time').children().eq(2).html(gettime(audio.duration));
        $('.circle').css({left:audio.currentTime / audio.duration * $('.tiao').outerWidth()-3 + `px`});
        $('.tiao2').css({width:audio.currentTime / audio.duration * $('.tiao').outerWidth()+ `px`});
    };
    function gettime(time) {
        let m = Math.trunc(time / 60);
        let s = Math.trunc(time) % 60 >= 10 ? Math.trunc(time) % 60 : `0` + Math.trunc(time) % 60;
        return m + `:` + s;
    }
    let baocun=1;
    $('.kaif').click(function () {
        if (audio.volume) {
            baocun = audio.volume;
            audio.volume = 0;
            $('#kai').css('display','none');
            $('#guan').css('display','block');
        } else {
            audio.volume = baocun;
            $('#kai').css('display','block');
            $('#guan').css('display','none');
        }
    });
    audio.onvolumechange = function () {
        let current = audio.volume;
        $('.mtiao1').css({width:current*$('.mtiao').outerWidth()+`px`});
        $('.mcircle').css({left:current*$('.mtiao').outerWidth()-3+`px`});
        $('.mtiao').click(function (e) {
            audio.volume = e.offsetX / $('.mtiao').outerWidth();
        })
    };
    let arr=$('.in').children().get();
    $(arr).dblclick(function () {
        $('.in').children().eq(n).removeClass('active');
        $(this).addClass('active');
        let num=database.findIndex((val)=>{
            return val.id==this.id
        });
        document.body.style.backgroundImage = `url(${database[num].icon})`;
        $('.two').css("backgroundImage",`url(${database[num].bigimg})`);
        $('.singer').html(`${database[num].geshou}-${database[num].name}`);
        audio.src = database[num].src;
        $('#shut').css('display','block');
        $('.start').css('display','none');
        // $('.in').children().eq(n).children().eq(0).html(`&#xe601;`)
        n=num;
        audio.play()
    });
    // console.log($('.in>li>span:last-child'));
    $('.in>li>span:last-child').click(function () {
        console.log($(this).parent())
    });
    $('.next').click(function () {
        $('.in').children().eq(n).removeClass('active');
        n++;
        if(n>=database.length){
            n=0
        }
        $('.in').children().eq(n).addClass('active');
        document.body.style.backgroundImage = `url(${database[n].icon})`;
        $('.two').css("backgroundImage",`url(${database[n].bigimg})`);
        $('.singer').html(`${database[n].geshou}-${database[n].name}`);
        audio.src = database[n].src;
        $('#shut').css('display','block');
        $('.start').css('display','none');
        audio.play()
    });
    $('.shang').click(function () {
        $('.in').children().eq(n).removeClass('active');
        n--;
        if(n<0){
            n=database.length-1
        }
        $('.in').children().eq(n).addClass('active');
        document.body.style.backgroundImage = `url(${database[n].icon})`;
        $('.two').css("backgroundImage",`url(${database[n].bigimg})`);
        $('.singer').html(`${database[n].geshou}-${database[n].name}`);
        audio.src = database[n].src;
        $('#shut').css('display','block');
        $('.start').css('display','none');
        audio.play()
    })



});