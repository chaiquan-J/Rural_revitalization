<!-- 首页 -->
<template>
  <div>
    <div class="body_box">
      <div class="swiper_box">
        <!-- 轮播图 -->
        <swiper :options="swiperOption" ref="mySwiper" class="swiper_max">
          <!-- 内容 -->
          <swiper-slide v-for="item in swiperSrc" :key="item.id">
            <!-- <img :src="item.src" class="swpier_img" /> -->
            <div
              class="swpier_img"
              :style="{
                background: item.src,
                backgroundSize: item.backsize,
                backgroundPosition: item.backposi,
              }"
            ></div>
          </swiper-slide>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 乡村发展 -->
      <div class="develop_box">
        <div class="title_box">
          <router-link to="/Industrial" class="more">乡村发展</router-link>
        </div>
        <div class="conent_box">
          <div class="con_box" v-for="item in developimg" :key="item.id">
            <!-- 循环渲染图片 -->
            <div
              class="img_box"
              :style="{
                background: item.src,
                backgroundSize: item.backsize,
                backgroundPosition: item.backposi,
              }"
            >
              <!-- 遮罩层 -->
              <div class="name_box">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 乡村文化传承 -->
      <div class="culture_box">
        <div class="title_box">
          <router-link to="/Rural" class="more">乡村文化</router-link>
        </div>
        <div class="conent_box">
          <!-- interval为走马灯的类型 可选类型card -->
          <!-- height设置走马灯高度 -->
          <!-- trigger设置指示器的触发方式 可选值click -->
          <!-- indicator-position设置指示器位置 可选值outside/none -->
          <el-carousel
            :interval="4000"
            type="card"
            height="500px"
            class="culture-swiper"
            trigger="click"
            indicator-position="outside"
          >
            <!-- 通过循环渲染图片数组 -->
            <el-carousel-item v-for="item in cultureimg" :key="item.id">
              <!-- preview-src-list开启大图预览同时配置大图预览的图片数组 -->
              <el-image
                class="cul_img"
                style="width: 100%; height: 100%"
                :src="item.url"
                :preview-src-list="item.srcList"
                :fit="item.fit"
              >
              </el-image>
              <div class="culture_name" style="transition: all 0.5s !important">
                {{ item.name }}
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 乡村人才引进 -->
      <div class="talent_box">
        <div class="title_box">
          <router-link to="/Talent" class="more">人才引进</router-link>
        </div>
        <div class="conent_box">
          <div class="con_box" v-for="item in talent" :key="item.id">
            <div
              class="img_box"
              :style="{
                background: item.url,
                backgroundSize: item.backsize,
                backgroundPosition: item.backposi,
                backgroundColor: item.backcolor,
              }"
            ></div>
            <div class="text_box">
              <div class="name_box">{{ item.name }}</div>
              <div class="text_body">&nbsp;&nbsp;{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 振兴资讯 -->
      <div class="informa_box">
        <div class="title_box">
          <router-link to="/Information" class="more">振兴资讯</router-link>
        </div>
        <div class="conent_box">
          <div class="left_box">
            <div class="cont_box">
              <div class="img_box"></div>
              <div class="title">
                【新时代文明实践】崇左市“推进移风易俗·助力乡村振兴”
              </div>
              <div class="time">2023-5-20</div>
              <div class="text_box">
                为大力培育和践行社会主义核心价值观，弘扬志愿精神。5月18日，2023年崇左“推进移风易俗·助力乡村振兴”新时代文明实践志愿服务活动在宁明县寨安乡那练村举办。崇左市委宣传部副部长黄锦亮，县委常委、宣传部部长王新帅，崇左市特聘专家宣讲团农积坚参加活动。黄锦亮在致辞中强调，开展移风易俗、推进乡风文明，是得民心、顺民意的惠民工程，也是为群众办实事、办好事的“减负”工程，大家要共同努力，为全面建设面向东盟开放合作的现代化南疆国门城市贡献自己的一份力量。
              </div>
              <el-tag
                effect="plain"
                size="medium"
                style="
                  color: #00ab25;
                  border-color: #00ab25;
                  width: 70px;
                  text-align: center;
                "
                >新闻资讯</el-tag
              >
            </div>
          </div>
          <div class="right_box">
            <div class="cont_box" v-for="item in informa" :key="item.id">
              <div
                class="img_box"
                :style="{
                  background: item.url,
                  backgroundSize: item.backsize,
                }"
              ></div>
              <div class="min_right">
                <div class="head_box">
                  <div class="title">{{ item.title }}</div>
                  <div class="time">{{ item.time }}</div>
                </div>
                <div class="text_box">
                  {{ item.text }}
                </div>
                <el-tag
                  effect="plain"
                  size="medium"
                  style="
                    color: #00ab25;
                    border-color: #00ab25;
                    width: 70px;
                    text-align: center;
                  "
                  >新闻资讯</el-tag
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 轮播图
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 导入图片
// 产业发展
import developimg1 from "@/assets/img/developimg1.jpg";
import developimg2 from "@/assets/img/developimg2.png";
import developimg3 from "@/assets/img/developimg3.jpeg";
import developimg4 from "@/assets/img/developimg4.jpg";
import developimg9 from "@/assets/img/developimg9.png";
// 轮播
import swiperimg1 from "@/assets/img/bg-banner6.jpg";
import swiperimg2 from "@/assets/img/bg-banner7.jpg";
import swiperimg3 from "@/assets/img/bg-banner8.jpg";
import swiperimg4 from "@/assets/img/bg-banner9.jpg";
// 乡村文化
import cultureimg1 from "@/assets/img/dalangwu.jpg";
import cultureimg2 from "@/assets/img/huachaojie.jpg";
import cultureimg3 from "@/assets/img/jinshanjie.jpg";
import cultureimg4 from "@/assets/img/nongdongjie.jpg";
// 人才引进
import talentimg1 from "@/assets/img/weifuan.png";
import talentimg4 from "@/assets/img/qinchenghua.jpg";
import talentimg5 from "@/assets/img/nongxingguang.jpg";
import talentimg6 from "@/assets/img/yangqi.jpg";
// 振兴资讯
import Information1 from "@/assets/img/Information1.jpg";
import Information3 from "@/assets/img/Information3.jpg";
import Information4 from "@/assets/img/Information4.png";

