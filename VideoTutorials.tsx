'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  videosData, 
  getCategories, 
  getVideosByCategory, 
  getSubCategories,
  getThirdCategories,
  searchVideos,
  type VideoData 
} from '@/data/videos';
import { 
  Search, 
  Play, 
  ChevronDown, 
  ChevronRight,
  Filter,
  X
} from 'lucide-react';

// 视频播放器组件
function VideoPlayer({ video }: { video: VideoData | null }) {
  if (!video) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-500">
          <Play className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>选择一个视频开始观看</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
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
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline">第{video.id}期</Badge>
          <Badge>{video.category}</Badge>
          <Badge variant="secondary">{video.subCategory}</Badge>
        </div>
        <h3 className="text-xl font-bold">{video.title}</h3>
        <p className="text-gray-600">{video.description}</p>
        <div className="flex flex-wrap gap-1">
          {video.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

// 分类树组件
function CategoryTree({ 
  selectedCategory, 
  selectedSubCategory, 
  selectedThirdCategory,
  onCategorySelect 
}: {
  selectedCategory: string | null;
  selectedSubCategory: string | null;
  selectedThirdCategory: string | null;
  onCategorySelect: (category: string | null, subCategory?: string | null, thirdCategory?: string | null) => void;
}) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedSubCategories, setExpandedSubCategories] = useState<Set<string>>(new Set());
  
  const categories = getCategories();

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleSubCategory = (subCategory: string) => {
    const newExpanded = new Set(expandedSubCategories);
    if (newExpanded.has(subCategory)) {
      newExpanded.delete(subCategory);
    } else {
      newExpanded.add(subCategory);
    }
    setExpandedSubCategories(newExpanded);
  };

  return (
    <div className="space-y-2">
      <Button 
        variant={selectedCategory === null ? "default" : "outline"}
        className="w-full justify-start"
        onClick={() => onCategorySelect(null)}
      >
        全部视频
      </Button>
      
      {categories.map(category => {
        const isExpanded = expandedCategories.has(category);
        const subCategories = getSubCategories(category);
        const isSelected = selectedCategory === category;
        
        return (
          <div key={category} className="space-y-1">
            <div className="flex items-center">
              <Button
                variant={isSelected && !selectedSubCategory ? "default" : "ghost"}
                className="flex-1 justify-start"
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </Button>
              {subCategories.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCategory(category)}
                >
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              )}
            </div>
            
            {isExpanded && (
              <div className="ml-4 space-y-1">
                {subCategories.map(subCategory => {
                  const isSubExpanded = expandedSubCategories.has(`${category}-${subCategory}`);
                  const thirdCategories = getThirdCategories(category, subCategory);
                  const isSubSelected = selectedCategory === category && selectedSubCategory === subCategory;
                  
                  return (
                    <div key={subCategory} className="space-y-1">
                      <div className="flex items-center">
                        <Button
                          variant={isSubSelected && !selectedThirdCategory ? "default" : "ghost"}
                          size="sm"
                          className="flex-1 justify-start text-sm"
                          onClick={() => onCategorySelect(category, subCategory)}
                        >
                          {subCategory}
                        </Button>
                        {thirdCategories.length > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSubCategory(`${category}-${subCategory}`)}
                          >
                            {isSubExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                          </Button>
                        )}
                      </div>
                      
                      {isSubExpanded && (
                        <div className="ml-4 space-y-1">
                          {thirdCategories.map(thirdCategory => {
                            const isThirdSelected = selectedCategory === category && 
                                                  selectedSubCategory === subCategory && 
                                                  selectedThirdCategory === thirdCategory;
                            
                            return (
                              <Button
                                key={thirdCategory}
                                variant={isThirdSelected ? "default" : "ghost"}
                                size="sm"
                                className="w-full justify-start text-xs"
                                onClick={() => onCategorySelect(category, subCategory, thirdCategory)}
                              >
                                {thirdCategory}
                              </Button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// 视频列表组件
function VideoList({ 
  videos, 
  selectedVideo, 
  onVideoSelect 
}: {
  videos: VideoData[];
  selectedVideo: VideoData | null;
  onVideoSelect: (video: VideoData) => void;
}) {
  return (
    <div className="space-y-3">
      {videos.map(video => (
        <Card 
          key={video.id} 
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedVideo?.id === video.id ? 'ring-2 ring-red-500' : ''
          }`}
          onClick={() => onVideoSelect(video)}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline">第{video.id}期</Badge>
              <div className="flex gap-1">
                <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                <Badge variant="outline" className="text-xs">{video.subCategory}</Badge>
              </div>
            </div>
            <CardTitle className="text-lg">{video.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="line-clamp-2">
              {video.description}
            </CardDescription>
            <div className="flex flex-wrap gap-1 mt-2">
              {video.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {video.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">+{video.tags.length - 3}</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// 主组件
export default function VideoTutorials() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedThirdCategory, setSelectedThirdCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // 过滤视频
  const filteredVideos = useMemo(() => {
    let videos = videosData;
    
    // 搜索过滤
    if (searchQuery.trim()) {
      videos = searchVideos(searchQuery.trim());
    }
    
    // 分类过滤
    if (selectedCategory) {
      videos = videos.filter(video => video.category === selectedCategory);
      
      if (selectedSubCategory) {
        videos = videos.filter(video => video.subCategory === selectedSubCategory);
        
        if (selectedThirdCategory) {
          videos = videos.filter(video => video.thirdCategory === selectedThirdCategory);
        }
      }
    }
    
    return videos.sort((a, b) => a.id - b.id);
  }, [selectedCategory, selectedSubCategory, selectedThirdCategory, searchQuery]);

  const handleCategorySelect = (category: string | null, subCategory?: string | null, thirdCategory?: string | null) => {
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory || null);
    setSelectedThirdCategory(thirdCategory || null);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedThirdCategory(null);
    setSearchQuery('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">自行车维修视频教程</h1>
        <p className="text-gray-600 mb-6">
          专业的自行车维修教学视频，涵盖车架、传动、刹车、变速等各个系统的维修保养技巧。
        </p>
        
        {/* 搜索和过滤 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="搜索视频教程..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:w-auto"
          >
            <Filter className="h-4 w-4 mr-2" />
            分类筛选
          </Button>
          {(selectedCategory || searchQuery) && (
            <Button variant="outline" onClick={clearFilters}>
              <X className="h-4 w-4 mr-2" />
              清除筛选
            </Button>
          )}
        </div>
        
        {/* 当前筛选状态 */}
        {(selectedCategory || selectedSubCategory || selectedThirdCategory) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCategory && (
              <Badge variant="default">{selectedCategory}</Badge>
            )}
            {selectedSubCategory && (
              <Badge variant="secondary">{selectedSubCategory}</Badge>
            )}
            {selectedThirdCategory && (
              <Badge variant="outline">{selectedThirdCategory}</Badge>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 分类筛选侧边栏 */}
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">分类筛选</CardTitle>
            </CardHeader>
            <CardContent>
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
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">
              视频列表 ({filteredVideos.length})
            </h2>
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            <VideoList
              videos={filteredVideos}
              selectedVideo={selectedVideo}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>

        {/* 视频播放器 */}
        <div className="lg:col-span-2">
          <VideoPlayer video={selectedVideo} />
        </div>
      </div>
    </div>
  );
}
