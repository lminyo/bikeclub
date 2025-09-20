"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Award,
  Camera,
  Code,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Users,
  Wrench,
  Zap,
  X,
  ExternalLink,
  ChevronRight,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getTechMembers, getPhotographers, type TeamMember, type ContactInfo } from "@/data/team-members"

// 证书弹窗组件
function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: {
  certificate: any | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen || !certificate) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">证书详情</h3>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-4">
            <Image
              src={certificate.image || "/placeholder.svg"}
              alt={certificate.name}
              width={300}
              height={200}
              className="mx-auto rounded-lg"
            />
          </div>

          <div className="space-y-3 text-left">
            <div>
              <span className="font-medium text-gray-700">证书名称：</span>
              <span className="text-gray-800">{certificate.name}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">颁发机构：</span>
              <span className="text-gray-800">{certificate.issuer}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">获得时间：</span>
              <span className="text-gray-800">{certificate.date}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">证书等级：</span>
              <Badge className="ml-2 bg-green-500 text-white">{certificate.level}</Badge>
            </div>
          </div>

          <Button onClick={onClose} className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white">
            我知道了
          </Button>
        </div>
      </div>
    </div>
  )
}

// 设备弹窗组件
function EquipmentModal({
  equipment,
  isOpen,
  onClose,
}: {
  equipment: any | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen || !equipment) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">设备详情</h3>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-4">
            <Image
              src={equipment.image || "/placeholder.svg"}
              alt={equipment.name}
              width={300}
              height={200}
              className="mx-auto rounded-lg"
            />
          </div>

          <div className="space-y-3 text-left">
            <div>
              <span className="font-medium text-gray-700">设备名称：</span>
              <span className="text-gray-800">{equipment.name}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">规格参数：</span>
              <span className="text-gray-800">{equipment.specs}</span>
            </div>
          </div>

          <Button onClick={onClose} className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white">
            我知道了
          </Button>
        </div>
      </div>
    </div>
  )
}

// 微信弹窗组件
function WeChatModal({
  wechatInfo,
  isOpen,
  onClose,
}: {
  wechatInfo: { id: string; qrCode?: string } | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen || !wechatInfo) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">微信联系方式</h3>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {wechatInfo.qrCode && (
            <div className="bg-gray-100 p-4 rounded-xl mb-4">
              <Image
                src={wechatInfo.qrCode || "/placeholder.svg"}
                alt="微信二维码"
                width={200}
                height={200}
                className="mx-auto rounded-lg"
              />
            </div>
          )}

          <div className="space-y-3 text-center">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">微信号</span>
              </div>
              <p className="text-lg font-mono text-green-700 bg-white px-3 py-2 rounded border">{wechatInfo.id}</p>
            </div>

            {wechatInfo.qrCode ? (
              <p className="text-sm text-gray-600">📱 扫描二维码或搜索微信号添加好友</p>
            ) : (
              <p className="text-sm text-gray-600">📱 请搜索微信号添加好友</p>
            )}
          </div>

          <Button onClick={onClose} className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
            我知道了
          </Button>
        </div>
      </div>
    </div>
  )
}

// 联系方式组件
function ContactButtons({ contact, memberName }: { contact: ContactInfo; memberName: string }) {
  const [showWeChatModal, setShowWeChatModal] = useState(false)

  const contactMethods = []

  // 电话
  if (contact.phone) {
    contactMethods.push(
      <Button
        key="phone"
        size="sm"
        variant="outline"
        className="flex-1 text-xs"
        onClick={() => window.open(`tel:${contact.phone}`, "_self")}
      >
        <Phone className="w-3 h-3 mr-1" />
        {contact.phone}
      </Button>,
    )
  }

  // 邮箱
  if (contact.email) {
    contactMethods.push(
      <Button
        key="email"
        size="sm"
        variant="outline"
        className="flex-1 text-xs"
        onClick={() => window.open(`mailto:${contact.email}`, "_blank")}
      >
        <Mail className="w-3 h-3 mr-1" />
        邮箱
      </Button>,
    )
  }

  // 微信
  if (contact.wechat) {
    contactMethods.push(
      <Button
        key="wechat"
        size="sm"
        variant="outline"
        className="flex-1 text-xs bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setShowWeChatModal(true)
        }}
      >
        <MessageCircle className="w-3 h-3 mr-1" />
        微信
      </Button>,
    )
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">{contactMethods}</div>

      {/* 微信弹窗 */}
      {contact.wechat && (
        <WeChatModal wechatInfo={contact.wechat} isOpen={showWeChatModal} onClose={() => setShowWeChatModal(false)} />
      )}
    </>
  )
}

