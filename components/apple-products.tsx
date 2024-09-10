'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { name: "Macintosh", year: 1984, emoji: "🖥️", description: "革命性的个人电脑，引入图形用户界面。" },
  { name: "iMac G3", year: 1998, emoji: "🖥️", description: "彩色半透明外壳的一体机，重振苹果品牌。" },
  { name: "iPod", year: 2001, emoji: "🎵", description: "便携式音乐播放器，改变了音乐产业。" },
  { name: "iPhone", year: 2007, emoji: "📱", description: "智能手机革命的开端，定义了移动互联网时代。" },
  { name: "iPad", year: 2010, emoji: "📱", description: "开创平板电脑市场，改变了人们使用电脑的方式。" },
  { name: "Apple Watch", year: 2015, emoji: "⌚", description: "智能手表，开启了可穿戴设备新时代。" },
  { name: "AirPods", year: 2016, emoji: "🎧", description: "无线耳机，引领了真无线耳机潮流。" },
  { name: "M1 芯片", year: 2020, emoji: "💻", description: "自研芯片，大幅提升Mac性能和能效。" },
];

export function AppleProducts() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">苹果公司优秀产品</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <CardTitle className="flex items-center justify-between">
                <span>{product.name}</span>
                <span className="text-3xl">{product.emoji}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-lg font-semibold mb-2">{product.year}</p>
              <p>{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}