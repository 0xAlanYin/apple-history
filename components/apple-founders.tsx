import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const founders = [
  {
    name: "史蒂夫·乔布斯",
    role: "联合创始人",
    description: "苹果公司的灵魂人物，推动了多项革命性产品的诞生。"
  },
  {
    name: "史蒂夫·沃兹尼亚克",
    role: "联合创始人",
    description: "技术天才，设计了早期的苹果电脑。"
  },
  {
    name: "罗纳德·韦恩",
    role: "联合创始人",
    description: "绘制了首个苹果标志，但很快退出了公司。"
  }
]

export function AppleFounders() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">苹果公司创始人</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {founders.map((founder, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{founder.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{founder.role}</p>
              <p className="mt-2">{founder.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}