export default {
  // 数据
  data() {
    return {
      //轮播图属性
      swiperOption: {
        //循环
        loop: true,
        //动画类型
        effect: "fade",
        // 默认显示
        initialSlide: 0,
        //自动切换
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        //分页器
        pagination: {
          el: ".swiper-pagination",
          // 内容很多的时候多的点会隐藏
          dynamicBullets: false,
          // 点击跳转
          clickable: true,
        },
      },
      // 轮播图
      swiperSrc: [
        {
          // 轮播图id，配置id做循环key
          id: 1,
          // 拼接引入的图片地址
          src: "url(" + swiperimg2 + ")" + " no-repeat",
          // 设置图片大小
          backsize: "100%",
          // 设置图片显示偏移
          backposi: "0% 0%",
        },
        {
          id: 2,
          src: "url(" + swiperimg1 + ")" + " no-repeat",
          backsize: "100%",
          backposi: "0% 0%",
        },
        {
          id: 3,
          src: "url(" + swiperimg3 + ")" + " no-repeat",
          backsize: "100%",
          backposi: "0% 0%",
        },
        {
          id: 4,
          src: "url(" + swiperimg4 + ")" + " no-repeat",
          backsize: "100%",
          backposi: "0% 0%",
        },
      ],
      // 乡村发展
      developimg: [
        {
          // 循环key
          id: 1,
          // 拼接图片地址
          src: "url(" + developimg2 + ")" + " no-repeat",
          // 设置图片大小
          backsize: "cover",
          // 设置图片位置偏移
          backposi: "center",
          // 图片名称
          text: "产业振兴",
        },
        {
          id: 2,
          src: "url(" + developimg9 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "50% 0%",
          text: "农业发展",
        },
        {
          id: 3,
          src: "url(" + developimg3 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "50% 0%",
          text: "改善教育",
        },
        {
          id: 4,
          src: "url(" + developimg4 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "50% 0%",
          text: "医疗振兴",
        },
        {
          id: 5,
          src: "url(" + developimg1 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "50% 0%",
          text: "文旅创新",
        },
      ],
      // 乡村文化
      cultureimg: [
        {
          id: 1,
          url: cultureimg1,
          srcList: [cultureimg1, cultureimg2, cultureimg3, cultureimg4],
          fit: "cover",
          name: "打榔舞",
        },
        {
          id: 2,
          url: cultureimg2,
          srcList: [cultureimg1, cultureimg2, cultureimg3, cultureimg4],
          fit: "cover",
          name: "花朝节",
        },
        {
          id: 3,
          url: cultureimg3,
          srcList: [cultureimg1, cultureimg2, cultureimg3, cultureimg4],
          fit: "cover",
          name: "金山节",
        },
        {
          id: 4,
          url: cultureimg4,
          srcList: [cultureimg1, cultureimg2, cultureimg3, cultureimg4],
          fit: "cover",
          name: "侬垌节",
        },
      ],
      // 人才引进
      talent: [
        {
          id: 1,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "0% 0%",
          backcolor: "#f2f2f2",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
        },
        {
          id: 2,
          name: "覃承华",
          url: "url(" + talentimg4 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "0% 0%",
          backcolor: "#f2f2f2",
          text: "2006年以来，发表与文学评论和教育教学相关的学术论文70余篇，出版学术专著2部。多次获得广西民族师范学院优秀教学成果奖、优秀科研成果奖一等奖、二等奖、三等奖等多项奖励。2016年，获得崇左市第二届优秀社会科学成果奖著作类三等奖（其中一、二等奖空缺）。在专业贡献方面，目前担任校级一流专业英语专业负责人，被广西民族大学、闽南师范大学等高校聘为兼职硕士研究生导师。",
        },
        {
          id: 3,
          name: "农星光",
          url: "url(" + talentimg5 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "0% 0%",
          backcolor: "#f2f2f2",
          text: "目前为艺术学院艺术学科带头人。长期担任《声乐》《合唱与指挥》课程教学。创造性地把地方民族音乐元素运用于教学，把广西地方戏曲、壮族多声部山歌与学校课堂教学联系起来开展教学，促进理论与实践的渗透和互动。主持了省级科研项目2项；主持校级教材项目、科研项目、教改项目多项；参与地厅级科研项目10余项。积极为地方文化和经济社会服务。",
        },
        {
          id: 4,
          name: "杨琪",
          url: "url(" + talentimg6 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "0% 0%",
          backcolor: "#f2f2f2",
          text: "任自治区教育厅基础教育教学指导委员会特聘专家、南宁师范大学硕士研究生导师、中国合唱协会会员、广西音乐家协会会员、广西音乐家协会合唱联盟理事。曾获2019年自治区级教学成果二等奖；主持广西教育科学规划2021年度专项课题；自治区党委统战部、自治区党委教育工委2021年度统战理论政策研究课题。指导学生个人和广西民族师范学院合唱团参加“孔雀奖”全国艺术院校声乐大赛、“红铜鼓”中国-东盟艺术教育成果展演、全区大学生艺术展演等国家级、省部级各类比赛20余项，其中获得一等奖4项、二等奖3项、三等奖5项，优秀作品奖3项，区级以上优秀指导教师2项。指导学生参加广西民族师范学院校级各类声乐大赛获一等奖9人次。指导学生举办毕业音乐会7场，师生音乐会1场。",
        },
      ],
      // 振兴资讯
      informa: [
        {
          id: 1,
          url: "url(" + Information1 + ")" + " no-repeat",
          backsize: "cover",
          title: "宁明县政协深入开展＂科教振兴 委员行动＂专项行动",
          time: "2023-05-16",
          text: "宁明县政协认真贯彻落实广西壮族自治区政协“科教振兴委员行动”动员部署会精神，立足早安排、早部署、早行动，全面深入开展“科教振兴委员行动”专项行动，全力助推科技振兴和教育振兴，认真服务当地经济社会高质量发展。在开展“科教振兴委员行动”专项行动中，宁明县政协注重采取“四大举措”，注意发挥重要阵地、重要平台、重要渠道的作用，把助力科教振兴作为围绕中心、服务大局履职尽责的重要内容，作为践行初心使命、强化责任担当的具体行动，指导辖区内市、县政协委员和相关单位、企业在助推科教振兴上建言资政，凝聚共识，贡献政协智慧和力量。",
        },
        {
          id: 2,
          url: "url(" + Information3 + ")" + " no-repeat",
          backsize: "cover",
          title: "广西：唱响“三字诀” 推动乡村产业振兴",
          time: "2023-05-10",
          text: "央广网南宁5月10日消息（记者黄月芬 通讯员李燕 申蓓）近年来，广西移动深刻把握乡村产业“土特产”的内涵，依托“网络+乡村振兴”模式，“专项帮扶+数智化建设”双管齐下，加快5G、云计算、大数据等新一代信息技术与农业经营管理深度融合，助力乡村产业振兴。",
        },
        {
          id: 3,
          url: "url(" + Information4 + ")" + " no-repeat",
          backsize: "cover",
          title: "崇左“法律明白人”千人大培训，集中“充电蓄能”助力乡村振兴",
          time: "2023-03-04",
          text: "“这次培训课程很丰富，既学习和掌握了更多的民法典知识和人民调解工作技巧，又对法律明白人工作有了更深的认知，对我今后开展基层工作有很大的帮助。”刚参加完乡村（社区）法律明白人培训班（崇左班）的天等县天等镇百灵村党总支部书记、主任零金奎说道。",
        },
      ],
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>

<style src="../assets/style/Home.css" scoped></style>