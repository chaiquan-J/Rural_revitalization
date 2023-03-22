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
              :fit="fit"
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
            <div class="img_box"></div>
          </div>
        </div>
        <div class="see_more">
          <router-link to="/" class="more">查看更多>></router-link>
        </div>
      </div>
      <!-- 乡村人才引进 -->
      <div class="talent_box">
        <div class="title_box">
          <span>人才引进</span>
        </div>
        <div class="conent_box">
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box">
              <div class="name_box">XXX</div>
              <div class="text_body">
                &nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
            </div>
          </div>
        </div>
        <div class="see_more">
          <router-link to="/" class="more">查看更多>></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 轮播图
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import developimg1 from "@/assets/Homeback.jpg";
import swiperimg1 from "@/assets/swiperimg.jpg";
import swiperimg2 from "@/assets/swiperimg2.jpg";

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
      // 轮播图链接
      swiperSrc: [
        { id: 1, src: swiperimg1 },
        { id: 2, src: swiperimg2 },
        { id: 3, src: swiperimg1 },
        { id: 4, src: swiperimg2 },
      ],
      // 乡村发展图片
      developimg: [
        { id: 1, src: developimg1 },
        { id: 2, src: developimg1 },
        { id: 3, src: developimg1 },
        { id: 4, src: developimg1 },
      ],
      // 乡村文化图片
      cultureimg: [
        { id: 1, src: "XXXXXXXX" },
        { id: 2, src: "XXXXXXXX" },
        { id: 3, src: "XXXXXXXX" },
        { id: 4, src: "XXXXXXXX" },
        { id: 5, src: "XXXXXXXX" },
        { id: 6, src: "XXXXXXXX" },
        { id: 7, src: "XXXXXXXX" },
        { id: 8, src: "XXXXXXXX" },
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