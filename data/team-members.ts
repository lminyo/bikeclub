// 团队成员数据类型定义
export interface ContactInfo {
  phone?: string
  email?: string
  wechat?: {
    id: string
    qrCode?: string // 二维码图片路径，可选
  }
}

export interface Certificate {
  name: string
  issuer: string
  date: string
  image: string
  level: string
}

export interface Equipment {
  category: string
  items: {
    name: string
    specs: string
    image: string
  }[]
}

export interface Portfolio {
  title: string
  image: string
  views: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  type: "tech" | "photographer" // 成员类型
  avatar: string
  bio: string
  specialties: string[]
  experience: string
  location: string
  contact: ContactInfo
  certificates?: Certificate[] // 技术成员专用
  equipment?: Equipment[] // 摄影师专用
  portfolio?: Portfolio[] // 摄影师专用
  achievements?: string[] // 技术成员专用
}

// 团队成员数据
export const teamMembers: TeamMember[] = [
  // 技术成员
  {
    id: 1,
    name: "张志强",
    role: "首席技术专家",
    type: "tech",
    avatar: "/tech-member-1.jpg",
    bio: "5年自行车维修经验，精通各类车型维护保养，持有多项专业认证。",
    specialties: ["传动系统", "刹车系统", "变速调试", "车架维修"],
    experience: "5年+",
    location: "汕头市",
    contact: {
      phone: "138****8888",
      email: "tech@cycling-club.com",
      wechat: {
        id: "tech_zhang_2024",
        qrCode: "/wechat-qr-zhang.jpg", // 有二维码
      },
    },
    certificates: [
      {
        name: "自行车技师资格证书",
        issuer: "中国自行车协会",
        date: "2023年",
        image: "/cert-1.jpg",
        level: "高级",
      },
      {
        name: "禧玛诺认证技师",
        issuer: "Shimano",
        date: "2024年",
        image: "/cert-2.jpg",
        level: "专业级",
      },
      {
        name: "SRAM维修认证",
        issuer: "SRAM",
        date: "2023年",
        image: "/cert-3.jpg",
        level: "认证技师",
      },
    ],
    achievements: ["维修车辆超过500台", "培训新手技师20+人", "制作维修教程99期", "俱乐部技术顾问"],
  },
  {
    id: 2,
    name: "李明华",
    role: "维修技术专员",
    type: "tech",
    avatar: "/tech-member-2.jpg",
    bio: "专注于电子变速和油碟刹车系统，对新技术有深入研究。",
    specialties: ["电子变速", "油碟刹车", "功率计", "智能设备"],
    experience: "3年+",
    location: "汕头市",
    contact: {
      phone: "139****9999",
      wechat: {
        id: "tech_li_repair", // 只有微信号，没有二维码
      },
    },
    certificates: [
      {
        name: "电子变速系统认证",
        issuer: "Shimano Di2",
        date: "2024年",
        image: "/cert-4.jpg",
        level: "专业级",
      },
      {
        name: "油压刹车系统认证",
        issuer: "专业培训机构",
        date: "2023年",
        image: "/cert-5.jpg",
        level: "高级",
      },
    ],
    achievements: ["电子变速调试专家", "油碟系统维修200+次", "技术培训讲师", "新技术推广者"],
  },
  {
    id: 3,
    name: "王建设",
    role: "机械维修师",
    type: "tech",
    avatar: "/tech-member-3.jpg",
    bio: "专业机械维修师，擅长传统机械变速系统和车架维修。",
    specialties: ["机械变速", "车架维修", "轮组调试", "传统维修"],
    experience: "4年+",
    location: "汕头市",
    contact: {
      email: "wangjs@cycling-club.com", // 只有邮箱
      phone: "137****7777",
    },
    certificates: [
      {
        name: "机械维修师证书",
        issuer: "职业技能鉴定中心",
        date: "2022年",
        image: "/cert-6.jpg",
        level: "中级",
      },
    ],
    achievements: ["机械系统维修专家", "车架修复技术精湛", "轮组调试高手", "传统工艺传承者"],
  },

  // 摄影师成员
  {
    id: 4,
    name: "陈美玲",
    role: "首席摄影师",
    type: "photographer",
    avatar: "/photographer-1.jpg",
    bio: "专业摄影师，擅长运动摄影和风光摄影，为俱乐部记录精彩瞬间。",
    specialties: ["运动摄影", "风光摄影", "活动记录", "视频制作"],
    experience: "6年+",
    location: "汕头市",
    contact: {
      phone: "137****7777",
      email: "photo@cycling-club.com",
      wechat: {
        id: "photo_chen_2024",
        qrCode: "/wechat-qr-chen.jpg", // 有二维码
      },
    },
    equipment: [
      {
        category: "相机机身",
        items: [
          { name: "Canon EOS R5", specs: "4500万像素全画幅", image: "/camera-1.jpg" },
          { name: "Canon EOS R6 Mark II", specs: "2420万像素全画幅", image: "/camera-2.jpg" },
        ],
      },
      {
        category: "镜头",
        items: [
          { name: "Canon RF 24-70mm f/2.8L", specs: "标准变焦镜头", image: "/lens-1.jpg" },
          { name: "Canon RF 70-200mm f/2.8L", specs: "长焦镜头", image: "/lens-2.jpg" },
          { name: "Canon RF 16-35mm f/2.8L", specs: "广角镜头", image: "/lens-3.jpg" },
        ],
      },
      {
        category: "辅助设备",
        items: [
          { name: "DJI Mini 3 Pro", specs: "航拍无人机", image: "/drone-1.jpg" },
          { name: "Manfrotto 三脚架", specs: "碳纤维专业三脚架", image: "/tripod-1.jpg" },
          { name: "Godox 闪光灯", specs: "专业闪光灯系统", image: "/flash-1.jpg" },
        ],
      },
    ],
    portfolio: [
      { title: "2024春季骑行大会", image: "/portfolio-1.jpg", views: "2.5K" },
      { title: "潮汕古村骑行记录", image: "/portfolio-2.jpg", views: "1.8K" },
      { title: "海滨路夜骑", image: "/portfolio-3.jpg", views: "3.2K" },
      { title: "山地挑战赛", image: "/portfolio-4.jpg", views: "2.1K" },
    ],
  },
  {
    id: 5,
    name: "王建国",
    role: "视频制作专员",
    type: "photographer",
    avatar: "/photographer-2.jpg",
    bio: "专注于视频拍摄和后期制作，为俱乐部制作宣传片和教学视频。",
    specialties: ["视频拍摄", "后期剪辑", "宣传片制作", "教学视频"],
    experience: "4年+",
    location: "汕头市",
    contact: {
      wechat: {
        id: "video_wang_pro", // 只有微信，没有二维码
      },
    },
    equipment: [
      {
        category: "摄像设备",
        items: [
          { name: "Sony FX3", specs: "全画幅电影摄像机", image: "/video-camera-1.jpg" },
          { name: "DJI Pocket 2", specs: "手持云台相机", image: "/video-camera-2.jpg" },
        ],
      },
      {
        category: "音频设备",
        items: [
          { name: "Rode VideoMic Pro+", specs: "专业收音麦克风", image: "/mic-1.jpg" },
          { name: "Zoom H4n Pro", specs: "便携式录音机", image: "/recorder-1.jpg" },
        ],
      },
      {
        category: "后期设备",
        items: [
          { name: "MacBook Pro M2", specs: "16英寸 32GB内存", image: "/laptop-1.jpg" },
          { name: "LG 27UP850", specs: "4K专业显示器", image: "/monitor-1.jpg" },
        ],
      },
    ],
    portfolio: [
      { title: "俱乐部宣传片2024", image: "/video-1.jpg", views: "5.2K" },
      { title: "维修教程系列", image: "/video-2.jpg", views: "8.1K" },
      { title: "骑行安全指南", image: "/video-3.jpg", views: "3.7K" },
      { title: "新手入门教程", image: "/video-4.jpg", views: "6.3K" },
    ],
  },
  {
    id: 6,
    name: "林小雅",
    role: "活动摄影师",
    type: "photographer",
    avatar: "/photographer-3.jpg",
    bio: "年轻有活力的摄影师，专门负责俱乐部日常活动的拍摄记录。",
    specialties: ["活动摄影", "人像摄影", "社交媒体", "快速出片"],
    experience: "2年+",
    location: "汕头市",
    contact: {
      phone: "135****5555",
      email: "linyaya@cycling-club.com",
      // 没有微信联系方式
    },
    equipment: [
      {
        category: "相机设备",
        items: [
          { name: "Canon EOS R10", specs: "2420万像素APS-C", image: "/camera-3.jpg" },
          { name: "Canon RF-S 18-150mm", specs: "一镜走天下", image: "/lens-4.jpg" },
        ],
      },
      {
        category: "便携设备",
        items: [
          { name: "iPhone 15 Pro", specs: "手机摄影补充", image: "/phone-1.jpg" },
          { name: "便携三脚架", specs: "轻量化三脚架", image: "/tripod-2.jpg" },
        ],
      },
    ],
    portfolio: [
      { title: "周末休闲骑行", image: "/portfolio-5.jpg", views: "1.2K" },
      { title: "新人入团仪式", image: "/portfolio-6.jpg", views: "0.9K" },
      { title: "技术培训现场", image: "/portfolio-7.jpg", views: "1.5K" },
      { title: "团队合影", image: "/portfolio-8.jpg", views: "2.8K" },
    ],
  },
]

// 辅助函数：根据类型获取成员
export const getTechMembers = () => teamMembers.filter((member) => member.type === "tech")
export const getPhotographers = () => teamMembers.filter((member) => member.type === "photographer")

// 辅助函数：根据ID获取成员
export const getMemberById = (id: number) => teamMembers.find((member) => member.id === id)
