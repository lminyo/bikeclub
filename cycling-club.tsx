"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bike,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Phone,
  Mail,
  GraduationCap,
  Coffee,
  Mountain,
  Menu,
  X,
  Play,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

/**
 * 平滑滚动到指定元素
 * @param {string} elementId - 目标元素ID（可带#前缀）
 * @returns {boolean} - 滚动是否成功
 */
const scrollToElement = (elementId: string) => {
  // 移除可能存在的#前缀获取纯ID
  const targetId = elementId.replace("#", "")
  const element = document.getElementById(targetId)

  if (!element) return false

  // 计算目标位置（考虑头部高度偏移）
  const headerOffset = 80
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  // 尝试使用平滑滚动，失败时回退到即时滚动
  try {
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  } catch (error) {
    window.scrollTo(0, offsetPosition)
  }

  return true
}

/**
 * 移动端导航组件
 * 提供触摸友好的导航菜单，支持手势操作和平滑滚动
 */
function MobileNav() {
  // 状态管理
  const [isOpen, setIsOpen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // 手势处理常量
  const SWIPE_THRESHOLD = 50 // 滑动阈值（像素）
  const MENU_CLOSE_DELAY = 300 // 菜单关闭后滚动延迟（毫秒）

  // 触摸事件处理函数
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientY)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientY)
  const handleTouchEnd = () => {
    const swipeDistance = touchStart - touchEnd
    if (swipeDistance > SWIPE_THRESHOLD) {
      // 向上滑动，关闭菜单
      setIsOpen(false)
    }
  }

  /**
   * 处理导航链接点击
   * 关闭菜单并滚动到目标位置
   */
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault() // 阻止默认锚点行为
    setIsOpen(false) // 关闭菜单

    // 延迟滚动，等待菜单关闭动画完成
    setTimeout(() => scrollToElement(href), MENU_CLOSE_DELAY)
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:bg-red-50 transition-colors duration-300"
        aria-label="菜单"
      >
        {isOpen ? (
          <X className="h-6 w-6 transform transition-transform duration-300" />
        ) : (
          <Menu className="h-6 w-6 transform transition-transform duration-300 hover:rotate-12" />
        )}
      </Button>

      {/* 移动导航菜单 - 支持手势操作 */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50 transform transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {/* 导航链接列表 - 带级联动画效果 */}
            {[
              { href: "#home", label: "首页" },
              { href: "#teams", label: "团队" },
              { href: "#culture", label: "潮汕文化" },
              { href: "/videos", label: "维修教程" },
              { href: "#contact", label: "联系我们" },
            ].map((item, index) => {
              // 为每个链接添加级联延迟效果
              const animationDelay = `${index * 50}ms`

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2 transform hover:translate-x-2 duration-300 flex items-center"
                  onClick={(e: React.MouseEvent) => {
                    if (item.href.startsWith('#')) {
                      handleNavClick(e, item.href)
                    } else {
                      setIsOpen(false)
                    }
                  }}
                  onTouchEnd={(e: React.TouchEvent) => {
                    e.stopPropagation() // 防止触摸事件冒泡
                    if (item.href.startsWith('#')) {
                      e.preventDefault()
                      setIsOpen(false)
                      setTimeout(() => scrollToElement(item.href), MENU_CLOSE_DELAY)
                    } else {
                      setIsOpen(false)
                    }
                  }}
                  style={{ transitionDelay: animationDelay }}
                >
                  {item.label}
                </Link>
              )
            })}
            {/* 活动按钮 */}
            <Link
              href="#activities"
              onClick={(e: React.MouseEvent) => handleNavClick(e, "#activities")}
              onTouchEnd={(e: React.TouchEvent) => {
                e.stopPropagation()
                e.preventDefault()
                setIsOpen(false)
                setTimeout(() => scrollToElement("#activities"), MENU_CLOSE_DELAY)
              }}
              className="mt-2"
            >
              <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white w-full transform transition-transform duration-300 hover:scale-105 active:scale-95">
                查看活动
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

