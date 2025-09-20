export interface VideoData {
  id: number; // 期数
  title: string; // 视频标题
  bvid: string; // B站视频BV号
  aid: string; // B站视频AV号
  cid: string; // B站视频CID
  category: string; // 一级分类
  subCategory: string; // 二级分类
  thirdCategory: string; // 三级分类
  fourthCategory?: string; // 四级分类（可选）
  description: string; // 核心内容描述
  tags: string[]; // 标签
}

// 视频数据库 - 基于B站自行车维修手册系列
export const videosData: VideoData[] = [
  // 第1期 - 自行车维修手册介绍
  {
    id: 1,
    title: "自行车维修手册介绍",
    bvid: "BV1KH4y1w7LU",
    aid: "1055920310",
    cid: "1588191297",
    category: "工具与维护",
    subCategory: "专用工具",
    thirdCategory: "工具指南",
    description: "自行车维修手册系列介绍",
    tags: ["维修手册", "介绍", "工具"]
  },
  
  // 脚踏系统
  {
    id: 2,
    title: "自行车锁踏拆卸安装保养",
    bvid: "BV1Nx4y187Mi",
    aid: "1005791428",
    cid: "1589549520",
    category: "脚踏系统",
    subCategory: "锁踏",
    thirdCategory: "安装保养",
    description: "锁踏拆卸安装保养",
    tags: ["锁踏", "安装", "保养", "拆卸"]
  },
  {
    id: 3,
    title: "自行车平踏安装与拆卸教学",
    bvid: "BV17E421A7kY",
    aid: "1655971293",
    cid: "1589567540",
    category: "脚踏系统",
    subCategory: "平踏",
    thirdCategory: "安装拆卸",
    description: "平踏安装教学",
    tags: ["平踏", "安装", "教学"]
  },
  
  // 操控系统 - 把带/把套
  {
    id: 4,
    title: "公路自行车绑把带缠绕安装教学方法一",
    bvid: "BV1ki421e7QE",
    aid: "1455821305",
    cid: "1595317240",
    category: "操控系统",
    subCategory: "车把/把立",
    thirdCategory: "把带/把套",
    fourthCategory: "公路把带",
    description: "三种缠绕教学方法",
    tags: ["公路车", "把带", "缠绕", "安装"]
  },
  {
    id: 5,
    title: "公路自行车绑把带缠绕安装教学方法二",
    bvid: "BV1HJ4m1u7D8",
    aid: "1255803864",
    cid: "1595325238",
    category: "操控系统",
    subCategory: "车把/把立",
    thirdCategory: "把带/把套",
    fourthCategory: "公路把带",
    description: "三种缠绕教学方法",
    tags: ["公路车", "把带", "缠绕", "安装"]
  },
  {
    id: 6,
    title: "公路自行车绑把带缠绕安装教学方法三",
    bvid: "BV1TT421Y7c4",
    aid: "1705961403",
    cid: "1595331170",
    category: "操控系统",
    subCategory: "车把/把立",
    thirdCategory: "把带/把套",
    fourthCategory: "公路把带",
    description: "三种缠绕教学方法",
    tags: ["公路车", "把带", "缠绕", "安装"]
  },
  {
    id: 7,
    title: "山地自行车把套安装",
    bvid: "BV1FE421N7mG",
    aid: "1655778267",
    cid: "1600086240",
    category: "操控系统",
    subCategory: "车把/把立",
    thirdCategory: "把带/把套",
    fourthCategory: "山地把套",
    description: "山地车把套安装",
    tags: ["山地车", "把套", "安装"]
  },
  
  // 工具与维护
  {
    id: 8,
    title: "新手网购自行车安装方法演示喜德盛AD300整车",
    bvid: "BV1kZ421M7ow",
    aid: "1155952199",
    cid: "1602092958",
    category: "工具与维护",
    subCategory: "整车组装",
    thirdCategory: "新车上架",
    description: "网购自行车安装演示",
    tags: ["整车", "组装", "安装", "新车", "喜德盛"]
  },
  
  // 传动系统 - 中轴
  {
    id: 9,
    title: "自行车中轴型号规格区分介绍 BSA,BB86,T47公路车中轴DUB 24mm轴心",
    bvid: "BV1Gf421z7xi",
    aid: "1206046790",
    cid: "1604170000",
    category: "传动系统",
    subCategory: "中轴",
    thirdCategory: "型号识别",
    description: "BSA/BB86/T47等规格区分",
    tags: ["中轴", "规格", "识别", "BSA", "BB86", "T47", "DUB"]
  },
  {
    id: 10,
    title: "自行车方孔中轴安装与拆卸方法教学",
    bvid: "BV1jM4m127e3",
    aid: "1306129238",
    cid: "1608185071",
    category: "传动系统",
    subCategory: "中轴",
    thirdCategory: "安装/拆卸",
    fourthCategory: "方孔中轴",
    description: "方孔中轴拆装",
    tags: ["中轴", "方孔", "拆装"]
  },
  {
    id: 11,
    title: "自行车BSA螺纹旋入式中轴安装与拆卸方法教学",
    bvid: "BV1DZ421K7Kt",
    aid: "1156104368",
    cid: "1608197909",
    category: "传动系统",
    subCategory: "中轴",
    thirdCategory: "安装/拆卸",
    fourthCategory: "螺纹中轴",
    description: "BSA螺纹中轴安装/滑牙修复",
    tags: ["中轴", "BSA", "螺纹", "安装", "滑牙修复"]
  },
  {
    id: 12,
    title: "压入式中轴安装拆卸方法教学用于公路自行车维修",
    bvid: "BV1EE421P7hF",
    aid: "1656166767",
    cid: "1610678579",
    category: "传动系统",
    subCategory: "中轴",
    thirdCategory: "安装/拆卸",
    fourthCategory: "压入式中轴",
    description: "公路车压入式中轴操作",
    tags: ["中轴", "压入式", "公路车"]
  },
  {
    id: 13,
    title: "T47螺纹中轴安装和怎么选择正确的宽度,包含68mm，77mm，85.5公路车中轴",
    bvid: "BV1ix4y1t7yR",
    aid: "1006063324",
    cid: "1612367247",
    category: "传动系统",
    subCategory: "中轴",
    thirdCategory: "安装/拆卸",
    fourthCategory: "T47中轴",
    description: "T47螺纹中轴宽度选择",
    tags: ["中轴", "T47", "宽度", "选择", "68mm", "77mm", "85.5mm"]
  },
  {
    id: 14,
    title: "自行车中轴保养维护教程���轴异响解决方案之一",
    bvid: "BV1LE4m1R7CU",
    aid: "1256195244",
    cid: "1612390030",
    category: "传动系统",
    subCategory: "中轴",
    thirdCategory: "保养",
    fourthCategory: "异响解决",
    description: "中轴保养与轴承更换",
    tags: ["中轴", "保养", "异响", "维护"]
  },
  
  // 传动系统 - 牙盘/曲柄
  {
    id: 15,
    title: "自行车曲柄牙盘规格区分介绍",
    bvid: "BV1iW421R7se",
    aid: "1856059918",
    cid: "1616613923",
    category: "传动系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "规格识别",
    description: "曲柄牙盘规格区分",
    tags: ["曲柄", "牙盘", "规格", "识别"]
  },
  {
    id: 16,
    title: "自行车方孔中轴曲柄安装与拆卸教程",
    bvid: "BV1FS42197nF",
    aid: "1506400915",
    cid: "1619742610",
    category: "传动系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "安装/调试",
    fourthCategory: "方孔曲柄",
    description: "方孔中轴曲柄安装",
    tags: ["曲柄", "方孔", "安装", "拆卸"]
  },
  {
    id: 17,
    title: "公路车盘片选择与安装",
    bvid: "BV1dM4m1y7c3",
    aid: "1306393486",
    cid: "1620814946",
    category: "传动系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "盘片",
    fourthCategory: "更换",
    description: "公路车盘片选择与安装",
    tags: ["盘片", "公路车", "选择", "安装"]
  },
  {
    id: 18,
    title: "公路车功率计规格介绍",
    bvid: "BV1DM4m1y7Pc",
    aid: "1306344094",
    cid: "1621911464",
    category: "传动系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "功率计",
    fourthCategory: "安装",
    description: "功率计曲柄安装",
    tags: ["功率计", "公路车", "规格", "介绍"]
  },
  {
    id: 19,
    title: "禧玛诺公路自行车牙盘安装拆卸方法",
    bvid: "BV1L4421S7e4",
    aid: "1756355243",
    cid: "1622935657",
    category: "传动系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "安装/调试",
    fourthCategory: "禧玛诺系统",
    description: "牙盘安装+轴心垫圈调整",
    tags: ["禧玛诺", "牙盘", "安装", "拆卸"]
  },
  {
    id: 20,
    title: "牙盘曲柄轴心垫圈怎么加才正确，公路自行车。",
    bvid: "BV1er421K7nM",
    aid: "1406443679",
    cid: "1624992248",
    category: "传动系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "安装/调试",
    fourthCategory: "禧玛诺系统",
    description: "牙盘安装+轴心垫圈调整",
    tags: ["牙盘", "曲柄", "轴心垫圈", "公路车"]
  },
  
  // 传动系统 - 链条
  {
    id: 21,
    title: "自行车链条长度测量截断安装教程",
    bvid: "BV1DvvqeTEED",
    aid: "112888098327098",
    cid: "500001635253971",
    category: "传动系统",
    subCategory: "链条",
    thirdCategory: "基础操作",
    fourthCategory: "截链/安装",
    description: "链条长度测量与安装",
    tags: ["链条", "长度", "测量", "安装"]
  },
  {
    id: 22,
    title: "自行车链条魔术扣拆卸与户外应急拆卸方法",
    bvid: "BV1o2iGe2EHA",
    aid: "112893232286658",
    cid: "500001636292403",
    category: "传动系统",
    subCategory: "链条",
    thirdCategory: "基础操作",
    fourthCategory: "快速拆卸",
    description: "魔术扣拆卸技巧",
    tags: ["链条", "魔术扣", "拆卸", "应急"]
  },
  
  // 变速系统 - 后拨
  {
    id: 23,
    title: "自行车后拨HL限位螺丝调试方法",
    bvid: "BV171iGe7Ey6",
    aid: "112893316039594",
    cid: "500001636310865",
    category: "变速系统",
    subCategory: "后拨",
    thirdCategory: "机械调试",
    fourthCategory: "限位螺丝",
    description: "HL限位螺丝调试",
    tags: ["后拨", "限位螺丝", "调试", "HL"]
  },
  {
    id: 24,
    title: "自行车后拨张力螺丝调试方法",
    bvid: "BV1LhiPeREdB",
    aid: "112905093647806",
    cid: "500001638494665",
    category: "变速系统",
    subCategory: "后拨",
    thirdCategory: "机械调试",
    fourthCategory: "张力微调",
    description: "张力/微调螺丝操作",
    tags: ["后拨", "张力螺丝", "调试"]
  },
  {
    id: 25,
    title: "自行车后拨微调螺丝调试方法",
    bvid: "BV1LPYAeCEv2",
    aid: "112910730792438",
    cid: "500001639624705",
    category: "变速系统",
    subCategory: "后拨",
    thirdCategory: "机械调试",
    fourthCategory: "张力微调",
    description: "张力/微调螺丝操作",
    tags: ["后拨", "微调螺丝", "调试"]
  },
  {
    id: 26,
    title: "自行车后拨安装调试【总结篇】",
    bvid: "BV17Daye8EzH",
    aid: "112915931857430",
    cid: "500001640662082",
    category: "变速系统",
    subCategory: "后拨",
    thirdCategory: "综合调试",
    description: "后拨安装调试总结/问题排查",
    tags: ["后拨", "安装", "调试", "总结"]
  },
  
  // 变速系统 - 前拨
  {
    id: 27,
    title: "禧玛诺105变速器前拨安装调试",
    bvid: "BV1iyaQe2EsD",
    aid: "112922072256286",
    cid: "500001641865394",
    category: "变速系统",
    subCategory: "前拨",
    thirdCategory: "机械调试",
    fourthCategory: "禧玛诺系统",
    description: "禧玛诺105前拨调试",
    tags: ["前拨", "禧玛诺", "105", "调试"]
  },
  {
    id: 28,
    title: "顺泰公路车变速器前拨安装调试教程",
    bvid: "BV1eZY8eHEUB",
    aid: "112927709399052",
    cid: "500001642996374",
    category: "变速系统",
    subCategory: "前拨",
    thirdCategory: "机械调试",
    fourthCategory: "顺泰系统",
    description: "顺泰前拨安装",
    tags: ["前拨", "顺泰", "安装", "调试"]
  },
  {
    id: 29,
    title: "禧玛诺XT M8100套件山地车单盘变速器安装调试",
    bvid: "BV1iM4m1y7cK",
    aid: "1306325375",
    cid: "1647436944",
    category: "变速系统",
    subCategory: "前拨",
    thirdCategory: "机械调试",
    fourthCategory: "山地单盘",
    description: "XT M8100单盘变速调试",
    tags: ["前拨", "禧玛诺", "XT", "M8100", "单盘"]
  },
  
  // 刹车系统 - 油碟刹车
  {
    id: 30,
    title: "喜德盛BA油碟刹车系统换油注油教程",
    bvid: "BV1dZ421T7fJ",
    aid: "1156292374",
    cid: "1648595235",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "BA油碟系统",
    description: "注油/排空气/更新版操作",
    tags: ["油碟", "BA", "换油", "注油", "喜德盛"]
  },
  
  // 变速系统 - 手变/线管
  {
    id: 31,
    title: "公路车手变安装和角度使用调整建议",
    bvid: "BV1Jm42137DQ",
    aid: "1606377707",
    cid: "1649728167",
    category: "变速系统",
    subCategory: "手变/线管",
    thirdCategory: "安装调整",
    description: "手变角度调整/穿线方法",
    tags: ["手变", "安装", "角度", "调整"]
  },
  {
    id: 32,
    title: "公路自行车内走线一体把穿线走线安装",
    bvid: "BV16i421675y",
    aid: "1456495456",
    cid: "1650858740",
    category: "变速系统",
    subCategory: "手变/线管",
    thirdCategory: "走线优化",
    fourthCategory: "全管内走线",
    description: "一体把穿线/全管走线/防变速卡滞",
    tags: ["一体把", "内走线", "穿线", "公路车"]
  },
  
  // 刹车系统 - 油碟刹车（续）
  {
    id: 33,
    title: "BA油碟刹车系统排空气补油方法",
    bvid: "BV1Ex4y1s7BB",
    aid: "1006468708",
    cid: "1650864233",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "BA油碟系统",
    description: "注油/排空气/更新版操作",
    tags: ["油碟", "BA", "排空气", "补油"]
  },
  {
    id: 34,
    title: "禧玛诺公路车油碟刹车注油换油排空气教程通用7170,8170,7020,7120，4720，等油碟变速器",
    bvid: "BV1vHWMePE7E",
    aid: "113001109654079",
    cid: "500001657552508",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "禧玛诺系统",
    description: "公路车/山地车换油（含MT200）",
    tags: ["禧玛诺", "油碟", "换油", "排空气", "7170", "8170"]
  },
  {
    id: 35,
    title: "公路车手变换刹车线变速线穿线，手变微调螺丝的作用。",
    bvid: "BV1CWWEekEgr",
    aid: "113007132673143",
    cid: "500001658826088",
    category: "变速系统",
    subCategory: "手变/线管",
    thirdCategory: "安装调整",
    description: "手变角度调整/穿线方法",
    tags: ["手变", "刹车线", "变速线", "穿线", "微调螺丝"]
  },
  
  // 变速系统 - 电子变速
  {
    id: 36,
    title: "禧玛诺7170电子变速电线连接",
    bvid: "BV1jnW9eaE5C",
    aid: "113012769819317",
    cid: "500001660049477",
    category: "变速系统",
    subCategory: "电子变速",
    thirdCategory: "电线连接",
    description: "禧玛诺7170电线连接",
    tags: ["电子变速", "禧玛诺", "7170", "电线连接"]
  },
  {
    id: 37,
    title: "禧玛诺7170电子变速链接配对",
    bvid: "BV1uiW9eHE6T",
    aid: "113012803371650",
    cid: "500001660055520",
    category: "变速系统",
    subCategory: "电子变速",
    thirdCategory: "配对安装",
    description: "电子变速链接配对/安装",
    tags: ["电子变速", "禧玛诺", "7170", "配对"]
  },
  {
    id: 38,
    title: "禧玛诺7170电子变速器安装",
    bvid: "BV1agWCebExp",
    aid: "113023675074631",
    cid: "500001662181771",
    category: "变速系统",
    subCategory: "电子变速",
    thirdCategory: "配对安装",
    description: "电子变速链接配对/安装",
    tags: ["电子变速", "禧玛诺", "7170", "安装"]
  },
  
  // 车架系统 - 尾勾校正
  {
    id: 39,
    title: " 顺泰变速器调试调节安装教程",
    bvid: "BV1ntswefEjQ",
    aid: "113035284842273",
    cid: "25610290050",
    category: "变速系统",
    subCategory: "机械变速",
    thirdCategory: "安装调节",
    description: "顺泰变速器调试调节安装",
    tags: ["变速器", "调试", "调节", "安装"]
  },
  {
    id: 40,
    title: "自行车尾勾变形校正器使用方法",
    bvid: "BV1b4sgeaEgH",
    aid: "113041056204634",
    cid: "25628573726",
    category: "车架",
    subCategory: "车架主体",
    thirdCategory: "五通维修",
    fourthCategory: "尾勾校正",
    description: "手动校正尾勾变形",
    tags: ["尾勾", "手动校正", "维修"]
  },
  {
    id: 41,
    title: "自行车尾勾变形手动校正方法",
    bvid: "BV1pQHue1EBv",
    aid: "113046190099239",
    cid: "25644960197",
    category: "车架",
    subCategory: "车架主体",
    thirdCategory: "五通维修",
    fourthCategory: "尾勾校正",
    description: "尾勾校正完整流程",
    tags: ["尾勾", "校正"]
  },
  
  // 变速系统 - 后拨问题排查
  {
    id: 42,
    title: "自行车后拨问题排查与解决",
    bvid: "BV1pgHueCEj8",
    aid: "113046307473598",
    cid: "25645548148",
    category: "变速系统",
    subCategory: "后拨",
    thirdCategory: "综合调试",
    description: "后拨常见问题排查",
    tags: ["后拨", "问题排查", "故障诊断"]
  },
  
  // 变速系统 - 前拨问题排查
  {
    id: 43,
    title: "自行车前拨日常问题分析",
    bvid: "BV19RHce6Eyy",
    aid: "113057514653658",
    cid: "25679037288",
    category: "变速系统",
    subCategory: "前拨",
    thirdCategory: "问题排查",
    description: "前拨常见问题分析",
    tags: ["前拨", "问题分析", "故障"]
  },
  
  // 变速系统 - 走线优化
  {
    id: 44,
    title: "自行车内走线",
    bvid: "BV1dDHceVEiK",
    aid: "113057564986335",
    cid: "25679958005",
    category: "变速系统",
    subCategory: "手变/线管",
    thirdCategory: "走线优化",
    fourthCategory: "全管内走线",
    description: "防变速卡滞技巧",
    tags: ["内走线", "防卡滞", "变速"]
  },
  
  // 刹车系统 - 油管处理
  {
    id: 45,
    title: "自行车油碟刹车油管截管与油针安装",
    bvid: "BV1QsHxeMEtq",
    aid: "113074644255409",
    cid: "25725829324",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "油管处理",
    fourthCategory: "截管/压油针",
    description: "油管截管与油针安装",
    tags: ["油管", "截管", "油针", "安装"]
  },
  
  // 刹车系统 - 来令片更换
  {
    id: 46,
    title: "自行车油碟来令片拆卸与活塞清洁",
    bvid: "BV1r3pPehE2o",
    aid: "113080566548530",
    cid: "25741295758",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "安装调试",
    fourthCategory: "来令片更换",
    description: "来令片拆卸+活塞清洁",
    tags: ["来令片", "拆卸", "活塞清洁"]
  },
  
  // 刹车系统 - 卡钳调整
  {
    id: 47,
    title: "自行车油碟蹭碟解决方法",
    bvid: "BV117pGebE93",
    aid: "113085717155112",
    cid: "25753749464",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "安装调试",
    fourthCategory: "卡钳调整",
    description: "蹭碟解决方法",
    tags: ["蹭碟", "卡钳", "调整"]
  },
  
  // 轮组系统 - 碟片偏摆
  {
    id: 48,
    title: "自行车碟片偏摆调试方法",
    bvid: "BV1c9HXePEoA",
    aid: "113091354363078",
    cid: "25766071805",
    category: "轮组系统",
    subCategory: "碟片",
    thirdCategory: "安装/维护",
    fourthCategory: "偏摆校正",
    description: "碟片偏摆调试",
    tags: ["碟片", "偏摆", "调试"]
  },
  
  // 刹车系统 - 圈刹
  {
    id: 49,
    title: "自行车圈刹卡钳安装与调试",
    bvid: "BV1uEpzeCEm4",
    aid: "113102930579169",
    cid: "25792416648",
    category: "刹车系统",
    subCategory: "圈刹",
    thirdCategory: "安装调试",
    description: "圈刹卡钳安装与调试",
    tags: ["圈刹", "卡钳", "安装", "调试"]
  },
  
  // 刹车系统 - BA油碟系统（续）
  {
    id: 50,
    title: "BA油碟刹车系统更新版操作",
    bvid: "BV1xppxeYERz",
    aid: "113111486957431",
    cid: "25808537709",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "BA油碟系统",
    description: "BA油碟更新版操作",
    tags: ["BA", "油碟", "更新版", "操作"]
  },
  
  // 刹车系统 - 顺泰系统
  {
    id: 51,
    title: "顺泰油碟刹车注油教程",
    bvid: "BV1Ku4HehExs",
    aid: "113123046458145",
    cid: "25833835368",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换���",
    fourthCategory: "顺泰系统",
    description: "顺泰油碟注油",
    tags: ["顺泰", "油碟", "注油"]
  },
  
  // 刹车系统 - IIIPRO系统
  {
    id: 52,
    title: "IIIPRO线拉油碟刹车换油注油",
    bvid: "BV1g64HegEnN",
    aid: "113125126900942",
    cid: "25838750609",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "IIIPRO系统",
    description: "线拉油碟系统",
    tags: ["IIIPRO", "线拉油碟", "刹车"]
  },
  {
    id: 53,
    title: "禧玛诺山地车油碟换油教程MT200",
    bvid: "BV12at9eZE1n",
    aid: "113165576702987",
    cid: "25926897144",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "禧玛诺系统",
    description: "山地车油碟换油",
    tags: ["禧玛诺", "山地车", "油碟", "换油"]
  },
  {
    id: 54,
    title: "IIIPRO普偌肯IV4R四活塞山地刹车换油注油",
    bvid: "BV1EgsvenEe2",
    aid: "113192990740340",
    cid: "25988042658",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "IIIPRO系统",
    description: "四活塞油碟系统",
    tags: ["IIIPRO", "四活塞", "油碟"]
  },
  {
    id: 55,
    title: "IIIPRO立缸隐藏式油碟刹车连接换油注油",
    bvid: "BV1hGxGeCE1c",
    aid: "113199466679066",
    cid: "26006063929",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    fourthCategory: "IIIPRO系统",
    description: "隐藏式油缸系统",
    tags: ["IIIPRO", "隐藏式油缸", "刹车"]
  },
  
  // 车架系统 - 前叉
  {
    id: 56,
    title: "桶轴铝合金硬叉前叉截管安装",
    bvid: "BV1kyxre5Ew1",
    aid: "113219129575903",
    cid: "26056068143",
    category: "车架",
    subCategory: "前叉系统",
    thirdCategory: "硬叉安装",
    fourthCategory: "桶轴硬叉",
    description: "铝合金硬叉截管安装",
    tags: ["硬叉", "截管", "安装", "铝合金"]
  },
  {
    id: 57,
    title: "前叉内走线连接与刹车换油",
    bvid: "BV1uFxmezEx7",
    aid: "113222048810420",
    cid: "26066682562",
    category: "车架",
    subCategory: "前叉系统",
    thirdCategory: "硬叉安装",
    fourthCategory: "内走线集成",
    description: "前叉内走线连接+刹车换油",
    tags: ["前叉", "内走线", "刹车换油"]
  },
  
  // 轮组系统 - 碟片安装
  {
    id: 58,
    title: "IIIPRO 6R油碟刹车安装教程",
    bvid: "BV1TAxmeqErN",
    aid: "113222082365882",
    cid: "26066946489",
    category: "轮组系统",
    subCategory: "碟片",
    thirdCategory: "安装/维护",
    fourthCategory: "中锁/六钉",
    description: "碟片安装与拆卸",
    tags: ["碟片", "安装", "拆卸"]
  },
  {
    id: 59,
    title: "顺泰油碟刹车套件安装调试",
    bvid: "BV1u81yYcEfH",
    aid: "113265266918336",
    cid: "26182419635",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "安装/维护",
    fourthCategory: "中锁/六钉",
    description: "油碟刹车套件安装调试",
    tags: ["碟片",  "安装"]
  },
  {
    id: 60,
    title: "自行车中锁碟片六钉碟片安装与拆卸",
    bvid: "BV1qa2LYFETh",
    aid: "113267296961423",
    cid: "26190873487",
    category: "轮组系统",
    subCategory: "碟片",
    thirdCategory: "安装/维护",
    fourthCategory: "中锁/六钉",
    description: "中锁六钉碟片安装",
    tags: ["碟片", "中锁", "六钉", "安装"]
  },
  
  // 轮组系统 - 碟片故障处理
  {
    id: 61,
    title: "六钉碟片T25螺丝滑牙取出方法",
    bvid: "BV1S72WYrEdA",
    aid: "113272934108980",
    cid: "26205225126",
    category: "轮组系统",
    subCategory: "碟片",
    thirdCategory: "故障处理",
    fourthCategory: "螺丝滑牙",
    description: "T25螺丝滑牙取出",
    tags: ["碟片", "T25螺丝", "滑牙", "取出"]
  },
  
  // 刹车系统 - 刹车座处理
  {
    id: 62,
    title: "自行车刹车座倾斜处理方法",
    bvid: "BV1tg2KYWEqm",
    aid: "113277799565441",
    cid: "26216959160",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "安装调试",
    fourthCategory: "卡钳调整",
    description: "刹车座倾斜处理",
    tags: ["刹车座", "倾斜", "处理"]
  },
  
  // 刹车系统 - 来令片更换（续）
  {
    id: 63,
    title: "刹车活塞日常清洁与来令片安装",
    bvid: "BV1wu2CYSEMP",
    aid: "113284242017399",
    cid: "26233737030",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "安装调试",
    fourthCategory: "来令片更换",
    description: "来令片日常清洁与安装",
    tags: ["来令片", "清洁", "安装"]
  },
  
  // 传动系统 - 飞轮
  {
    id: 64,
    title: "自行车飞轮安装与拆卸教程",
    bvid: "BV1Lw29YNEdU",
    aid: "113292462850804",
    cid: "26252280112",
    category: "传动系统",
    subCategory: "飞轮",
    thirdCategory: "安装/维护",
    description: "飞轮安装与拆卸",
    tags: ["飞轮", "安装", "拆卸"]
  },
  
  // 轮组系统 - 轮胎内胎
  {
    id: 65,
    title: "自行车内胎外胎更换教程",
    bvid: "BV1fbmGYtEtr",
    aid: "113304039064729",
    cid: "26283343992",
    category: "轮组系统",
    subCategory: "轮胎",
    thirdCategory: "常规更换",
    description: "内胎外胎更换方法",
    tags: ["内胎","外胎", "更换", "教程"]
  },
  {
    id: 66,
    title: "徒手安装自行车内胎外胎",
    bvid: "BV13ymGYEEfg",
    aid: "113304072685531",
    cid: "26283608208",
    category: "轮组系统",
    subCategory: "轮胎",
    thirdCategory: "常规更换",
    description: "外胎徒手安装",
    tags: ["徒手安装", "技巧"]
  },
  
  // 轮组系统 - 真空胎
  {
    id: 67,
    title: "自行车真空外胎安装教程",
    bvid: "BV12PCfY4EGV",
    aid: "113334976252754",
    cid: "26368869415",
    category: "轮组系统",
    subCategory: "轮胎/外胎",
    thirdCategory: "真空胎",
    fourthCategory: "安装",
    description: "真空外胎安装教程",
    tags: ["真空胎", "安装", "教程"]
  },
  
  // 操控系统 - 碗组
  {
    id: 68,
    title: "自行车车头晃动解决方法",
    bvid: "BV1RbyYYME8V",
    aid: "113340898675720",
    cid: "26385449006",
    category: "操控系统",
    subCategory: "碗组",
    thirdCategory: "保养调试",
    description: "车头晃动解决",
    tags: ["车头晃动", "碗组", "解决"]
  },
  
  // 操控系统 - 弯把
  {
    id: 69,
    title: "自行车弯把安装",
    bvid: "BV1C2yJYEEdn",
    aid: "113349236886691",
    cid: "26406290866",
    category: "操控系统",
    subCategory: "车把/把立",
    thirdCategory: "弯把安装",
    description: "弯把角度调整",
    tags: ["弯把", "角度调整", "教程"]
  },
  
  // 座垫系统 - 座管调整
  {
    id: 70,
    title: "自行车坐垫角度与高度调整",
    bvid: "BV1Z7yJYMED7",
    aid: "113349287218976",
    cid: "26406553897",
    category: "座垫系统",
    subCategory: "座管",
    thirdCategory: "安装调试",
    fourthCategory: "常规座管",
    description: "坐垫角度与高度调整",
    tags: ["坐垫", "角度", "高度", "调整"]
  },
  
  // 操控系统 - 碗组保养
  {
    id: 71,
    title: "自行车碗组保养教程",
    bvid: "BV1fLyJYzEmM",
    aid: "113349303994915",
    cid: "26406683842",
    category: "操控系统",
    subCategory: "碗组",
    thirdCategory: "保养调试",
    description: "碗组保养方法",
    tags: ["碗组", "保养", "教程"]
  },
  
  // 传动系统 - 中轴异响
  {
    id: 72,
    title: "自行车中轴保养",
    bvid: "BV1oEyJYqESU",
    aid: "113349337550064",
    cid: "26406748767",
    category: "传动系统",
    subCategory: "中轴",
    thirdCategory: "保养",
    fourthCategory: "异响解决",
    description: "中轴异响解决",
    tags: ["中轴", "异响", "解决方案"]
  },
  
  // 轮组系统 - 花鼓轴承
  {
    id: 73,
    title: "自行车塔基轴承拆卸保养",
    bvid: "BV1c5yJYGEeP",
    aid: "113349388075993",
    cid: "26406880380",
    category: "轮组系统",
    subCategory: "花鼓",
    thirdCategory: "轴承维护",
    fourthCategory: "塔基轴承",
    description: "塔基轴承拆卸保养",
    tags: ["塔基轴承", "拆卸", "保养"]
  },
  
  // 轮组系统 - 调圈
  {
    id: 74,
    title: "自行车轮组偏摆校正教程",
    bvid: "BV1fw17YeEAA",
    aid: "113386046097222",
    cid: "26508463540",
    category: "轮组系统",
    subCategory: "轮组主体",
    thirdCategory: "调圈校正",
    fourthCategory: "偏摆调试",
    description: "轮组偏摆校正",
    tags: ["轮组", "偏摆", "校正"]
  },
  {
    id: 75,
    title: "自行车辐条编圈教学",
    bvid: "BV1znSaYpEAZ",
    aid: "113391884568981",
    cid: "26524713405",
    category: "轮组系统",
    subCategory: "轮组主体",
    thirdCategory: "调圈校正",
    fourthCategory: "编圈技术",
    description: "辐条编圈技术",
    tags: ["辐条", "编圈", "教学"]
  },
  {
    id: 76,
    title: "自行车调圈技术详解",
    bvid: "BV1dXSGYfEJG",
    aid: "113397488223313",
    cid: "26539985560",
    category: "轮组系统",
    subCategory: "轮组主体",
    thirdCategory: "调圈校正",
    fourthCategory: "编圈技术",
    description: "调圈技术详解",
    tags: ["调圈", "技术", "详解"]
  },
  
  // 变速系统 - 全管走线
  {
    id: 77,
    title: "自行车外走线 内走线走线穿线",
    bvid: "BV1uimBYSE73",
    aid: "113457399660706",
    cid: "26696157202",
    category: "变速系统",
    subCategory: "手变/线管",
    thirdCategory: "走线优化",
    description: "外走线 内走线走线穿线",
    tags: ["外走线", "内走线", "走线穿线"]
  },
  
  // 轮组系统 - 补胎
  {
    id: 78,
    title: "自行车内胎扎胎修补方法",
    bvid: "BV12cmSYGEEa",
    aid: "113482515088684",
    cid: "26762216491",
    category: "轮组系统",
    subCategory: "轮胎/内胎",
    thirdCategory: "补胎",
    description: "内胎扎胎修补方法",
    tags: ["内胎", "扎胎", "修补"]
  },
  
  // 座垫系统 - 座管下滑
  {
    id: 79,
    title: "自行车座管下滑三种解决方法",
    bvid: "BV1yPmSYgEmk",
    aid: "113482548642858",
    cid: "26762348186",
    category: "座垫系统",
    subCategory: "座管",
    thirdCategory: "问题解决",
    fourthCategory: "下滑处理",
    description: "座管下滑三种解法",
    tags: ["座管", "下滑", "解决方法"]
  },
  
  // 车架系统 - 避震前叉
  {
    id: 80,
    title: "FOX避震前叉保养教程",
    bvid: "BV1vWmSY4E2m",
    aid: "113482598973939",
    cid: "26762413017",
    category: "车架",
    subCategory: "前叉系统",
    thirdCategory: "避震前叉",
    fourthCategory: "保养",
    description: "FOX避震前叉保养",
    tags: ["FOX", "避震前叉", "保养"]
  },
  
  // 刹车系统 - SRAM
  {
    id: 81,
    title: "SRAM速联山地油碟刹车截管注油换油",
    bvid: "BV1ZQSAYBEDu",
    aid: "113510851805712",
    cid: "26846760133",
    category: "刹车系统",
    subCategory: "油碟刹车",
    thirdCategory: "注油/换油",
    description: "SRAM速联山地油碟刹车截管注油换油",
    tags: ["SRAM", "换油"]
  },
  
  // 工具与维护 - 工具选购
  {
    id: 82,
    title: "自行车维修工具种类与选购指南",
    bvid: "BV1LLSAYPE19",
    aid: "113510986024547",
    cid: "26846824601",
    category: "工具与维护",
    subCategory: "专用工具",
    thirdCategory: "工具指南",
    description: "维修工具种类与选购",
    tags: ["维修工具", "选购", "指南"]
  },
  
  // 工具与维护 - 异响诊断
  {
    id: 83,
    title: "自行车异响合集诊断",
    bvid: "BV12jSPYHEVP",
    aid: "113512730853833",
    cid: "26850494203",
    category: "工具与维护",
    subCategory: "异响排查",
    thirdCategory: "综合诊断",
    description: "异响合集诊断",
    tags: ["异响", "诊断", "合集"]
  },
  
  // 传动系统 - 飞轮磨损
  {
    id: 84,
    title: "自行车飞轮磨损更换链条方案",
    bvid: "BV1H3STYpExE",
    aid: "113512898626283",
    cid: "26851281112",
    category: "传动系统",
    subCategory: "飞轮",
    thirdCategory: "磨损处理",
    description: "飞轮磨损更换链条方案",
    tags: ["飞轮", "磨损", "链条", "更换"]
  },
  
  // 工具与维护 - 飞轮跳齿
  {
    id: 85,
    title: "自行车车头异响变速线管异响",
    bvid: "BV1yASTYZEzS",
    aid: "113512982581235",
    cid: "26851673272",
    category: "工具与维护",
    subCategory: "异响排查",
    thirdCategory: "车头异响",
    description: "车头异响解决",
    tags: ["车头", "解决"]
  },
  
  // 工具与维护 - 中轴脚踏异响
  {
    id: 86,
    title: "自行车脚踏变形，中轴磨损",
    bvid: "BV1FYSKYJEPG",
    aid: "113513049689975",
    cid: "26852003147",
    category: "工具与维护",
    subCategory: "异响排查",
    thirdCategory: "脚踏相关",
    description: "脚踏变形，中轴磨损",
    tags: ["中轴", "脚踏", "变形"]
  },
  
  // 操控系统 - 碗组保养（续）
  {
    id: 87,
    title: "自行车车头晃动框量松动问题排查解决方法",
    bvid: "BV1vb6MY4EdG",
    aid: "113584151465851",
    cid: "27147568904",
    category: "工具与维护",
    subCategory: "车头晃动",
    thirdCategory: "问题排查",
    description: "车头晃动框量松动问题排查解决方法",
    tags: ["问题"]
  },
  
  // 变速系统 - 一体把走线
  {
    id: 88,
    title: "公路车全内走线一体把走线不顺导致手变变速很紧解决办法",
    bvid: "BV1hZ6TYUE6d",
    aid: "113584218703335",
    cid: "27147766040",
    category: "工具与维护",
    subCategory: "一体把",
    thirdCategory: "走线优化",
    description: "一体把走线优化",
    tags: ["一体把", "内走线", "优化"]
  },
  
  // 座垫系统 - 座管异响
  {
    id: 89,
    title: "自行车座管异响解决方案",
    bvid: "BV1JbzSYyEwg",
    aid: "113589520172793",
    cid: "27165133933",
    category: "座垫系统",
    subCategory: "座管",
    thirdCategory: "问题解决",
    fourthCategory: "异响排查",
    description: "座管异响解决方案",
    tags: ["座管", "异响", "解决"]
  },
  
  // 传动系统 - 第三方牙盘
  {
    id: 90,
    title: "驭勇PR5+牙盘安装教程",
    bvid: "BV1CtqTYtEvb",
    aid: "113623863198171",
    cid: "27261799169",
    category: "传���系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "安装/调试",
    fourthCategory: "第三方牙盘",
    description: "驭勇PR5+牙盘安装",
    tags: ["驭勇", "PR5+", "牙盘", "安装"]
  },
  
  // 轮组系统 - 花鼓棘轮
  {
    id: 91,
    title: "自行车螺丝螺纹攻牙攻丝方法",
    bvid: "BV1cXqKYpE7W",
    aid: "113623913530286",
    cid: "27262125388",
    category: "轮组系统",
    subCategory: "螺丝",
    thirdCategory: "轴承维护",
    description: "螺丝螺纹攻牙攻丝方法",
    tags: ["螺丝", "螺纹", "攻牙"]
  },
  {
    id: 92,
    title: "花鼓棘齿更换150T到75T",
    bvid: "BV1fCkHY3EDf",
    aid: "113668977068500",
    cid: "27392674384",
    category: "轮组系统",
    subCategory: "花鼓",
    thirdCategory: "轴承维护",
    fourthCategory: "棘轮升级",
    description: "花鼓棘齿更换（150T→75T）",
    tags: ["花鼓", "棘齿", "150T", "75T"]
  },
  
  // 脚踏系统 - 锁片定位
  {
    id: 93,
    title: "公路自行车锁片安装调整",
    bvid: "BV1AxkSYtEWR",
    aid: "113685804615940",
    cid: "27442938829",
    category: "脚踏系统",
    subCategory: "锁踏",
    thirdCategory: "锁片定位",
    description: "公路锁片安装调整",
    tags: ["公路车", "锁片", "安装", "调整"]
  },
  
  // 车架系统 - 五通滑牙
  {
    id: 94,
    title: "BSA五通滑牙攻牙修复方法",
    bvid: "BV1kmkUYWE8s",
    aid: "113685955674717",
    cid: "27443724923",
    category: "车架",
    subCategory: "车架主体",
    thirdCategory: "五通维修",
    fourthCategory: "螺纹修复",
    description: "BSA五通滑牙攻牙方法",
    tags: ["BSA", "五通", "滑牙", "攻牙"]
  },
  
  // 座垫系统 - 升降座管
  {
    id: 95,
    title: "自行车棘爪塔基拆卸保养",
    bvid: "BV1qokUY7E2t",
    aid: "113686056338894",
    cid: "27444514537",
    category: "座垫系统",
    subCategory: "座管",
    thirdCategory: "拆卸保养",
    fourthCategory: "棘爪塔基",
    description: "棘爪塔基拆卸保养",
    tags: ["棘爪", "塔基", "拆卸", "保养"]
  },
  {
    id: 96,
    title: "升降座管详细安装教程",
    bvid: "BV1TYkZYREzx",
    aid: "113708319638242",
    cid: "27512144836",
    category: "座垫系统",
    subCategory: "座管",
    thirdCategory: "安装调试",
    fourthCategory: "升降座管",
    description: "升降座管详细安装",
    tags: ["升降座管", "详细", "安装"]
  },
  
  // 轮组系统 - 塔基轴承保养
  {
    id: 97,
    title: "花鼓塔基轴承安装拆卸教程",
    bvid: "BV1KBCaYJE5x",
    aid: "113714594316702",
    cid: "27531412039",
    category: "轮组系统",
    subCategory: "花鼓",
    thirdCategory: "轴承维护",
    fourthCategory: "塔基轴承",
    description: "塔基轴承安装拆卸",
    tags: ["塔基轴承", "安装", "拆卸"]
  },
  
  // 传动系统 - XCADEY功率计
  {
    id: 98,
    title: "XCADEY功率计安装教程",
    bvid: "BV1mECvYfEa6",
    aid: "113714644649398",
    cid: "27532460334",
    category: "传动系统",
    subCategory: "牙盘/曲柄",
    thirdCategory: "安装/调试",
    fourthCategory: "第三方牙盘",
    description: "XCADEY功率计安装",
    tags: ["XCADEY", "功率计", "安装"]
  },
  
  // 轮组系统 - 滚珠花鼓
  {
    id: 99,
    title: "滚珠钢珠花鼓拆卸更换保养教程",
    bvid: "BV1db6hYREeE",
    aid: "113736941571959",
    cid: "27598586052",
    category: "轮组系统",
    subCategory: "花鼓",
    thirdCategory: "轴承维护",
    fourthCategory: "滚珠花鼓",
    description: "滚珠钢珠花鼓保养",
    tags: ["滚珠花鼓", "钢珠", "保养"]
  },
  

];

