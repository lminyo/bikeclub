"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bike, Calendar, Users, Trophy, Phone, ArrowLeft, Gift, Shield, Target, Award, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

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
            <Image src="/weixin.jpg" alt="微信二维码" width={200} height={200} className="mx-auto" />
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-medium text-green-600">📱 扫码或截图添加微信好友</p>
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

// 联系管理员弹窗组件
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">联系管理员</h3>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-4">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-full">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-800">管理员联系方式</h4>
            </div>
            <div className="space-y-3 text-left mt-4">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">微信：</span>
                <span className="text-gray-800">q6622070</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">电话：</span>
                <span className="text-gray-800">13800138000</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">邮箱：</span>
                <span className="text-gray-800">cycling@stu.edu.cn</span>
              </div>
            </div>
          </div>

          <Button onClick={onClose} className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">
            我知道了
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Announcement() {
  // 状态管理
  const [showQRModal, setShowQRModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-full">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  汕头潮青御风俱乐部
                </h1>
                <p className="text-sm text-gray-600">SHANTOU CHAOQING CYCLING CLUB</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>返回首页</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Announcement Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8 md:mb-12">
            <Badge className="bg-orange-500 text-white px-4 md:px-6 py-2 text-base md:text-lg mb-4">
              🔥 俱乐部重要公告
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">2025暑期骑行激励计划</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">重磅启动！赢现金红包，享安全骑行！</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <span>📅 发布时间：2025年6月20日</span>
              <span>⏰活动期间：7月1日-8月31日</span>
              <span>💰 总预算：600元</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8 border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                亲爱的俱乐部成员们，大家好！🔥
                <br />
                <br />
                为激发暑期骑行热情，并强化安全保障，俱乐部正式推出{" "}
                <strong className="text-red-600">2025暑期骑行激励计划（7月1日-8月31日）</strong>
                ，总预算600元现金奖励等你来拿！无论你是骑行新手还是老将，都能轻松参与，赢取红包💰。活动聚焦公平、安全与乐趣，细节如下：
              </p>
            </CardContent>
          </Card>

          {/* Activity Time */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-800">
                <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                一、活动时间
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">活动期</h4>
                  <p className="text-blue-700">2025年7月1日 00:00 至 8月31日 24:00</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">奖励发放</h4>
                  <p className="text-green-700">所有奖金将于9月5日前通过微信红包发放，请确保微信账号有效。</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Four Rewards */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-800">
                <Gift className="mr-3 h-6 w-6 text-orange-600" />
                二、四大现金奖励，简单易懂！
              </CardTitle>
              <CardDescription className="text-base">
                所有骑行需通过 <strong>迈金/行者等APP记录轨迹</strong>
                （必须含时间、速度、海拔），并有安全保障（强制佩戴头盔和反光衣，上传装备照片，否则取消资格）。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* 基础参与奖 */}
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      基础参与奖（人人可拿）
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600 mb-2">10元/人</div>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>要求：</strong>累计骑行≥100公里（单次≥10公里，均速≥15km/h）
                    </p>
                    <p className="text-xs text-gray-500">说明：未达标者无奖，预算按实际达标人数自动分配。</p>
                  </CardContent>
                </Card>

                {/* 里程成就奖 */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700 flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      里程成就奖（先到先得）
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between">
                        <span className="text-sm">累计150公里：</span>
                        <span className="font-bold text-blue-600">+15元</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">累计250公里：</span>
                        <span className="font-bold text-blue-600">+25元</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      各档限前10名达标者，可与其他奖叠加。需分次骑行（单次均速≥15km/h）。
                    </p>
                  </CardContent>
                </Card>

                {/* 拉新贡献奖 */}
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700 flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      拉新贡献奖（邀请有礼）
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between">
                        <span className="text-sm">个人奖励：</span>
                        <span className="font-bold text-purple-600">10元/人</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">团队奖励：</span>
                        <span className="font-bold text-purple-600">全员+5元</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      邀请1名新人加入俱乐部并完成首骑。新人要求：年龄≥12岁；首骑单次≥25公里，均速≥15km/h。
                    </p>
                  </CardContent>
                </Card>

                {/* 卓越骑士奖 */}
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 flex items-center">
                      <Trophy className="mr-2 h-5 w-5" />
                      卓越骑士奖（顶尖排名）
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between">
                        <span className="text-sm">第1名：</span>
                        <span className="font-bold text-red-600">30元</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">第2名：</span>
                        <span className="font-bold text-red-600">20元</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">第3名：</span>
                        <span className="font-bold text-red-600">10元</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      按8月31日总里程排名（需完成基础100公里）。不与其他里程奖叠加。
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Budget Breakdown */}
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">⚠️ 所有奖励预算已优化覆盖90%成员：</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
                  <div>• 基础参与奖预算240元（覆盖24人）</div>
                  <div>• 里程成就奖预算180元（覆盖12人）</div>
                  <div>• 拉新贡献奖预算120元（覆盖12人+团队奖励）</div>
                  <div>• 卓越骑士奖预算60元（覆盖3人）</div>
                </div>
                <p className="text-yellow-800 font-medium mt-2">总预算600元，花在刀刃上，助力大家收获满满！</p>
              </div>
            </CardContent>
          </Card>

          {/* Execution Rules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-800">
                <Shield className="mr-3 h-6 w-6 text-indigo-600" />
                三、执行细则（必读！避免无效参与）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-indigo-800 mb-3">数据提交方式</h4>
                  <p className="text-gray-700 mb-2">每次骑行后，需在活动期内，向管理员提交：</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>
                      <strong>APP轨迹截图</strong>（显示时间、速度、海拔）
                    </li>
                    <li>
                      <strong>随机路标打卡照片</strong>（1张以上，防作弊）
                    </li>
                    <li>
                      <strong>装备照片</strong>（佩戴头盔和反光衣，首次提交即可）
                    </li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-bold text-indigo-800 mb-2">数据统计截止</h5>
                    <p className="text-indigo-700">2025年8月31日24:00（新会员首骑也必须在此前完成）</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">争议处理</h5>
                    <p className="text-purple-700">如均速&lt;5km/h或数据异常，由"管理员+2名随机成员"投票裁定</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Rules */}
          <Card className="mb-8 border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-red-700">
                <Shield className="mr-3 h-6 w-6 text-red-600" />
                四、安全与健康规则（重中之重！）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-3">强制安全要求</h4>
                  <p className="text-red-700">所有参与者必须佩戴头盔和反光衣（无装备者取消资格）</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-3">禁止行为</h4>
                  <ul className="list-disc list-inside space-y-1 text-orange-700">
                    <li>未满12岁参与</li>
                    <li>夜骑无灯光</li>
                    <li>多人并排骑行</li>
                    <li>佩戴耳机骑行</li>
                  </ul>
                  <p className="text-orange-800 font-medium mt-2">一经发现，取消所有奖励！</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">健康提示</h4>
                  <ul className="list-disc list-inside space-y-1 text-green-700">
                    <li>新人建议首骑≤30公里</li>
                    <li>避开中午高温时段（11:00-15:00）</li>
                    <li>及时补充水分，量力而行</li>
                  </ul>
                  <p className="text-green-800 font-medium mt-2">安全第一，快乐骑行！</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">快来行动吧！</h3>
              <p className="text-xl mb-6 opacity-90">
                暑期是骑行的黄金时间，让我们一起挥洒汗水，赢取红包，守护安全🚴‍♂️。
                <br />
                如有疑问，请随时在群内@管理员咨询。期待你的参与！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100"
                  onClick={() => setShowContactModal(true)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  联系管理员
                </Button>
                <Button
                  size="lg"
                  className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300"
                  onClick={() => setShowQRModal(true)}
                >
                  <Users className="mr-2 h-5 w-5" />
                  加入休闲骑行团
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-full">
                <Bike className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">汕头潮青御风俱乐部管理团队</h4>
            </div>
            <p className="text-gray-600">2025年6月20日</p>
          </div>
        </div>
      </div>
      {/* 弹窗组件 */}
      <QRCodeModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  )
}