// 二维码弹窗组件
function QRCodeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">加入休闲骑行团</h3>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-4">
            <Image
              src="/weixin.jpg"
              alt="微信二维码"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-medium text-green-600">📱 �����码或截图添加微信好友</p>
            <p>微信号：q6622070</p>
            <p className="text-xs text-gray-500">添加时请备注"加入休闲团"</p>
          </div>

          <Button onClick={onClose} className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">
            我知道了
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CyclingClub() {
  // ===== 状态管理 =====
  const [scrollY, setScrollY] = useState(0)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [showQRModal, setShowQRModal] = useState(false)

  // ===== 常量定义 =====
  // 滚动动画触发阈值（视口高度的比例）
  const SCROLL_TRIGGER_THRESHOLD = 0.75
  // 触摸设备的反馈效果类
  const TOUCH_FEEDBACK_CLASS = "active:scale-95 active:brightness-90 transition-all duration-200"

  // ===== 副作用 =====
  useEffect(() => {
    // 检测触摸设备
    const isTouchEnabled = "ontouchstart" in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouchEnabled)

    // 滚动事件处理
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })

    // 清理函数
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /**
   * 根据元素在视口中的位置返回适当的动画类
   * @param {string} elementId - 目标元素ID
   * @returns {string} - 要应用的CSS类
   */
  const fadeInOnScroll = (elementId: string): string => {
    const element = document.getElementById(elementId)
    if (!element) return ""

    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    // 当元素进入视口的特定部分时触发动画
    return elementTop < windowHeight * SCROLL_TRIGGER_THRESHOLD
      ? "opacity-100 translate-y-0" // 元素可见
      : "opacity-0 translate-y-10" // 元素隐藏
  }

  // 根据设备类型应用适当的触摸反馈
  const touchFeedbackClass = isTouchDevice ? TOUCH_FEEDBACK_CLASS : ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-full">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  汕头潮青御风俱乐部
                </h1>
                <p className="text-xs md:text-sm text-gray-600">SHANTOU CHAOQING CYCLING CLUB</p>
              </div>
            </Link>

            {/* 桌面端导航 */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* 导航链接列表 */}
              {[
                { href: "#home", label: "首页" },
                { href: "#teams", label: "团队" },
                { href: "#culture", label: "潮汕文化" },
                { href: "/videos", label: "维修教程" },
                { href: "#contact", label: "联系我们" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                  onClick={(e: React.MouseEvent) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault()
                      scrollToElement(item.href)
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* 活动按钮 */}
              <Link
                href="#activities"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  scrollToElement("#activities")
                }}
              >
                <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6">
                  查看活动
                </Button>
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative py-12 md:py-20 overflow-hidden min-h-[80vh] flex items-center">
        {/* 移动端视频优化 */}
        <style jsx>{`
          @media (max-width: 640px) {
            .hero-content {
              padding-top: 4rem;
              padding-bottom: 4rem;
            }
            .hero-title {
              font-size: 2rem;
              line-height: 1.2;
            }
            .hero-description {
              font-size: 1rem;
            }
          }
        `}</style>
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/ride.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-orange-900/30"></div>
          {/* 添加动态波浪效果 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
            <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="rgba(255,255,255,0.2)"
                fillOpacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave-slow"
              ></path>
              <path
                fill="rgba(255,255,255,0.3)"
                fillOpacity="1"
                d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,112C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave-fast"
              ></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 hero-content">
            <div className="space-y-6 lg:space-y-8 text-white">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 px-4 py-2 text-sm font-medium">🎓 学生骑行团体</Badge>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight hero-title">
                  <span className="text-white drop-shadow-lg">御风同行</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                    互助成长
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md max-w-3xl mx-auto px-4 hero-description">
                  加入汕头潮青御风俱乐部，与同窗好友一起探索家乡美景，挑战自我极限！
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 md:px-8 py-4 text-base md:text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
                  onClick={() => scrollToElement("#teams")}
                >
                  <GraduationCap className="mr-2 h-5 w-5 animate-bounce-subtle" />
                  加入学生团体
                </Button>
                <Link href="#activities" onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  scrollToElement("#activities");
                }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-white/10 px-6 md:px-8 py-4 text-base md:text-lg backdrop-blur-sm transition-all duration-300 w-full sm:w-auto transform active:scale-95"
                  >
                    <Calendar className="mr-2 h-5 w-5 animate-pulse-subtle" />
                    查看活动安排
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 pt-4 px-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-400 drop-shadow-lg">200+</div>
                  <div className="text-sm md:text-base text-white/80">学生会员</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400 drop-shadow-lg">50+</div>
                  <div className="text-sm md:text-base text-white/80">骑行活动</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-lg">20+</div>
                  <div className="text-sm md:text-base text-white/80">潮汕路线</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-12 md:py-20 bg-white transition-all duration-1000 transform">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">🚴‍♂️ 俱乐部团队</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">两大骑行团队</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据不同的骑行需求和水平，我们设立了休闲骑行团和训练团，让每位同学都能找到适合自己的团队
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transform transition-all duration-500 opacity-0 translate-y-10"
            id="teams-grid"
            style={{
              transitionDelay: "200ms",
              opacity: scrollY > 300 ? 1 : 0,
              transform: scrollY > 300 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* 休闲骑行团 */}
            <Card
              className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden ${touchFeedbackClass}`}
            >
              <div className="relative">
                <Image
                  src="/relax.jpg"
                  alt="休闲骑行团"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">
                    <Coffee className="w-3 h-3 mr-1" />
                    休闲团队
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-2xl font-bold mb-2">休闲骑行团</h4>
                  <p className="text-sm opacity-90">享受骑行乐趣，探索潮汕美景</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-green-500" />
                    <span>适合所有水平的同学参与</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-green-500" />
                    <span>探索汕头市区及周边景点</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-green-500" />
                    <span>每周末组织1-2次活动</span>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">主要活动：</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 汕头海滨路骑行</li>
                      <li>• 潮汕古村落探访</li>
                      <li>• 美食骑行之旅</li>
                      <li>• 校园周边休闲骑行</li>
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    onClick={() => setShowQRModal(true)}
                  >
                    加入休闲团
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 训练团 */}
            <Card
              className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden ${touchFeedbackClass}`}
            >
              <div className="relative">
                <Image
                  src="/competition.jpg"
                  alt="训练团"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white">
                    <Mountain className="w-3 h-3 mr-1" />
                    训练团队
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-2xl font-bold mb-2">训练团</h4>
                  <p className="text-sm opacity-90">专业训练，挑战极限</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-5 h-5 mr-2 text-red-500" />
                    <span>有一定骑行基础的同学</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                    <span>挑战粤东地区山地路线</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-red-500" />
                    <span>每周3-4次训练活动</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-800 mb-2">主要训练：</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 体能耐力训练</li>
                      <li>• 山地技术提升</li>
                      <li>• 长距离骑行挑战</li>
                      <li>• 参加各类骑行比赛</li>
                    </ul>
                  </div>
                  <Link href="https://qm.qq.com/q/j4katbFLGg" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
                      加入训练团【工夫骑士团】
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">
              <Wrench className="w-4 h-4 mr-1" />
              维修教程
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">自行车维修视频教程</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专业的自行车维修教学视频，涵盖车架、传动、刹车、变速等各个系统的维修保养技巧
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-2">105期专业教程</h4>
                      <p className="text-blue-100 mb-4">
                        从基础保养到高级维修，系统性学习自行车维护技能
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          车架系统
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          传动系统
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          刹车系统
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          变速系统
                        </Badge>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <h5 className="font-bold text-gray-800 mb-2">基础维修</h5>
                      <p className="text-sm text-gray-600">链条、刹车、变速等日常维护</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <h5 className="font-bold text-gray-800 mb-2">进阶技能</h5>
                      <p className="text-sm text-gray-600">中轴、花鼓、避震等专业维修</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🛠️</span>
                      </div>
                      <h5 className="font-bold text-gray-800 mb-2">故障排查</h5>
                      <p className="text-sm text-gray-600">异响、滑牙等问题解决方案</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Link href="/videos">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        观看教程视频
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Chaoshan Culture Section */}
      <section
        id="culture"
        className="py-12 md:py-20 bg-gradient-to-br from-red-50 to-orange-50 transition-all duration-1000 transform"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">🏮 潮汕特色</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">骑行中的潮汕文化</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              在骑行中感受潮汕文化的魅力，用车轮连接传统与现代，让青春在潮汕大地上绽放光彩
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 transform transition-all duration-500 opacity-0 translate-y-10"
            id="culture-grid"
            style={{
              transitionDelay: "200ms",
              opacity: scrollY > 1000 ? 1 : 0,
              transform: scrollY > 1000 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="text-center group">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏛️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">古建筑探访</h4>
              <p className="text-gray-600">骑行探访潮汕古建筑群，感受传统文化的厚重底蕴，了解家乡的历史文化</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🥟</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">美食骑行</h4>
              <p className="text-gray-600">骑行寻找地道潮汕美食，品尝牛肉丸、肠粉、功夫茶，在美食中补充体力</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌊</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">海滨风光</h4>
              <p className="text-gray-600">沿着汕头海岸线骑行，欣赏南海风光，感受海风拂面的惬意时光</p>
            </div>
          </div>

          <div
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:shadow-2xl opacity-0 translate-y-10"
            id="activities-card"
            style={{
              transitionDelay: "300ms",
              opacity: scrollY > 1800 ? 1 : 0,
              transform: scrollY > 1800 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">经典潮汕骑行路线</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-full mt-1">
                      <MapPin className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">汕头老城区文化线</h5>
                      <p className="text-gray-600 text-sm">小公园→开埠区→骑楼建筑群→汕头港</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">海滨风光线</h5>
                      <p className="text-gray-600 text-sm">海滨路→南澳大桥→青澳湾→海岛风光</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <MapPin className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">潮汕古村线</h5>
                      <p className="text-gray-600 text-sm">龙湖古寨→前美古村→樟林古港→传统文化</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image src="/chaoshan.png" alt="潮汕风光" width={400} height={300} className="rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="activities" className="py-12 md:py-20 bg-white transition-all duration-1000 transform">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">📅 近期活动</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">最近活动安排</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精心安排的学生骑行活动，在学习之余享受骑行乐趣，结识更多志同道合的同学
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Card
                className={`hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-red-50 ${touchFeedbackClass}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-orange-500 text-white">🔥 重要公告</Badge>
                    <span className="text-sm text-gray-500">2025.06.20</span>
                  </div>
                  <CardTitle className="text-lg text-orange-700">2025暑期骑行激励计划</CardTitle>
                  <CardDescription>
                    <Trophy className="w-4 h-4 inline mr-1" />
                    总预算600元现金奖励
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">暑期骑行激励计划重磅启动！赢现金红包，享安全骑行！</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-orange-600 font-medium">7月1日-8月31日</span>
                    <span className="text-xs text-green-600 font-medium">人人可参与</span>
                  </div>
                  <Link href="/announcement">
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                      查看详情
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 md:py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white transition-all duration-1000 transform"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">加入潮青御风大家庭</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              在汕头这片热土上，让我们一起用车轮书写青春故事，在骑行中收获友谊与成长
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">管理员微信</h4>
                <p className="opacity-90">q6622070</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">邮箱地址</h4>
                <p className="opacity-90">2077943103@qq.com</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">招新要求</h4>
                <p className="opacity-90">在校学生���热爱骑行</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="https://www.onelap.cn/app_share/club/detail.html?id=3230"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg w-full sm:w-auto"
                >
                  <Users className="mr-2 h-5 w-5 sm:h-6 sm:w-6 animate-pulse-subtle" />
                  加入骑行俱乐部
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-full">
                  <Bike className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">汕头潮青御风俱乐部</h4>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                汕头地区专业的学生骑行团体，致力于推广校园骑行文化，为同学们提供健康有趣的课余活动。
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">俱乐部团队</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#teams" className="hover:text-white transition-colors">
                    休闲骑行团
                  </Link>
                </li>
                <li>
                  <Link href="#teams" className="hover:text-white transition-colors">
                    训练团
                  </Link>
                </li>
                <li>
                  <Link href="#activities" className="hover:text-white transition-colors">
                    活动安排
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    入团申请
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">潮汕特色</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#culture" className="hover:text-white transition-colors">
                    文化骑行
                  </Link>
                </li>
                <li>
                  <Link href="#culture" className="hover:text-white transition-colors">
                    美食探索
                  </Link>
                </li>
                <li>
                  <Link href="#culture" className="hover:text-white transition-colors">
                    海滨风光
                  </Link>
                </li>
                <li>
                  <Link href="#culture" className="hover:text-white transition-colors">
                    古村探访
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">联系方式</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>微信: q6622070</li>
                <li>邮箱: 2077943103@qq.com</li>
                <li>活动时间: 放假以及休息时间</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 汕头潮青御风俱乐部. 青春无限，骑行有你.</p>
          </div>
        </div>
      </footer>
      {/* 二维码弹窗 */}
      <QRCodeModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
    </div>
  )
}
