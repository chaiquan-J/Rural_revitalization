<!-- 乡村发展 -->
<template>
  <div class="body_box">
    <div class="conent">
      <div class="head_img"></div>
      <div class="introduce">
        <div class="title_1">乡村发展的意义</div>
        <div class="text_1">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
        </div>
      </div>
      <div class="con_body">
        <div class="con_item">
          <div class="img_box">
            <el-image style="height: 100%; width: 100%" fit="cover">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </div>
        <div class="con_item">
          <div class="text_box">
            <div class="title_box">{{ title_text.title1 }}</div>
            <div class="text_min">
              {{ textgather.text1 }}
            </div>
          </div>
        </div>
        <div class="con_item">
          <div class="text_box">
            <div class="title_box">{{ title_text.title2 }}</div>
            <div class="text_min">
              {{ textgather.text2 }}
            </div>
          </div>
        </div>
        <div class="con_item">
          <div class="img_box">
            <el-image style="height: 100%; width: 100%" fit="cover">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </div>
        <div class="con_item">
          <div class="img_box">
            <el-image style="height: 100%; width: 100%" fit="cover">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </div>
        <div class="con_item">
          <div class="text_box">
            <div class="title_box">{{ title_text.title3 }}</div>
            <div class="text_min">
              {{ textgather.text2 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headimg from "../assets/img/bg-banner7.jpg";

export default {
  data() {
    return {
      title_text: {
        title1: "XXXXX",
        title2: "XXXXX",
        title3: "XXXXX",
      },
      imgurl: {
        url1: headimg,
      },
      textgather: {
        text1:
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

        text2:
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

        text3:
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      },
    };
  },
};
</script>

<style src="../assets/style/industrial.css" scoped></style>