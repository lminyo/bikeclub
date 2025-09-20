"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  videosData,
  getCategories,
  getSubCategories,
  getThirdCategories,
  searchVideos,
  type VideoData,
} from "@/data/videos"
import { Search, Play, ChevronDown, Filter, X, ArrowLeft, Wrench, BookOpen, Video, Star, Users } from "lucide-react"
import Link from "next/link"

// 视频播放器组件
function VideoPlayer({ video }: { video: VideoData | null }) {
  if (!video) {
    return (
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl md:rounded-2xl flex items-center justify-center border border-blue-200 shadow-lg">
          <div className="text-center text-blue-600 px-4">
            <div className="relative mb-3 md:mb-4">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
              <div className="relative bg-blue-500 p-3 md:p-4 rounded-full">
                <Play className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
            </div>
            <p className="text-base md:text-lg font-medium">选择一个视频开始观看</p>
            <p className="text-xs md:text-sm text-blue-500 mt-1">99期专业维修教程等你探索</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 md:space-y-6 animate-in slide-in-from-right-5 duration-500">
      <div className="relative group">
        <div className="aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-blue-200">
          <iframe
            src={`//player.bilibili.com/player.html?isOutside=true&aid=${video.aid}&bvid=${video.bvid}&cid=${video.cid}&p=1`}
            scrolling="no"
            border="0"
            frameBorder="no"
            framespacing="0"
            allowFullScreen={true}
            className="w-full h-full"
            title={video.title}
          />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl md:rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
      </div>

      <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-3 py-1 text-xs md:text-sm">
              第{video.id}期
            </Badge>
            <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50 text-xs md:text-sm">
              {video.category}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-indigo-100 text-indigo-700 text-xs md:text-sm hidden sm:inline-flex"
            >
              {video.subCategory}
            </Badge>
          </div>

          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight">{video.title}</h3>

          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">{video.description}</p>

          <div className="flex flex-wrap gap-1 md:gap-2">
            {video.tags.slice(0, window.innerWidth < 768 ? 4 : video.tags.length).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-blue-200 text-blue-600 bg-blue-50/50 hover:bg-blue-100 transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
            {window.innerWidth < 768 && video.tags.length > 4 && (
              <Badge variant="outline" className="text-xs border-blue-200 text-blue-600 bg-blue-50/50">
                +{video.tags.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// 分类树组件
function CategoryTree({
  selectedCategory,
  selectedSubCategory,
  selectedThirdCategory,
  onCategorySelect,
}: {
  selectedCategory: string | null
  selectedSubCategory: string | null
  selectedThirdCategory: string | null
  onCategorySelect: (category: string | null, subCategory?: string | null, thirdCategory?: string | null) => void
}) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [expandedSubCategories, setExpandedSubCategories] = useState<Set<string>>(new Set())

  const categories = getCategories()

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const toggleSubCategory = (subCategory: string) => {
    const newExpanded = new Set(expandedSubCategories)
    if (newExpanded.has(subCategory)) {
      newExpanded.delete(subCategory)
    } else {
      newExpanded.add(subCategory)
    }
    setExpandedSubCategories(newExpanded)
  }

  return (
    <div className="space-y-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        className={`w-full justify-start transition-all duration-200 ${
          selectedCategory === null
            ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
            : "border-blue-200 text-blue-700 hover:bg-blue-50"
        }`}
        onClick={() => onCategorySelect(null)}
      >
        <BookOpen className="h-4 w-4 mr-2" />
        全部视频
      </Button>

      {categories.map((category, index) => {
        const isExpanded = expandedCategories.has(category)
        const subCategories = getSubCategories(category)
        const isSelected = selectedCategory === category

        return (
          <div
            key={category}
            className="space-y-1 animate-in slide-in-from-left-3 duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center">
              <Button
                variant={isSelected && !selectedSubCategory ? "default" : "ghost"}
                className={`flex-1 justify-start transition-all duration-200 ${
                  isSelected && !selectedSubCategory
                    ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                    : "text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                }`}
                onClick={() => onCategorySelect(category)}
              >
                <Wrench className="h-4 w-4 mr-2" />
                {category}
              </Button>
              {subCategories.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  onClick={() => toggleCategory(category)}
                >
                  <div
                    className={`transform transition-transform duration-200 ${isExpanded ? "rotate-0" : "-rotate-90"}`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Button>
              )}
            </div>

            {isExpanded && (
              <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-300">
                {subCategories.map((subCategory, subIndex) => {
                  const isSubExpanded = expandedSubCategories.has(`${category}-${subCategory}`)
                  const thirdCategories = getThirdCategories(category, subCategory)
                  const isSubSelected = selectedCategory === category && selectedSubCategory === subCategory

                  return (
                    <div
                      key={subCategory}
                      className="space-y-1 animate-in slide-in-from-left-2 duration-200"
                      style={{ animationDelay: `${subIndex * 30}ms` }}
                    >
                      <div className="flex items-center">
                        <Button
                          variant={isSubSelected && !selectedThirdCategory ? "default" : "ghost"}
                          size="sm"
                          className={`flex-1 justify-start text-sm transition-all duration-200 ${
                            isSubSelected && !selectedThirdCategory
                              ? "bg-blue-500 hover:bg-blue-600 text-white shadow-sm"
                              : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                          }`}
                          onClick={() => onCategorySelect(category, subCategory)}
                        >
                          {subCategory}
                        </Button>
                        {thirdCategories.length > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-500 hover:bg-blue-50 transition-all duration-200"
                            onClick={() => toggleSubCategory(`${category}-${subCategory}`)}
                          >
                            <div
                              className={`transform transition-transform duration-200 ${isSubExpanded ? "rotate-0" : "-rotate-90"}`}
                            >
                              <ChevronDown className="h-3 w-3" />
                            </div>
                          </Button>
                        )}
                      </div>

                      {isSubExpanded && (
                        <div className="ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                          {thirdCategories.map((thirdCategory, thirdIndex) => {
                            const isThirdSelected =
                              selectedCategory === category &&
                              selectedSubCategory === subCategory &&
                              selectedThirdCategory === thirdCategory

                            return (
                              <Button
                                key={thirdCategory}
                                variant={isThirdSelected ? "default" : "ghost"}
                                size="sm"
                                className={`w-full justify-start text-xs transition-all duration-200 animate-in slide-in-from-left-1 ${
                                  isThirdSelected
                                    ? "bg-blue-500 hover:bg-blue-600 text-white shadow-sm"
                                    : "text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                                }`}
                                style={{ animationDelay: `${thirdIndex * 20}ms` }}
                                onClick={() => onCategorySelect(category, subCategory, thirdCategory)}
                              >
                                {thirdCategory}
                              </Button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// 视频列表组件
function VideoList({
  videos,
  selectedVideo,
  onVideoSelect,
}: {
  videos: VideoData[]
  selectedVideo: VideoData | null
  onVideoSelect: (video: VideoData) => void
}) {
  return (
    <div className="space-y-3 md:space-y-4">
      {videos.map((video, index) => (
        <Card
          key={video.id}
          className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border animate-in slide-in-from-bottom-3 ${
            selectedVideo?.id === video.id
              ? "ring-2 ring-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
              : "border-blue-100 hover:border-blue-300 bg-white hover:bg-blue-50/30"
          }`}
          style={{ animationDelay: `${index * 50}ms` }}
          onClick={() => onVideoSelect(video)}
        >
          <CardHeader className="pb-2 md:pb-3">
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 shadow-sm text-xs">
                <Video className="h-3 w-3 mr-1" />第{video.id}期
              </Badge>
              <div className="flex gap-1 md:gap-2">
                <Badge
                  variant="secondary"
                  className="text-xs bg-blue-100 text-blue-700 border-blue-200 hidden sm:inline-flex"
                >
                  {video.category}
                </Badge>
                <Badge variant="outline" className="text-xs border-indigo-200 text-indigo-600 bg-indigo-50">
                  {video.subCategory}
                </Badge>
              </div>
            </div>
            <CardTitle className="text-sm md:text-lg leading-tight text-gray-800 hover:text-blue-700 transition-colors duration-200">
              {video.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="line-clamp-2 text-gray-600 mb-2 md:mb-3 leading-relaxed text-xs md:text-sm">
              {video.description}
            </CardDescription>
            <div className="flex flex-wrap gap-1">
              {video.tags.slice(0, window.innerWidth < 768 ? 2 : 3).map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant="outline"
                  className="text-xs border-blue-200 text-blue-600 bg-blue-50/50 hover:bg-blue-100 transition-colors duration-200"
                >
                  {tag}
                </Badge>
              ))}
              {video.tags.length > (window.innerWidth < 768 ? 2 : 3) && (
                <Badge variant="outline" className="text-xs border-blue-200 text-blue-600 bg-blue-50/50">
                  +{video.tags.length - (window.innerWidth < 768 ? 2 : 3)}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// 主组件
export default function VideoTutorials() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
  const [selectedThirdCategory, setSelectedThirdCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // 过滤视频
  const filteredVideos = useMemo(() => {
    let videos = videosData

    // 搜索过滤
    if (searchQuery.trim()) {
      videos = searchVideos(searchQuery.trim())
    }

    // 分类过滤
    if (selectedCategory) {
      videos = videos.filter((video) => video.category === selectedCategory)

      if (selectedSubCategory) {
        videos = videos.filter((video) => video.subCategory === selectedSubCategory)

        if (selectedThirdCategory) {
          videos = videos.filter((video) => video.thirdCategory === selectedThirdCategory)
        }
      }
    }

    return videos.sort((a, b) => a.id - b.id)
  }, [selectedCategory, selectedSubCategory, selectedThirdCategory, searchQuery])

  const handleCategorySelect = (
    category: string | null,
    subCategory?: string | null,
    thirdCategory?: string | null,
  ) => {
    setSelectedCategory(category)
    setSelectedSubCategory(subCategory || null)
    setSelectedThirdCategory(thirdCategory || null)
  }

  const clearFilters = () => {
    setSelectedCategory(null)
    setSelectedSubCategory(null)
    setSelectedThirdCategory(null)
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <Link href="/">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回首页
              </Button>
            </Link>
          </div>

          <div className="animate-in slide-in-from-top-5 duration-700">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-6">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                <Wrench className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">自行车维修视频教程</h1>
                <p className="text-blue-100 text-sm md:text-lg">
                  99期专业维修教学，涵盖车架、传动、刹车、变速等各个系统
                </p>
              </div>
            </div>

            {/* 俱乐部特色说明 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 mb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">🎓 潮青御风俱乐部专属教程系统</h3>
                  <p className="text-blue-100 text-sm md:text-base mb-3 md:mb-0">
                    这是我们俱乐部精心整理的99期专业维修教程，专为骑行爱好者打造。
                    加入俱乐部，获得更多专业指导和实践机会！
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link href="/#contact">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 w-full sm:w-auto">
                      <Users className="h-4 w-4 mr-2" />
                      立即加入俱乐部
                    </Button>
                  </Link>
                  <Link href="/#teams">
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
                    >
                      了解更多
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 md:h-6 md:w-6 text-blue-200" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">{videosData.length}</div>
                    <div className="text-blue-200 text-xs md:text-sm">专业教程</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-blue-200" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">{getCategories().length}</div>
                    <div className="text-blue-200 text-xs md:text-sm">维修分类</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 sm:col-span-2 md:col-span-1">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 md:h-6 md:w-6 text-blue-200" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">专业</div>
                    <div className="text-blue-200 text-xs md:text-sm">维修指导</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* 搜索和过滤 */}
        <div className="mb-6 md:mb-8 animate-in slide-in-from-top-3 duration-500">
          <div className="flex flex-col gap-4 mb-4 md:mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
              <input
                type="text"
                placeholder="搜索维修教程..."
                className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all duration-200 hover:shadow-md text-sm md:text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200 flex-1 sm:flex-none"
              >
                <Filter className="h-4 w-4 mr-2" />
                分类筛选
              </Button>
              {(selectedCategory || searchQuery) && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="border-red-200 text-red-600 hover:bg-red-50 transition-all duration-200 flex-1 sm:flex-none"
                >
                  <X className="h-4 w-4 mr-2" />
                  清除筛选
                </Button>
              )}
            </div>
          </div>

          {/* 当前筛选状态 */}
          {(selectedCategory || selectedSubCategory || selectedThirdCategory) && (
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 animate-in slide-in-from-left-3 duration-300">
              {selectedCategory && (
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">{selectedCategory}</Badge>
              )}
              {selectedSubCategory && (
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm">
                  {selectedSubCategory}
                </Badge>
              )}
              {selectedThirdCategory && (
                <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50 px-3 py-1 text-sm">
                  {selectedThirdCategory}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* 移动端布局 */}
        <div className="lg:hidden">
          {/* 分类筛选 - 移动端 */}
          {showFilters && (
            <div className="mb-6">
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      分类筛选
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowFilters(false)}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 max-h-60 overflow-y-auto">
                  <CategoryTree
                    selectedCategory={selectedCategory}
                    selectedSubCategory={selectedSubCategory}
                    selectedThirdCategory={selectedThirdCategory}
                    onCategorySelect={handleCategorySelect}
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* 视频列表和播放器 - 移动端 */}
          <div className="space-y-6">
            {/* 视频播放器 */}
            <div className="sticky top-4 z-10">
              <VideoPlayer video={selectedVideo} />
            </div>

            {/* 视频列表 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Video className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">视频列表</h2>
                    <p className="text-xs text-blue-600">共 {filteredVideos.length} 个教程</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <VideoList videos={filteredVideos} selectedVideo={selectedVideo} onVideoSelect={setSelectedVideo} />
              </div>
            </div>
          </div>
        </div>

        {/* 桌面端布局 */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* 分类筛选侧边栏 */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg sticky top-4">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  分类筛选
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CategoryTree
                  selectedCategory={selectedCategory}
                  selectedSubCategory={selectedSubCategory}
                  selectedThirdCategory={selectedThirdCategory}
                  onCategorySelect={handleCategorySelect}
                />
              </CardContent>
            </Card>
          </div>

          {/* 视频列表 */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Video className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">视频列表</h2>
                  <p className="text-sm text-blue-600">共 {filteredVideos.length} 个教程</p>
                </div>
              </div>
            </div>
            <div className="max-h-[700px] overflow-y-auto pr-2 space-y-1">
              <VideoList videos={filteredVideos} selectedVideo={selectedVideo} onVideoSelect={setSelectedVideo} />
            </div>
          </div>

          {/* 视频播放器 */}
          <div className="lg:col-span-2">
            <div className="sticky top-4">
              <VideoPlayer video={selectedVideo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
