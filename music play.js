/**
 * Created by qiangxl on 2017/3/21.
 */
window.onload=function () {
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
      geshou: `李宗盛`,
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
  let singer = document.querySelector(`.singer`);    //歌手
  let two = document.querySelector(`.two`);   //放小图片的
  let ul = document.querySelector(`.in`);   //歌单的ul
  database.forEach(function (obj) {         //遍历乐库
    let li = document.createElement(`li`);    //在ul下创建新的li
    li.id = obj.id;               //将乐库歌曲id赋给li的id
    ul.appendChild(li);           //在ul末尾追加一个li作为子元素
    li.innerHTML = `<span class="iconfont"></span>      
      <span>${obj.name}</span>
      <span>${obj.geshou}</span>
      <span>${obj.zhuanji}</span>    
      <span class="iconfont">&#xe71f;</span>`   //在新建的li中添加元素
  });
  let n = 0;
  let li = ul.querySelectorAll(`li`);       //获取歌单ul下的所有li
  let span = li[n].children[n];             //获取第一个li下的第一个span
  span.innerHTML = `&#xe601;`;              //在span下添加文本节点
  let time = document.querySelector(`.time`);       //时间
  let circle = document.querySelector(`.circle`);   //进度球
  let tiao = document.querySelector(`.tiao`);       //进度条的底
  let tiao1 = document.querySelector(`.tiao1`);     //进度条的第二层
  let tiao2 = document.querySelector(`.tiao2`);     //进度条第三层
   audio = document.querySelector(`audio`);      //音频
  let shut = document.querySelector(`#shut`);       //暂停
  let shang = document.querySelector(`.shang`);     //上一首
  let start = document.querySelector(`.start`);     //开始
  let next = document.querySelector(`.next`);       //下一首
  start.onclick = function () {       //给开始添加点击事件
    audio.play();                     //audio播放
    shut.style.display = `block`;     //暂停出现
    start.style.display = `none`;     //开始消失
  };
  shut.onclick = function () {        //给暂停添加点击事件
    audio.pause();                    //audio暂停
    shut.style.display = `none`;      //暂停消失
    start.style.display = `block`;    //开始出现
  };
  audio.oncanplay = function () {     //当音视频加载完成
    tiao1.style.width = `100%`;       //进度条第二层宽度变为100%
  };
  audio.oncanplaythrough = function () {
    tiao.onclick = function (e) {
      audio.currentTime = e.offsetX / tiao.offsetWidth * audio.duration;
      audio.play()
    }
  };
  audio.ontimeupdate = function () {          //audio/video播放位置发生改变时触发
    let nowtime = gettime(audio.currentTime); //格式化当前播放位置时间
    let endtime = gettime(audio.duration);    //格式化音频总时间
    time.children[0].innerHTML = `${nowtime}`; //将当前时间赋给time1
    time.children[2].innerHTML = `${endtime}`; //将总时间赋给time2
    circle.style.left = audio.currentTime / audio.duration * tiao.offsetWidth - 3 + `px`;   //计算进度球位置
    tiao2.style.width = audio.currentTime / audio.duration * tiao.offsetWidth + `px`;       //计算进度条位置
  };
//格式化时间格式（将秒转化为分钟）
  function gettime(time) {
    //let m=Math.trunc(time/60)>=10? Math.trunc(time/60):`0`+Math.trunc(time/60);
    let m = Math.trunc(time / 60);    //分钟数
    let s = Math.trunc(time) % 60 >= 10 ? Math.trunc(time) % 60 : `0` + Math.trunc(time) % 60;      //秒数
    return m + `:` + s;   //返回转换好的时间
  }

//保存音量
  let kaif = document.querySelector(`.kaif`);   //
  let kai = document.querySelector(`#kai`);
  let guan = document.querySelector(`#guan`);
  let mcircle = document.querySelector(`.mcircle`);
  let mtiao = document.querySelector(`.mtiao`);
  let mtiao1 = document.querySelector(`.mtiao1`);
  let baocun = 1;   //初始音量
  kaif.onclick = function () {
    if (audio.volume) {       //有音量时
      baocun = audio.volume;  //将当前音量保存
      audio.volume = 0;       //将音量关掉
      kai.style.display = `none`;
      guan.style.display = `block`;
    } else {                  //否则
      audio.volume = baocun;  //将保存音量返回
      kai.style.display = `block`;
      guan.style.display = `none`;
    }
  };
  audio.onvolumechange = function () {    //当音量改变时触发
    let current = audio.volume;           //获取音视频音量
    mtiao1.style.width = current * mtiao.offsetWidth + `px`;
    mcircle.style.left = current * mtiao.offsetWidth - 3 + `px`;
    mtiao.onclick = function (e) {        //点击时改变音量
      audio.volume = e.offsetX / mtiao.offsetWidth
    }
  };
  [...ul.children].forEach((val, index, arr) => {   //遍历li
    val.ondblclick = function () {                  //给当前li创建双击事件
      ul.children[n].children[0].innerHTML = ``;    //将ul下当前li的第一个子元素内容设为为空
      val.children[0].innerHTML = `&#xe601;`;       //设置将当前内容
      ul.children[n].classList.remove(`active`);    //移除当前li的类名
      val.classList.add(`active`);                  //添加类名
      let num = database.findIndex((val) => {   //找到并返回第一个的下标
        return val.id == this.id;           //将歌曲id设置给li并返回
      });
      document.body.style.backgroundImage = `url(${database[num].icon})`;
      two.style.backgroundImage = `url(${database[num].bigimg})`;
      singer.innerHTML = `${database[num].geshou}-${database[num].name}`;
      audio.src = database[num].src;
      n = num;
      audio.play()
    };
    //删除
    let spans = val.children[val.children.length - 1];    //找到li下最后一个span
    spans.onclick = function (e) {
      e.stopPropagation();      //阻止当前事件流
      database.forEach((obj, index) => {
        let shan = spans.parentNode;    //通过span找到父元素li
        if (spans.parentNode.className == `active`) {   //当父元素类名为active
          return        //跳出
        }
        if (n == index) {
          return
        }
        if (val.id == obj.id) {
          ul.removeChild(shan);     //移除li
          database.splice(index, 1)
        }
        if (n > index) {
          n--;
        }
      })
    }
  })
  next.onclick = function () {      //下一首事件
    ul.children[n].classList.remove(`active`);
    n++;
    if (n >= database.length) {
      n = 0
    }
    ul.children[n].classList.add(`active`);
    let num = database.findIndex((val) => {
      return val.id == this.id;

    });
    document.body.style.backgroundImage = `url(${database[n].icon})`;
    two.style.backgroundImage = `url(${database[n].bigimg})`;
    singer.innerHTML = `${database[n].geshou}-${database[n].name}`;
    audio.src = database[n].src;
    audio.play()
  };
  shang.onclick = function () {       //上一首事件
    ul.children[n].classList.remove(`active`);
    n--;
    if (n < 0) {
      n = database.length - 1
    }
    ul.children[n].classList.add(`active`);
    let num = database.findIndex((val) => {
      return val.id == this.id;

    });
    document.body.style.backgroundImage = `url(${database[n].icon})`;
    two.style.backgroundImage = `url(${database[n].bigimg})`;
    singer.innerHTML = `${database[n].geshou}-${database[n].name}`;
    audio.src = database[n].src;
    audio.play()
  };
  //引入的canvas
  var audio = document.getElementById('audio1');
  console.log(audio)
  var ctx = new AudioContext();
  var analyser = ctx.createAnalyser();
  var audioSrc = ctx.createMediaElementSource(audio);
// we have to connect the MediaElementSource with the analyser
  audioSrc.connect(analyser);
  analyser.connect(ctx.destination);
// we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
// analyser.fftSize = 64;
// frequencyBinCount tells you how many values you'll receive from the analyser
  var frequencyData = new Uint8Array(analyser.frequencyBinCount);

// we're ready to receive some data!
  var canvas = document.getElementById('canvas'),
    cwidth = canvas.width,
    cheight = canvas.height - 2,//底座的高度
    meterWidth = 10, //width of the meters in the spectrum
    gap = 2, //gap between meters
    capHeight = 2,
    capStyle = '#fff',
    meterNum = 800 / (10 + 2), // meter的数量
    capYPositionArray = []; ////存储caps的垂直位置
  ctx = canvas.getContext('2d');
    gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(1, 'rgba(255,255,255,0.5)');
  gradient.addColorStop(0.5, '#ff1111');
  gradient.addColorStop(0, '#f04783');
// loop
  function renderFrame() {
    var array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    var step = Math.round(array.length / meterNum); //sample limited data from the total array
    ctx.clearRect(0, 0, cwidth, cheight);
    for (var i = 0; i < meterNum; i++) {
      var value = array[i * step];
      if (capYPositionArray.length < Math.round(meterNum)) {
        capYPositionArray.push(value);
      };
      ctx.fillStyle = capStyle;
      //draw the cap, with transition effect
      if (value < capYPositionArray[i]) {
        ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
      } else {
        ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
        capYPositionArray[i] = value;
      };
      ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
      ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
    }
    requestAnimationFrame(renderFrame);
  }
  renderFrame();


}