// 技术成员卡片组件
function TechMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)
  const [showCertModal, setShowCertModal] = useState(false)

  const handleCertificateClick = (certificate: any, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setSelectedCertificate(certificate)
    setShowCertModal(true)
  }

  return (
    <>
      <Card
        className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-blue-50/30 animate-in slide-in-from-bottom-8"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-blue-500 text-white">
              <Code className="w-3 h-3 mr-1" />
              技术专家
            </Badge>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white/20 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-100 text-sm">{member.role}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs text-blue-100">{member.location}</span>
                    <Calendar className="w-3 h-3 ml-2" />
                    <span className="text-xs text-blue-100">{member.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>

          {/* 专业技能 */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <Wrench className="w-4 h-4 mr-2 text-blue-500" />
              专业技能
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((skill: string, idx: number) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* 专业证书 */}
          {member.certificates && member.certificates.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-500" />
                专业证书
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {member.certificates.map((cert: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-200 cursor-pointer hover:shadow-md transition-all duration-200 group/cert"
                    onClick={(e) => handleCertificateClick(cert, e)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-800 text-sm group-hover/cert:text-blue-600 transition-colors">
                          {cert.name}
                        </h5>
                        <p className="text-xs text-gray-500 mt-1">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-500 text-white text-xs">{cert.level}</Badge>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover/cert:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 主要成就 */}
          {member.achievements && member.achievements.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Star className="w-4 h-4 mr-2 text-green-500" />
                主要成就
              </h4>
              <div className="space-y-2">
                {member.achievements.map((achievement: string, idx: number) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 联系方式 */}
          <div className="border-t pt-4">
            <ContactButtons contact={member.contact} memberName={member.name} />
          </div>
        </CardContent>
      </Card>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={showCertModal}
        onClose={() => setShowCertModal(false)}
      />
    </>
  )
}

// 摄影师成员卡片组件
function PhotographerCard({ member, index }: { member: TeamMember; index: number }) {
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null)
  const [showEquipmentModal, setShowEquipmentModal] = useState(false)

  const handleEquipmentClick = (equipment: any, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setSelectedEquipment(equipment)
    setShowEquipmentModal(true)
  }

  return (
    <>
      <Card
        className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-purple-50/30 animate-in slide-in-from-bottom-8"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-purple-500 text-white">
              <Camera className="w-3 h-3 mr-1" />
              摄影师
            </Badge>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white/20 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-pink-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <Camera className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-100 text-sm">{member.role}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs text-purple-100">{member.location}</span>
                    <Calendar className="w-3 h-3 ml-2" />
                    <span className="text-xs text-purple-100">{member.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>

          {/* 专业技能 */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <Star className="w-4 h-4 mr-2 text-purple-500" />
              专业技能
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((skill: string, idx: number) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* 专业设备 */}
          {member.equipment && member.equipment.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Camera className="w-4 h-4 mr-2 text-blue-500" />
                专业设备
              </h4>
              <div className="space-y-4">
                {member.equipment.map((category: any, catIdx: number) => (
                  <div key={catIdx}>
                    <h5 className="font-medium text-gray-700 text-sm mb-2">{category.category}</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {category.items.map((item: any, itemIdx: number) => (
                        <div
                          key={itemIdx}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200 cursor-pointer hover:shadow-md transition-all duration-200 group/item"
                          onClick={(e) => handleEquipmentClick(item, e)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h6 className="font-medium text-gray-800 text-sm group-hover/item:text-blue-600 transition-colors">
                                {item.name}
                              </h6>
                              <p className="text-xs text-gray-500 mt-1">{item.specs}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-blue-500 transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 作品集 */}
          {member.portfolio && member.portfolio.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-green-500" />
                精选作品
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {member.portfolio.map((work: any, idx: number) => (
                  <div key={idx} className="relative group/work">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      width={150}
                      height={100}
                      className="w-full h-20 object-cover rounded-lg group-hover/work:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/work:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="text-white text-center">
                        <p className="text-xs font-medium">{work.title}</p>
                        <p className="text-xs text-gray-300">{work.views} 浏览</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 联系方式 */}
          <div className="border-t pt-4">
            <ContactButtons contact={member.contact} memberName={member.name} />
          </div>
        </CardContent>
      </Card>

      <EquipmentModal
        equipment={selectedEquipment}
        isOpen={showEquipmentModal}
        onClose={() => setShowEquipmentModal(false)}
      />
    </>
  )
}

// 主组件
export default function TeamMembers() {
  const techMembers = getTechMembers()
  const photographers = getPhotographers()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button
                variant="outline"
                className="border-white text-white bg-white/10 backdrop-blur-sm transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回首页
              </Button>
            </Link>
          </div>

          <div className="animate-in slide-in-from-top-5 duration-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">专业团队成员</h1>
                <p className="text-blue-100 text-lg">认识我们的技术专家和摄影师团队</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="text-2xl font-bold">{techMembers.length}</div>
                    <div className="text-blue-200 text-sm">技术专家</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Camera className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="text-2xl font-bold">{photographers.length}</div>
                    <div className="text-blue-200 text-sm">专业摄影师</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="text-2xl font-bold">专业</div>
                    <div className="text-blue-200 text-sm">服务保障</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 技术团队 */}
        <section className="mb-16">
          <div className="text-center mb-12 animate-in slide-in-from-top-3 duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">技术专家团队</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              我们的技术专家拥有丰富的维修经验和专业认证，为俱乐部成员提供最专业的技术支持
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techMembers.map((member, index) => (
              <TechMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* 摄影团队 */}
        <section>
          <div className="text-center mb-12 animate-in slide-in-from-top-3 duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">摄影师团队</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              专业的摄影师团队，用镜头记录每一个精彩瞬间，为俱乐部留下珍贵的回忆
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {photographers.map((member, index) => (
              <PhotographerCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* 加入我们 */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">加入我们的专业团队</h3>
              <p className="text-xl mb-6 opacity-90">
                如果你也是技术专家或摄影师，欢迎加入我们的团队，一起为俱乐部贡献专业力量！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                    <Users className="mr-2 h-5 w-5" />
                    联系我们
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto"
                  >
                    了解俱乐部
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
