'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Apple, 
  Camera, 
  TrendingUp, 
  Target, 
  ShoppingCart, 
  Bell,
  Plus,
  Droplets,
  Zap,
  Calendar,
  Award,
  ChevronRight,
  Activity,
  User,
  Settings
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const todayStats = {
    calories: { current: 1420, target: 2000, percentage: 71 },
    protein: { current: 85, target: 120, percentage: 71 },
    carbs: { current: 180, target: 250, percentage: 72 },
    fat: { current: 45, target: 67, percentage: 67 },
    water: { current: 6, target: 8, percentage: 75 }
  };

  const todayMeals = [
    {
      name: "Overnight Oats with Berries",
      time: "8:00 AM",
      calories: 320,
      type: "Breakfast",
      status: "completed"
    },
    {
      name: "Grilled Chicken Salad",
      time: "12:30 PM",
      calories: 450,
      type: "Lunch",
      status: "completed"
    },
    {
      name: "Greek Yogurt & Almonds",
      time: "3:00 PM",
      calories: 180,
      type: "Snack",
      status: "completed"
    },
    {
      name: "Salmon with Quinoa",
      time: "7:00 PM",
      calories: 520,
      type: "Dinner",
      status: "planned"
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', calories: 1950, target: 2000 },
    { day: 'Tue', calories: 2100, target: 2000 },
    { day: 'Wed', calories: 1850, target: 2000 },
    { day: 'Thu', calories: 1420, target: 2000 },
    { day: 'Fri', calories: 0, target: 2000 },
    { day: 'Sat', calories: 0, target: 2000 },
    { day: 'Sun', calories: 0, target: 2000 }
  ];

  const recommendations = [
    {
      title: "Vitamin D Supplement",
      description: "Based on your indoor lifestyle, consider adding Vitamin D",
      action: "Order Now",
      type: "supplement"
    },
    {
      title: "Increase Protein Intake",
      description: "You're 30g below your daily protein goal",
      action: "View Foods",
      type: "nutrition"
    },
    {
      title: "Grocery Delivery",
      description: "Your weekly meal plan ingredients are ready to order",
      action: "Review Cart",
      type: "grocery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-orange-100 bg-white/50 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
            <Apple className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">NutriAI</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-5 h-5" />
          </Button>
          <Link href="/settings">
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Good {currentTime.getHours() < 12 ? 'morning' : currentTime.getHours() < 17 ? 'afternoon' : 'evening'}! 👋
          </h1>
          <p className="text-gray-600">Let's continue your wellness journey today</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Overview */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-orange-500" />
                      Today's Progress
                    </CardTitle>
                    <CardDescription>
                      {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                      })}
                    </CardDescription>
                  </div>
                  <Button size="sm" className="gradient-orange text-white border-0">
                    <Camera className="w-4 h-4 mr-2" />
                    Log Meal
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Calories</span>
                      <span className="font-medium">{todayStats.calories.current}/{todayStats.calories.target}</span>
                    </div>
                    <Progress value={todayStats.calories.percentage} className="bg-orange-100" />
                    <div className="text-xs text-gray-500">{todayStats.calories.percentage}% of goal</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Protein (g)</span>
                      <span className="font-medium">{todayStats.protein.current}/{todayStats.protein.target}</span>
                    </div>
                    <Progress value={todayStats.protein.percentage} className="bg-blue-100" />
                    <div className="text-xs text-gray-500">{todayStats.protein.percentage}% of goal</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Carbs (g)</span>
                      <span className="font-medium">{todayStats.carbs.current}/{todayStats.carbs.target}</span>
                    </div>
                    <Progress value={todayStats.carbs.percentage} className="bg-green-100" />
                    <div className="text-xs text-gray-500">{todayStats.carbs.percentage}% of goal</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fat (g)</span>
                      <span className="font-medium">{todayStats.fat.current}/{todayStats.fat.target}</span>
                    </div>
                    <Progress value={todayStats.fat.percentage} className="bg-purple-100" />
                    <div className="text-xs text-gray-500">{todayStats.fat.percentage}% of goal</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 flex items-center gap-1">
                        <Droplets className="w-3 h-3" />
                        Water
                      </span>
                      <span className="font-medium">{todayStats.water.current}/{todayStats.water.target}</span>
                    </div>
                    <Progress value={todayStats.water.percentage} className="bg-cyan-100" />
                    <div className="text-xs text-gray-500">{todayStats.water.percentage}% of goal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meals */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Today's Meals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayMeals.map((meal, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        meal.status === 'completed' 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          meal.status === 'completed' ? 'bg-green-500' : 'bg-gray-400'
                        }`} />
                        <div>
                          <div className="font-medium">{meal.name}</div>
                          <div className="text-sm text-gray-600">
                            {meal.type} • {meal.time} • {meal.calories} cal
                          </div>
                        </div>
                      </div>
                      {meal.status === 'planned' && (
                        <Button size="sm" variant="outline" className="hover:bg-orange-50">
                          <Plus className="w-4 h-4 mr-1" />
                          Log
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Progress Chart */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-40 gap-2">
                  {weeklyProgress.map((day, index) => (
                    <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-full bg-gray-200 rounded-full overflow-hidden" style={{ height: '120px' }}>
                        <div 
                          className="gradient-orange rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            height: `${(day.calories / day.target) * 100}%`,
                            marginTop: `${120 - (day.calories / day.target) * 120}px`
                          }}
                        />
                      </div>
                      <div className="text-xs font-medium text-gray-600">{day.day}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                    <div className="space-y-2">
                      <div className="font-medium text-gray-900">{rec.title}</div>
                      <div className="text-sm text-gray-600">{rec.description}</div>
                      <Button size="sm" className="gradient-orange text-white border-0 w-full">
                        {rec.action}
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start hover:bg-orange-50">
                  <Camera className="w-4 h-4 mr-2" />
                  Log Food with Camera
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-orange-50">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Grocery List
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-orange-50">
                  <Activity className="w-4 h-4 mr-2" />
                  Track Exercise
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-orange-50">
                  <Award className="w-4 h-4 mr-2" />
                  View Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Achievement Badge */}
            <Card className="gradient-orange text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="font-bold text-lg mb-2">7-Day Streak!</div>
                <div className="text-orange-100 text-sm">
                  You've been consistent with your nutrition goals for a full week. Keep it up!
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}