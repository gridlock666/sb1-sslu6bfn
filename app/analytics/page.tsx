'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Apple,
  ArrowLeft,
  Award,
  Zap,
  Activity,
  Heart,
  Droplets,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const weeklyData = [
    { day: 'Mon', calories: 1950, protein: 115, water: 8, weight: 68.2 },
    { day: 'Tue', calories: 2100, protein: 125, water: 7, weight: 68.1 },
    { day: 'Wed', calories: 1850, protein: 105, water: 9, weight: 68.0 },
    { day: 'Thu', calories: 1420, protein: 85, water: 6, weight: 67.9 },
    { day: 'Fri', calories: 2050, protein: 120, water: 8, weight: 67.8 },
    { day: 'Sat', calories: 1900, protein: 110, water: 7, weight: 67.7 },
    { day: 'Sun', calories: 2000, protein: 118, water: 8, weight: 67.6 }
  ];

  const goals = {
    calories: 2000,
    protein: 120,
    water: 8,
    weightTarget: 65
  };

  const achievements = [
    { title: '7-Day Streak', description: 'Consistent logging for a week', earned: true, date: 'Today' },
    { title: 'Protein Power', description: 'Hit protein goal 5 days in a row', earned: true, date: '3 days ago' },
    { title: 'Hydration Hero', description: 'Drink 8+ glasses daily for a week', earned: false, progress: 85 },
    { title: 'Balanced Eater', description: 'Perfect macro balance for 3 days', earned: false, progress: 60 }
  ];

  const insights = [
    {
      type: 'positive',
      title: 'Great Protein Intake!',
      description: 'You\'ve consistently hit your protein goals this week. This supports your muscle building goals.',
      icon: <Zap className="w-5 h-5" />
    },
    {
      type: 'warning',
      title: 'Hydration Opportunity',
      description: 'Your water intake has been below target. Try setting hourly reminders to drink more water.',
      icon: <Droplets className="w-5 h-5" />
    },
    {
      type: 'info',
      title: 'Weight Trend',
      description: 'You\'re making steady progress toward your weight goal. Keep up the great work!',
      icon: <Scale className="w-5 h-5" />
    }
  ];

  const averageWeekly = {
    calories: weeklyData.reduce((sum, day) => sum + day.calories, 0) / weeklyData.length,
    protein: weeklyData.reduce((sum, day) => sum + day.protein, 0) / weeklyData.length,
    water: weeklyData.reduce((sum, day) => sum + day.water, 0) / weeklyData.length,
    currentWeight: weeklyData[weeklyData.length - 1].weight,
    weightChange: weeklyData[weeklyData.length - 1].weight - weeklyData[0].weight
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-orange-100 bg-white/50 backdrop-blur">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
              <Apple className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Analytics</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress Analytics</h1>
          <p className="text-gray-600">Detailed insights into your nutrition and wellness journey</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Analytics */}
          <div className="lg:col-span-3 space-y-6">
            {/* Period Selection */}
            <Card className="border-orange-100 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Time Period:</span>
                  <div className="flex gap-1 ml-auto">
                    {['week', 'month', '3months'].map((period) => (
                      <Button
                        key={period}
                        size="sm"
                        variant={selectedPeriod === period ? "default" : "outline"}
                        className={selectedPeriod === period ? 'gradient-orange text-white border-0' : 'hover:bg-orange-50'}
                        onClick={() => setSelectedPeriod(period)}
                      >
                        {period === 'week' ? 'Week' : period === 'month' ? 'Month' : '3 Months'}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Overview Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="border-orange-100 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{Math.round(averageWeekly.calories)}</div>
                  <div className="text-sm text-gray-600">Avg Calories/Day</div>
                  <div className="text-xs text-orange-600 mt-1">
                    {((averageWeekly.calories / goals.calories) * 100).toFixed(0)}% of goal
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-100 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{Math.round(averageWeekly.protein)}g</div>
                  <div className="text-sm text-gray-600">Avg Protein/Day</div>
                  <div className="text-xs text-blue-600 mt-1">
                    {((averageWeekly.protein / goals.protein) * 100).toFixed(0)}% of goal
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-100 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{averageWeekly.water.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">Avg Water/Day</div>
                  <div className="text-xs text-cyan-600 mt-1">
                    {((averageWeekly.water / goals.water) * 100).toFixed(0)}% of goal
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-100 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{averageWeekly.currentWeight}kg</div>
                  <div className="text-sm text-gray-600">Current Weight</div>
                  <div className={`text-xs mt-1 ${averageWeekly.weightChange < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {averageWeekly.weightChange > 0 ? '+' : ''}{averageWeekly.weightChange.toFixed(1)}kg this week
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <Tabs defaultValue="calories" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calories">Calories</TabsTrigger>
                <TabsTrigger value="protein">Protein</TabsTrigger>
                <TabsTrigger value="water">Water</TabsTrigger>
                <TabsTrigger value="weight">Weight</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calories">
                <Card className="border-orange-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-orange-500" />
                      Daily Calories
                    </CardTitle>
                    <CardDescription>Your calorie intake vs goal over the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weeklyData.map((day, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{day.day}</span>
                            <span>{day.calories} / {goals.calories} cal</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className="gradient-orange h-full rounded-full transition-all duration-1000"
                              style={{ width: `${Math.min((day.calories / goals.calories) * 100, 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="protein">
                <Card className="border-orange-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-blue-500" />
                      Daily Protein
                    </CardTitle>
                    <CardDescription>Your protein intake vs goal over the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weeklyData.map((day, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{day.day}</span>
                            <span>{day.protein}g / {goals.protein}g</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-blue-500 h-full rounded-full transition-all duration-1000"
                              style={{ width: `${Math.min((day.protein / goals.protein) * 100, 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="water">
                <Card className="border-orange-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-cyan-500" />
                      Daily Water Intake
                    </CardTitle>
                    <CardDescription>Your hydration levels over the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weeklyData.map((day, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{day.day}</span>
                            <span>{day.water} / {goals.water} glasses</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-cyan-500 h-full rounded-full transition-all duration-1000"
                              style={{ width: `${Math.min((day.water / goals.water) * 100, 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="weight">
                <Card className="border-orange-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-purple-500" />
                      Weight Progress
                    </CardTitle>
                    <CardDescription>Your weight changes over the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between h-40 gap-2">
                      {weeklyData.map((day, index) => (
                        <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
                          <div className="text-xs font-medium text-gray-600">{day.weight}kg</div>
                          <div 
                            className="w-full bg-purple-500 rounded-full transition-all duration-1000"
                            style={{ height: `${((day.weight - 67) / 2) * 120 + 20}px` }}
                          />
                          <div className="text-xs font-medium text-gray-600">{day.day}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {insights.map((insight, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg border ${
                      insight.type === 'positive' ? 'bg-green-50 border-green-200' :
                      insight.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                      'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <div className={`${
                        insight.type === 'positive' ? 'text-green-600' :
                        insight.type === 'warning' ? 'text-yellow-600' :
                        'text-blue-600'
                      }`}>
                        {insight.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">{insight.title}</div>
                        <div className="text-xs text-gray-600 leading-relaxed">{insight.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        achievement.earned ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-gray-600">{achievement.description}</div>
                        {achievement.earned ? (
                          <Badge variant="secondary" className="text-xs mt-1">
                            Earned {achievement.date}
                          </Badge>
                        ) : (
                          <div className="mt-2">
                            <Progress value={achievement.progress} className="h-1" />
                            <div className="text-xs text-gray-500 mt-1">{achievement.progress}% complete</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}