// 获取所有分类
export const getCategories = (): string[] => {
  return Array.from(new Set(videosData.map(video => video.category)));
};

// 根据分类获取视频
export const getVideosByCategory = (category: string): VideoData[] => {
  return videosData.filter(video => video.category === category);
};

// 根据ID获取视频
export const getVideoById = (id: number): VideoData | undefined => {
  return videosData.find(video => video.id === id);
};

// 搜索视频
export const searchVideos = (query: string): VideoData[] => {
  const lowercaseQuery = query.toLowerCase();
  return videosData.filter(video => 
    video.title.toLowerCase().includes(lowercaseQuery) ||
    video.description.toLowerCase().includes(lowercaseQuery) ||
    video.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// 获取子分类
export const getSubCategories = (category: string): string[] => {
  const videos = getVideosByCategory(category);
  return Array.from(new Set(videos.map(video => video.subCategory)));
};

// 获取三级分类
export const getThirdCategories = (category: string, subCategory: string): string[] => {
  const videos = videosData.filter(video => 
    video.category === category && video.subCategory === subCategory
  );
  return Array.from(new Set(videos.map(video => video.thirdCategory)));
};

// 获取四级分类
export const getFourthCategories = (category: string, subCategory: string, thirdCategory: string): string[] => {
  const videos = videosData.filter(video => 
    video.category === category && 
    video.subCategory === subCategory && 
    video.thirdCategory === thirdCategory &&
    video.fourthCategory
  );
  return Array.from(new Set(videos.map(video => video.fourthCategory!)));
};

// 根据多级分类获取视频
export const getVideosByMultipleCategories = (
  category?: string,
  subCategory?: string,
  thirdCategory?: string,
  fourthCategory?: string
): VideoData[] => {
  return videosData.filter(video => {
    if (category && video.category !== category) return false;
    if (subCategory && video.subCategory !== subCategory) return false;
    if (thirdCategory && video.thirdCategory !== thirdCategory) return false;
    if (fourthCategory && video.fourthCategory !== fourthCategory) return false;
    return true;
  });
};
