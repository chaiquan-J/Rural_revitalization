<!-- 乡村文化 -->
<template>
  <div>
    <div class="body_box">
      <div class="conent">
        <div class="head_img"></div>
        <div class="introduce">
          <div class="title_1">乡村文化的传承</div>
          <div class="text_1">
            随着当前我国社会主义新农村建设的不断加快，我们必须清楚的认识到传承和保护农村优秀传统文化对于弘扬和传播中华民族优秀文化具有着非常重要的现实意义。农村传统文化作为中华民族传统文化的重要组成部分，它不应该随着新农村的建设而被消亡。而应该在社会主义新农村建设中得以大力的发扬和传承。但当前我国在对农村文化的传承上出现了不少不和谐的声音，严重阻碍了农村传统文化的传承。比如在有的地区，农村传统文明出现了没落、有的地区出现了无人传承的现象。这些传统文化越来越的多变成了我们记忆中的景象。
          </div>
        </div>
        <!-- 循环渲染 -->
        <div class="con_box" v-for="conitem in conentdata" :key="conitem.id">
          <!-- 条件判断渲染 -->
          <div class="box" v-if="conitem.location == 1">
            <div class="right_box" style="margin-right: 30px">
              <div class="title_name">{{ conitem.title_text }}</div>
              <div class="text_box">
                {{ conitem.text }}
              </div>
            </div>
            <div class="left_box">
              <el-image
                style="width: 317px; height: 411px"
                :src="conitem.url1"
                :preview-src-list="conitem.srcList"
                :fit="conitem.fit"
              >
              </el-image>
              <el-image
                style="width: 647px; height: 411px; margin-left: 15px"
                :src="conitem.url2"
                :preview-src-list="conitem.srcList"
                :fit="conitem.fit"
              >
              </el-image>
            </div>
          </div>
          <div class="box" v-else>
            <div class="left_box">
              <el-image
                style="width: 887px; height: 100%"
                :src="conitem.url1"
                :preview-src-list="conitem.srcList"
                :fit="conitem.fit"
              >
              </el-image>
            </div>
            <div class="right_box" style="margin-left: 30px">
              <div class="title_name">{{ conitem.title_text }}</div>
              <div class="text_box">
                {{ conitem.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import dlw1 from "../assets/img/dlw1.jpg";
import dlw2 from "../assets/img/dlw2.jpg";
import dlw3 from "../assets/img/dlw3.jpg";
import jsj1 from "../assets/img/jsj.png";
import jsj2 from "../assets/img/jsj2.png";
import jsj3 from "../assets/img/jsj3.png";
import hsj1 from "../assets/img/hsj1.png";
import hsj2 from "../assets/img/hsj2.png";
import hsj3 from "../assets/img/hsj3.png";
import hsj4 from "../assets/img/hsj4.png";
import hsj5 from "../assets/img/hsj5.png";
import hsj6 from "../assets/img/hsj6.png";
import hsj7 from "../assets/img/hsj7.png";
import hsj8 from "../assets/img/hsj8.png";
import ndj1 from "../assets/img/ndj1.jpg";
import ndj2 from "../assets/img/ndj2.jpg";
import ndj3 from "../assets/img/ndj3.jpg";
import ndj4 from "../assets/img/ndj4.jpg";
import sjj1 from "../assets/img/sjj1.jpg";
import sjj2 from "../assets/img/sjj2.jpg";
import sjj3 from "../assets/img/sjj3.jpg";
import sjj4 from "../assets/img/sjj4.jpg";
import sjj5 from "../assets/img/sjj5.jpg";
import sjj6 from "../assets/img/sjj6.jpg";

export default {
  data() {
    return {
      conentdata: [
        {
          id: 1,
          // imgurl: [
          //   { id: 1, url: dlw1, fit: "cover" },
          //   { id: 2, url: dlw2, fit: "cover" },
          //   { id: 3, url: dlw3, fit: "cover" },
          // ],
          url1: dlw1,
          url2: dlw2,
          fit: "cover",
          // 点开大图 链接同上
          srcList: [dlw1, dlw2, dlw3],
          title_text: "打榔舞",
          text: "   “打榔舞”是广西天等县的一种壮族舞蹈，属于广西壮族自治区级非物质文化遗产名录项目，流传于世已经有1391年的历史，\n是居住在天等地区的壮族先民在唐代武德年间至北宋靖康年间为酬谢天公地神赐予的福泽，为祝愿年年风调雨顺，岁岁国泰民安所创造的用于酬神、还愿、祭祀、娱乐等活动的民间舞。",
          location: 1,
        },
        {
          id: 2,
          // imgurl: [
          //   { id: 1, url: jsj1, fit: "cover" },
          //   { id: 2, url: jsj2, fit: "cover" },
          //   { id: 3, url: jsj3, fit: "cover" },
          // ],
          url1: jsj1,
          fit: "cover",
          // 点开大图 链接同上
          srcList: [jsj1, jsj2, jsj3],
          title_text: "金山节",
          text: "   “金山节”是广西崇左市江州区左州镇的一个传统节日，主要内容为祈福、抢花炮、文艺演出、百家宴。时间为每年的农历二月十九。",
          location: 0,
        },
        {
          id: 3,
          // imgurl: [
          //   { id: 1, url: hsj1, fit: "cover" },
          //   { id: 2, url: hsj2, fit: "cover" },
          //   { id: 3, url: hsj3, fit: "cover" },
          //   { id: 4, url: hsj4, fit: "cover" },
          //   { id: 5, url: hsj5, fit: "cover" },
          //   { id: 6, url: hsj6, fit: "cover" },
          //   { id: 7, url: hsj7, fit: "cover" },
          //   { id: 8, url: hsj8, fit: "cover" },
          // ],
          url1: hsj1,
          url2: hsj2,
          fit: "cover",
          // 点开大图 链接同上
          srcList: [hsj1, hsj2, hsj3, hsj4, hsj5, hsj6, hsj7, hsj8],
          title_text: "花神节",
          text: "   花神节，花朝节的别称。也是传说中的“百花生日”、“花神生日”。因古时有“花王掌管人间生育”之说，故又是生殖崇拜的节日。花朝节又称 “挑菜节”。汉族传统节日。流行于东北、华北、华东、中南等地。农历二月初二举行，也有十月十二、十月十五元宵节的。节日期间，人们结伴到郊外游览赏花，称为“踏青”，姑娘们剪五色彩纸粘在花枝上，称为“赏红”。各地还有“装狮花”、“放花神灯”等风俗。在我国古代是一个十分重要的民间传统节日。",
          location: 1,
        },
        {
          id: 4,
          // imgurl: [
          //   { id: 1, url: ndj1, fit: "cover" },
          //   { id: 2, url: ndj2, fit: "cover" },
          //   { id: 3, url: ndj3, fit: "cover" },
          //   { id: 4, url: ndj4, fit: "cover" },
          // ],
          url1: ndj1,
          fit: "cover",
          // 点开大图 链接同上
          srcList: [ndj1, ndj2, ndj3, ndj4],
          title_text: "侬垌节",
          text: "   “侬垌节”是金龙镇边民长衣壮特有的节日。传统的“侬垌节”有祭祀天神，祈盼上苍来年赐福，寻求风调雨顺等之意。另外，开展民间文化交流活动，青年男女利用这次机会进行情歌对唱物色对象寻配偶，在“侬垌节”上选中对象后，回家后差媒去说亲。随着历史的变迁和经济的发展，这个具有浓厚民族特色的节日，赋予了新的内容，新的含义。",
          location: 0,
        },
        {
          id: 5,
          // imgurl: [
          //   { id: 1, url: sjj1, fit: "cover" },
          //   { id: 2, url: sjj2, fit: "cover" },
          //   { id: 3, url: sjj3, fit: "cover" },
          //   { id: 4, url: sjj4, fit: "cover" },
          //   { id: 5, url: sjj5, fit: "cover" },
          //   { id: 6, url: sjj6, fit: "cover" },
          // ],
          url1: sjj1,
          url2: sjj2,
          fit: "cover",
          // 点开大图 链接同上
          srcList: [sjj1, sjj2, sjj3, sjj4, sjj5, sjj6],
          title_text: "壮族霜降节",
          text: "   农历二十四节气（壮族霜降节）是中国少数民族地区一种特殊的民俗活动，主要流行于广西壮族地区的天等、大新、德保、靖西、那坡等县市，以及云南东部等地区，国家级非物质文化遗产之一。",
          location: 1,
        },
      ],
    };
  },
};
</script>
  
<style src="../assets/style/Rural.css" scoped></style>