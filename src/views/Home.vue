<!-- 首页 -->
<template>
  <div>
    <div class="body_box">
      <!-- 返回顶部 -->
      <!-- <el-backtop>
        <div class="up_box">UP</div>
      </el-backtop> -->
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
            <div
              class="img_box"
              :style="{
                background: item.src,
                backgroundSize: item.backsize,
                backgroundPosition: item.backposi,
              }"
            >
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
          <el-carousel
            :interval="4000"
            type="card"
            height="500px"
            class="culture-swiper"
            trigger="click"
            indicator-position="outside"
          >
            <el-carousel-item v-for="item in cultureimg" :key="item.id">
              <el-image
                style="width: 100%; height: 100%"
                :src="item.url"
                :preview-src-list="item.srcList"
                :fit="item.fit"
              >
              </el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- <div class="see_more">
          <router-link to="/Rural" class="more">查看更多>></router-link>
        </div> -->
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
        <!-- <div class="see_more">
          <router-link to="/Talent" class="more">查看更多>></router-link>
        </div> -->
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
// import talentimg2 from "@/assets/img/zhengxin.png";
// import talentimg3 from "@/assets/img/lujiechun.png";
import talentimg4 from "@/assets/img/qinchenghua.jpg";
import talentimg5 from "@/assets/img/nongxingguang.jpg";
import talentimg6 from "@/assets/img/yangqi.jpg";
// import talentimg7 from "@/assets/img/liuyingjun.jpg";

export default {
  name: "carrousel",
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
          id: 1,
          src: "url(" + swiperimg2 + ")" + " no-repeat",
          backsize: "100%",
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
          id: 1,
          src: "url(" + developimg2 + ")" + " no-repeat",
          backsize: "cover",
          backposi: "center",
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
          // url: "url(" + cultureimg1 + ")" + " no-repeat",
          // 调整图片大小
          // backsize: "cover",
          // 调整图片位置
          // backposi: "40% 0%",
        },
        {
          id: 2,
          url: cultureimg2,
          srcList: [cultureimg1, cultureimg2, cultureimg3, cultureimg4],
          fit: "cover",
          // url: "url(" + cultureimg2 + ")" + " no-repeat",
          // backsize: "cover",
          // backposi: "60% 0%",
        },
        {
          id: 3,
          url: cultureimg3,
          srcList: [cultureimg1, cultureimg2, cultureimg3, cultureimg4],
          fit: "cover",
          // url: "url(" + cultureimg3 + ")" + " no-repeat",
          // backsize: "cover",
          // backposi: "40% 0%",
        },
        {
          id: 4,
          url: cultureimg4,
          srcList: [cultureimg1, cultureimg2, cultureimg3, cultureimg4],
          fit: "cover",
          // url: "url(" + cultureimg4 + ")" + " no-repeat",
          // backsize: "cover",
          // backposi: "40% 0%",
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