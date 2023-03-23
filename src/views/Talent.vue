<!-- 人才引进 -->
<template>
  <div>
    <div class="body_box">
      <div class="conent">
        <div class="img_box">
          <el-image style="height: 100%; width: 100%" fit="cover"> </el-image>
        </div>
        <div class="introduce">
          <div class="title_1">人才引进的重要性</div>
          <div class="text_1">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
          </div>
        </div>
        <div class="con_box" v-for="item in conent" :key="item.id">
          <div class="left_box">
            <img :src="item.src" alt="图片" />
          </div>
          <div class="right_box">
            <p>{{ item.name }}</p>
            <p>
              {{ item.text }}
            </p>
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
      conent: [
        {
          id: 1,
          src: "XXXXXXX",
          name: "XXX",
          text: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        },
        {
          id: 2,
          src: "XXXXXXXX",
          name: "XXX",
          text: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        },
      ],
    };
  },
};
</script>

<style src="../assets/style/Talent.css" scoped></style>