<!-- 乡村文化 -->
<template>
  <div>
    <div class="body_box">
      <div class="conent">
        <div class="img_box"></div>
        <div class="introduce">
          <div class="title_1">乡村文化的传承</div>
          <div class="text_1">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
          </div>
        </div>
        <!-- 样板 -->
        <!-- <div class="con_box">
          <div class="left_box">
            <el-carousel trigger="click" height="800px">
              <el-carousel-item v-for="item in 4" :key="item">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList"
                >
                </el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="right_box">
            <div class="title_name">XXXXXXXX</div>
            <div class="text_box">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
            </div>
          </div>
        </div> -->
        <!-- 循环渲染 -->
        <div class="con_box" v-for="conitem in conentdata" :key="conitem.id">
          <div class="left_box">
            <el-carousel trigger="click" height="800px">
              <el-carousel-item v-for="item in conitem.imgurl" :key="item.id">
                <el-image
                  style="width: 100%; height: 100%"
                  :src="item.imgurl"
                  :preview-src-list="item.srcList"
                >
                </el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="right_box">
            <div class="title_name">{{ conitem.title_text }}</div>
            <div class="text_box">
              {{ conitem.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      conentdata: [
        {
          id: 1,
          imgnb: 4,
          imgurl: [
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          ],
          // 点开大图 链接同上
          srcList: [
            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
          ],
          title_text: "XXXXXXXX",
          text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,",
        },
        {
          id: 2,
          imgnb: 4,
          imgurl: [
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          ],
          // 点开大图 链接同上
          srcList: [
            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
          ],
          title_text: "XXXXXXXX",
          text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,",
        },
      ],
    };
  },
};
</script>
  
<style src="../assets/style/Rural.css" scoped></style>