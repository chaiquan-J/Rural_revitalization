<!-- 首页 -->
<template>
  <div>
    <div class="body_box">
      <div class="swiper_box">
        <!-- 轮播图 -->
        <swiper :options="swiperOption" ref="mySwiper" class="swiper_max">
          <!-- 内容 -->
          <swiper-slide>
            <div class="swpier_img">1</div>
          </swiper-slide>
          <swiper-slide>
            <div class="swpier_img">2</div>
          </swiper-slide>
          <swiper-slide>
            <div class="swpier_img">3</div>
          </swiper-slide>
          <swiper-slide>
            <div class="swpier_img">4</div>
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
          <div class="con_box"></div>
          <div class="con_box"></div>
          <div class="con_box"></div>
          <div class="con_box"></div>
        </div>
      </div>
      <!-- 乡村文化传承 -->
      <div class="culture_box">
        <div class="title_box">
          <span>乡村文化</span>
        </div>
        <div class="conent_box">
          <div class="con_box">
            <div class="img_box"></div>
            <div class="text_box"></div>
          </div>
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
      </div>
      <!-- 乡村振兴政策 -->
      <div class="policy_box">
        <div class="title_box">
          <span>振兴政策</span>
        </div>
      </div>
      <!-- 底部 -->
      <footer></footer>
    </div>
  </div>
</template>

<script>
// 轮播图
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

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

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.body_box {
  width: 100%;
  height: 500%;
  position: absolute;
  top: 0;
  transition: all 0.3s ease;

  /**
   * 轮播
   */
  .swiper_box {
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #ae1414;

    /**
     * 轮播图片盒子
     */
    .swiper_max {
      height: 100%;
      width: 100%;
      background-color: #000;

      :nth-child(2) {
        .swpier_img {
          height: 100%;
          width: 100%;
          background-color: #24cfdb;
        }
      }

      :nth-child(3) {
        .swpier_img {
          height: 100%;
          width: 100%;
          background-color: #20b702;
        }
      }

      :nth-child(4) {
        .swpier_img {
          height: 100%;
          width: 100%;
          background-color: #0214b7;
        }
      }

      :nth-child(5) {
        .swpier_img {
          height: 100%;
          width: 100%;
          background-color: #a8b702;
        }
      }
    }
  }

  /**
     * 标题
     */
  .title_box {
    height: auto;
    width: auto;
    font-size: 50px;
    margin-top: 90px;
    margin-bottom: 135px;
    color: #fff;
    font-weight: bold;
  }

  /**
   * 乡村发展
   */
  .develop_box {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    background-color: #24db73;

    /**
     * 内容盒子
     */
    .conent_box {
      height: auto;
      width: 1650px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;

      .con_box {
        height: 650px;
        width: 350px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 10px 20px #000000;
      }
    }
  }
  /**
   * 乡村文化
   */
  .culture_box {
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-size: cover;
    background-color: #24cfdb;

    /**
     * 内容盒子
     */
    .conent_box {
      height: auto;
      width: 1650px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;

      .con_box {
        height: 850px;
        width: 100%;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 10px 20px #000000;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .img_box {
          height: 100%;
          width: 550px;
          background-color: #000;
          border-radius: 10px;
        }

        .text_box {
          height: 500px;
          width: 900px;
          background-color: #000;
          margin-left: 95px;
        }
      }
    }
  }
  /**
   * 人才引进
   */
  .talent_box {
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-size: cover;
    background-color: #ffb52b;

    .title_box {
      margin-bottom: 110px;
    }

    .conent_box {
      height: 1200px;
      width: 1400px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      flex-wrap: wrap;

      .con_box:hover {
        margin-right: 10px;
        margin-bottom: 50px;
        box-shadow: 0px 10px 20px #000000;
      }

      .con_box {
        height: 450px;
        width: 300px;
        background-color: #fff;
        margin-bottom: 40px;
        padding: 5px;
        border-radius: 10px;
        transition: all 0.5s;

        .img_box {
          height: 60%;
          width: 100%;
          background-color: #000;
          border-radius: 10px 10px 0px 0px;
        }

        .text_box {
          height: 170px;
          width: 100%;
          background-color: #00622e;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          .name_box {
            height: auto;
            width: auto;
            font-size: 25px;
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 10px;
          }

          .text_body {
            height: 100px;
            width: 95%;
            padding: 5px;
            background-color: #afa6ff;
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
  /**
   * 振兴政策
   */
  .policy_box {
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #00622e;
  }

  footer {
    height: 200px;
    width: 100%;
    background-color: #000;
  }
}
/**
 * 页脚
 */
</style>