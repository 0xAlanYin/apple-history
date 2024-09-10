'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stockHistory = [
  { year: 1980, price: 0.10, marketCap: 1.8, event: "苹果公司首次公开募股 (IPO)" },
  { year: 1985, price: 0.41, marketCap: 2.3, event: "史蒂夫·乔布斯离开苹果" },
  { year: 1997, price: 0.43, marketCap: 2.5, event: "史蒂夫·乔布斯重返苹果" },
  { year: 2001, price: 1.00, marketCap: 7.4, event: "iPod 发布" },
  { year: 2007, price: 12.00, marketCap: 106.4, event: "iPhone 发布" },
  { year: 2010, price: 35.00, marketCap: 213.1, event: "iPad 发布" },
  { year: 2011, price: 53.00, marketCap: 376.4, event: "蒂姆·库克成为 CEO" },
  { year: 2015, price: 105.00, marketCap: 647.5, event: "Apple Watch 发布" },
  { year: 2020, price: 75.00, marketCap: 2200, event: "股票拆分 (4-1)" },
  { year: 2024, price: 185.00, marketCap: 3000, event: "市值突破 3 万亿美元" },
];

export function AppleStockHistory() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handleMouseEnter = (data, index) => {
    setSelectedPoint(data);
  };

  const handleMouseLeave = () => {
    setSelectedPoint(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">苹果公司股价历史</h1>
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={stockHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} name="股价 ($)" />
            <Line yAxisId="right" type="monotone" dataKey="marketCap" stroke="#82ca9d" name="市值 (十亿 $)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stockHistory.map((item, index) => (
          <Card 
            key={index} 
            className={`transition-all duration-300 ${selectedPoint === item ? 'ring-2 ring-blue-500' : ''}`}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <CardHeader>
              <CardTitle>{item.year}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">股价: ${item.price.toFixed(2)}</p>
              <p className="font-semibold">市值: ${item.marketCap.toFixed(1)} 十亿</p>
              <p className="mt-2">{item.event}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}