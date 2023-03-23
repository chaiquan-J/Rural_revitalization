<!-- 首页 -->
<template>
  <div>
    <div class="body_box">
      <div class="swiper_box">
        <!-- 轮播图 -->
        <swiper :options="swiperOption" ref="mySwiper" class="swiper_max">
          <!-- 内容 -->
          <swiper-slide v-for="item in swiperSrc" :key="item.id">
            <img :src="item.src" class="swpier_img" />
          </swiper-slide>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 乡村发展 -->
      <div class="develop_box">
        <div class="title_box">
          <span>乡村发展</span>
        </div>
        <div class="conent_box">
          <div class="con_box" v-for="item in developimg" :key="item.id">
            <el-image
              style="width: 100%; height: 100%"
              :src="item.src"
              :fit="item.fit"
            ></el-image>
          </div>
        </div>
        <div class="see_more">
          <router-link to="/Industrial" class="more">查看更多>></router-link>
        </div>
      </div>
      <!-- 乡村文化传承 -->
      <div class="culture_box">
        <div class="title_box">
          <span>乡村文化</span>
        </div>
        <div class="conent_box">
          <div class="con_box" v-for="item in cultureimg" :key="item.id">
            <!-- <div class="img_box"></div>
            <div class="text_box">
              <p>XXXXXXXX</p>
              <p></p>
            </div> -->
            <div
              class="img_box"
              :style="{
                background: item.url,
                backgroundSize: item.backsiza,
                backgroundPosition: item.backposi,
              }"
            ></div>
          </div>
        </div>
        <div class="see_more">
          <router-link to="/Rural" class="more">查看更多>></router-link>
        </div>
      </div>
      <!-- 乡村人才引进 -->
      <div class="talent_box">
        <div class="title_box">
          <span>人才引进</span>
        </div>
        <div class="conent_box">
          <div class="con_box" v-for="item in talent" :key="item.id">
            <div
              class="img_box"
              :style="{
                background: item.url,
                backgroundSize: item.backsiza,
                backgroundPosition: item.backposi,
              }"
            ></div>
            <div class="text_box">
              <div class="name_box">{{ item.name }}</div>
              <div class="text_body">&nbsp;&nbsp;{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="see_more">
          <router-link to="/Talent" class="more">查看更多>></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 轮播图
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import developimg1 from "@/assets/img/developimg1.jpg";
import swiperimg1 from "@/assets/img/swiperimg.jpg";
import swiperimg2 from "@/assets/img/swiperimg2.jpg";
import talentimg1 from "@/assets/img/weifuan.png";
import talentimg2 from "@/assets/img/zhengxin.png";
import cultureimg1 from "@/assets/img/dalangwu.jpg";
import cultureimg2 from "@/assets/img/huachaojie.jpg";
import cultureimg3 from "@/assets/img/jinshanjie.jpg";
import cultureimg4 from "@/assets/img/nongdongjie.jpg";

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
        { id: 1, src: swiperimg1 },
        { id: 2, src: swiperimg2 },
        { id: 3, src: swiperimg1 },
        { id: 4, src: swiperimg2 },
      ],
      // 乡村发展
      developimg: [
        { id: 1, src: developimg1, fit: "fit" },
        { id: 2, src: developimg1, fit: "fit" },
        { id: 3, src: developimg1, fit: "fit" },
        { id: 4, src: developimg1, fit: "fit" },
      ],
      // 乡村文化
      cultureimg: [
        {
          id: 1,
          url: "url(" + cultureimg1 + ")" + " no-repeat",
          // 调整图片大小
          backsiza: "cover",
          // 调整图片位置
          backposi: "40% 0%",
          src: "XXXXXXXX",
        },
        {
          id: 2,
          url: "url(" + cultureimg2 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "60% 0%",
          src: "XXXXXXXX",
        },
        {
          id: 3,
          url: "url(" + cultureimg3 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "40% 0%",
          src: "XXXXXXXX",
        },
        {
          id: 4,
          url: "url(" + cultureimg4 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "40% 0%",
          src: "XXXXXXXX",
        },
      ],
      // 人才引进
      talent: [
        {
          id: 1,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
        },
        {
          id: 2,
          name: "韦福安",
          url: "url(" + talentimg2 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "郑欣是崇左市科学技术情报研究所办公室副主任。作为一名党员干部，她主动担当作为，在担任江州区江州镇保安村第一书记期间，投身脱贫攻坚一线，带领全村党员干部和广大群众奋勇拼搏、攻坚克难，打造出抓党建促脱贫攻坚、乡村振兴、基层治理的示范品牌——“叫豆经验”，实现驻点村脱贫摘帽，并通过建立公众参与的乡村治理体系帮助驻点村摘得“全国乡村治理示范村”的称号。她数年如一日，兢兢业业地投入到科技服务工作中，贯彻落实创新驱动发展战略，推动科技振兴工作提速增效，协调、保障各项工作执行，助力边疆民族地区科技振兴。",
        },
        {
          id: 3,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
        },
        {
          id: 4,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
        },
        {
          id: 5,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
        },
        {
          id: 6,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
        },
        {
          id: 7,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
        },
        {
          id: 8,
          name: "韦福安",
          url: "url(" + talentimg1 + ")" + " no-repeat",
          backsiza: "cover",
          backposi: "0% 0%",
          text: "曾任历史文化与旅游学院院长，任职期间，长期负责学科专业建设与科研服务地方等工作。在专业建设方面：任广西高校本科旅游管理专业教学指导委员会委员。完成自治区优势特色专业建设项目（旅游管理），完成自治区重点培育学科（旅游管理）建设项目；旅游管理专业被列入自治区硕点建设项目；主持的“三本位、四融通：旅游管理专业人才培养路径创新与实践”获2019年自治区教学成果二等奖；旅游管理专业2019年列入自治区一流专业。",
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