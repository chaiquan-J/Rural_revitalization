<!-- 振兴资讯 -->
<template>
  <div class="body_box">
    <div class="head_img"></div>
    <div class="informa_box">
      <div class="conent_box">
        <div class="hop_box">
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
        <div class="news_box">
          <div class="max_box">
            <div class="cont_box" v-for="item in news" :key="item.id">
              <div class="head_box">
                <div class="title">{{ item.text }}</div>
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
</template>

<script>
import Information1 from "@/assets/img/Information1.jpg";
import Information3 from "@/assets/img/Information3.jpg";
import Information4 from "@/assets/img/Information4.png";

export default {
  data() {
    return {
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
      news: [
        {
          id: 6,
          title: "崇左抓好“乡村振兴+行动学习”试点项目验收评价工作",
          time: "2023-01-05",
          text: "为做好自治区“乡村振兴+行动学习”试点项目验收评价工作，1月4-5日，崇左市农业农村局张天副局长到天等、龙州、宁明创建项目开展实地迎检指导工作。在观摩集体研讨中，张副对三个试点县工作取得的成效给予了肯定，同时指出存在的问题，针对性地提出了对策建议。",
        },
        {
          id: 5,
          title: "崇左市大新县：边疆党建点燃乡村振兴“红色引擎”",
          time: "2023-03-22",
          text: "“我们家以前主要靠种地、养鱼增收，明仕河开展河道整治后，我们一家四口开始到景区上班，每人每月都有几千元的收入。”近日，崇左市大新县堪圩乡明仕村村民闭小珍说。大新县由发改、文旅等职能部门与堪圩乡、硕龙镇、恩城乡共同搭建“党建联盟”，打造堪圩明仕田园民族旅游核心示范区、硕龙边关旅游核心示范区，推动当地旅游事业不断发展壮大，闭小珍与家人成为这一“绿色福利”的共享者，收入稳定，日子安稳。近年来，大新县聚焦“党旗领航”，围绕该县中心工作部署，突出边疆党建赋能，不断在组织、人才、产业等方面持续发力，点燃乡村振兴“红色引擎”。",
        },
        {
          id: 2,
          title: "能人返乡、干部回乡，给崇左乡村振兴带来什么变化？",
          time: "2023-04-24",
          text: "习近平总书记指出：“乡村振兴，关键在人、关键在干。”人才振兴是乡村振兴的基础。2023年中央一号文件对加强乡村人才队伍建设做出了具体部署。今年以来，崇左市全面贯彻落实党的二十大精神，深入贯彻落实2023年中央一号文件精神，结合实际谋划开展“党建引领乡村振兴·家乡发展必有我”主题实践活动，号召全市广大崇左籍干部职工利用每周星期五下午及周末、节假日，回到出生地、成长地或籍贯所在地参与乡村振兴建设，真正把情况摸清、把问题找准、把对策提实。",
        },
        {
          id: 3,
          title: "崇左大新县：深耕数字农业 助力乡村振兴",
          time: "2022-11-15",
          text: "连日来，在大新县全茗镇政教村政屯、堪圩乡明仕村弄朋屯、恩城乡陆榜村内琅屯等地的乡间田野上，一架架无人机正在按照技术设定的路线匀速往返田间，一颗颗油菜种子从天而降，落入田地里。截至目前，无人机完成绿色播种面积1.5万亩，深获农户好评。“为抢抓播种黄金期，引入无人机播种技术进行油菜播种，极大地提高了播种效率。”负责大新县冬种绿肥项目的广西桂粮农业科技有限公司负责人说，无人机的投入能真正为老百姓起到省时、省钱又增收的良好效果。目前，大新县植保植检站已组织51人报名参加植保无人机手的培训，提高植保作业效率，让农民在增收路上走得更快。",
        },
        {
          id: 1,
          title: "广西崇左：以数字乡村建设助力乡村振兴",
          time: "2022-11-03",
          text: "崇左市立足边境地区实际，统筹推进数字乡村基础设施、试点建设、产业发展、网络文化、惠民服务等重点工作，着力把数字乡村建设转化成为推动乡村振兴的“强大引擎”。加快建设数字乡村基础设施。夯实数字乡村发展根基，累计建成移动基站12474个，市县中心城区基本实现5G网络连续覆盖，所有乡镇开通5G网络，20户以上自然村光纤覆盖率100%。健全农村寄递物流体系，824个行政村实现快递服务，覆盖率97.3%；乡镇“快快合作”网点298个，占比86.13%。建成4个县域共配中心，天等建成快递电商服务站78个。完成抵边村通邮123个，占任务的78.3 %。",
        },
        {
          id: 4,
          title: "提升乡村“形实魂” ，崇左绘就乡村振兴美丽画卷",
          time: "2022-08-31",
          text: "崇左市锚定乡村振兴总体目标，扎实有序做好乡村发展、乡村建设、乡村治理重点工作，推动乡村“形、实、魂”深度融合、协同发展，乡村振兴不断取得新进展、迈出新步伐。走进江州区新和镇新村村新东屯，蔗海葱茏，村民黎大哥正在自家甘蔗地里忙活着。据他介绍，他们屯有80户302人，家家户户都种植甘蔗，这是当地农民的主要经济来源。",
        },
      ],
    };
  },
};
</script>

<style src="../assets/style/Information.css" scoped></style>