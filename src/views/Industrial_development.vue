<!-- 乡村发展 -->
<template>
  <div class="body_box">
    <div class="conent">
      <div class="head_img"></div>
      <div class="introduce">
        <div class="title_1">乡村发展的意义</div>
        <div class="text_1">
          不可否认，现今我国乡村面临着凋敝和衰落的客观事实，乡村振兴战略的提出，旨在以此来激发乡村发展活力，增强乡村吸引力，构建新时代乡村可持续发展机制。历史上，乡村的富庶是我国盛世历史的标志，在城镇赚钱后回乡置业曾经也是事业成功的标志。新中国成立后，我们经历了工业化进程，乡村为工业和城市的发展做出了巨大贡献。今天重提乡村振兴是对乡村地位和作用的肯定，也是用历史的眼光看待乡村的地位与作用，乡村振兴与复兴也体现了我国农村在实现中国梦伟大征程中历史与现实的统一。
        </div>
      </div>
      <div class="con_body">
        <!-- 列表渲染 -->
        <div class="max_box" v-for="item in conent_text" :key="item.id">
          <!-- 条件渲染 判断是内容左显示还是右显示 -->
          <div class="right_box" v-if="item.direction == 1">
            <div class="con_item">
              <div class="img_box">
                <el-image
                  :src="item.src"
                  style="height: 100%; width: 100%"
                  fit="cover"
                >
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>
            <div class="con_item">
              <div class="text_box">
                <div class="title_box">{{ item.title_text }}</div>
                <div class="text_min">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>
          <div class="left_box" v-else>
            <div class="con_item">
              <div class="text_box">
                <div class="title_box">{{ item.title_text }}</div>
                <div class="text_min">
                  {{ item.text }}
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headimg from "../assets/img/bg-banner7.jpg";
import developimg1 from "@/assets/img/developimg5.jpg";

export default {
  data() {
    return {
      conent_text: [
        {
          id: 1,
          direction: 1,
          src: developimg1,
          title_text: "特色产业兴起来 村容村貌美起来",
          text: "在那逐屯便民活动中心文化广场前面，那逐屯、板仲屯和那坡屯有200余亩耕地提质改造（旱改水项目）地块种植着大片水稻，绿油油的秧苗长势喜人，勾勒着稻田好光景。村民马大新感慨地说：“实施‘旱改水’工程后，农田变得好看了，稻谷产量也高了，真是好啊！”那逐屯共52户193人，全屯耕地面积104.29亩，人均耕地面积少。实施旱改水项目以前，该屯水田分布零散、高低落差大，缺少灌溉条件。\n2020年，那逐屯通过优化调整产业结构实施旱改水项目后，水田得到有效整合。田成方、路相连、渠相通，灌溉能力得到了很大提升。\n外加那逐屯地理优势，一年四季均有山泉水流进水田，水稻产量连年攀升。在那逐屯入口左侧，有一片5亩大的水塘。池水清澈见底，一群鸭子在水面上闲游，鱼儿、虾儿在水底怡然自得，山间泉水流入池塘，再经环屯沟渠流进旱改水田。“池塘的鱼由山泉水养大，肉质细腻，口感鲜美清甜，崇左以及南宁、百色等地都有人慕名前来采购，十分畅销。”韦志胜说，村里正在谋划发展山泉水养鱼产业，扩大养殖规模，做活“鱼”文章，以“经联社+农户”的模式，探索发展壮大村级集体经济的新路子，为乡村振兴注入新活力。",
        },
        {
          id: 2,
          direction: 0,
          src: "img",
          title_text: "XXXX",
          text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 3,
          direction: 1,
          src: "img",
          title_text: "XXXX",
          text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 4,
          direction: 0,
          src: "img",
          title_text: "XXXX",
          text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
      ],
      imgurl: {
        url1: headimg,
      },
    };
  },
};
</script>

<style src="../assets/style/industrial.css" scoped></style>