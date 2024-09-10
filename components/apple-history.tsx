'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

const milestones = [
  {
    year: 1976,
    title: "苹果公司成立",
    description: "史蒂夫·乔布斯、史蒂夫·沃兹尼亚克和罗纳德·韦恩在加利福尼亚州创立了苹果电脑公司。"
  },
  {
    year: 1984,
    title: "Macintosh 发布",
    description: "推出了革命性的Macintosh个人电脑,配备图形用户界面和鼠标。"
  },
  {
    year: 2001,
    title: "iPod 问世",
    description: "苹果发布了iPod,彻底改变了音乐产业。"
  },
  {
    year: 2007,
    title: "iPhone 发布",
    description: "第一代iPhone发布,开创了智能手机时代。"
  },
  {
    year: 2010,
    title: "iPad 推出",
    description: "苹果进入平板电脑市场,推出了iPad。"
  },
  {
    year: 2015,
    title: "Apple Watch 上市",
    description: "苹果进军可穿戴设备市场,推出了Apple Watch。"
  },
]

export function AppleHistory() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">苹果公司发展史</h1>
      <div className="flex justify-center space-x-4 mb-8 flex-wrap">
        <Link href="/founders" className="inline-flex items-center px-6 py-3 m-2 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          创始人
        </Link>
        <Link href="/stock-history" className="inline-flex items-center px-6 py-3 m-2 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          股价历史
        </Link>
        <Link href="/products" className="inline-flex items-center px-6 py-3 m-2 bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
          </svg>
          优秀产品
        </Link>
      </div>
      <ScrollArea className="h-[600px] w-full rounded-md border p-4">
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{milestone.year}</CardTitle>
                <CardDescription>{milestone.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}