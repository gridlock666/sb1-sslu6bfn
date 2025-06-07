'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Search, 
  Barcode, 
  Plus, 
  Apple,
  Clock,
  CalendarDays,
  Utensils,
  TrendingUp,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function Track() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('breakfast');
  
  const recentFoods = [
    { name: 'Greek Yogurt', calories: 130, protein: 15, brand: 'Chobani' },
    { name: 'Banana', calories: 105, protein: 1, brand: 'Fresh' },
    { name: 'Oatmeal', calories: 150, protein: 5, brand: 'Quaker' },
    { name: 'Chicken Breast', calories: 231, protein: 43, brand: 'Fresh' }
  ];

  const todayMeals = {
    breakfast: [
      { name: 'Overnight Oats with Berries', calories: 320, protein: 12, time: '8:00 AM' }
    ],
    lunch: [
      { name: 'Grilled Chicken Salad', calories: 450, protein: 35, time: '12:30 PM' }
    ],
    snack: [
      { name: 'Greek Yogurt & Almonds', calories: 180, protein: 15, time: '3:00 PM' }
    ],
    dinner: []
  };

  const mealTypes = [
    { id: 'breakfast', label: 'Breakfast', icon: '🌅' },
    { id: 'lunch', label: 'Lunch', icon: '☀️' },
    { id: 'snack', label: 'Snack', icon: '🍎' },
    { id: 'dinner', label: 'Dinner', icon: '🌙' }
  ];

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
            <span className="text-xl font-bold text-gray-900">Track Food</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Log Your Food</h1>
          <p className="text-gray-600">Track your meals to stay on top of your nutrition goals</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Tracking Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Add Methods */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle>Add Food</CardTitle>
                <CardDescription>Choose your preferred method to log food</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    size="lg" 
                    className="gradient-orange text-white border-0 h-20 flex-col gap-2 hover:opacity-90"
                  >
                    <Camera className="w-6 h-6" />
                    Take Photo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-20 flex-col gap-2 hover:bg-orange-50"
                  >
                    <Barcode className="w-6 h-6" />
                    Scan Barcode
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-20 flex-col gap-2 hover:bg-orange-50"
                  >
                    <Search className="w-6 h-6" />
                    Search Food
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search Food */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-orange-500" />
                  Search Foods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search for foods..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  {/* Recent Foods */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Recent Foods</h3>
                    <div className="space-y-2">
                      {recentFoods.map((food, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-orange-200 hover:bg-orange-50 cursor-pointer transition-all"
                        >
                          <div>
                            <div className="font-medium">{food.name}</div>
                            <div className="text-sm text-gray-600">{food.brand} • {food.calories} cal • {food.protein}g protein</div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today's Summary */}
          <div className="space-y-6">
            {/* Meal Selection */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-orange-500" />
                  Select Meal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {mealTypes.map((meal) => (
                    <Button
                      key={meal.id}
                      variant={selectedMeal === meal.id ? "default" : "outline"}
                      className={`h-16 flex-col gap-1 ${
                        selectedMeal === meal.id 
                          ? 'gradient-orange text-white border-0' 
                          : 'hover:bg-orange-50'
                      }`}
                      onClick={() => setSelectedMeal(meal.id)}
                    >
                      <span className="text-lg">{meal.icon}</span>
                      <span className="text-sm">{meal.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Today's Meals */}
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-orange-500" />
                  Today's Meals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mealTypes.map((mealType) => (
                    <div key={mealType.id} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{mealType.icon}</span>
                        <span className="font-medium">{mealType.label}</span>
                        <Badge variant="secondary" className="ml-auto">
                          {todayMeals[mealType.id].length}
                        </Badge>
                      </div>
                      
                      {todayMeals[mealType.id].length > 0 ? (
                        <div className="space-y-1 ml-6">
                          {todayMeals[mealType.id].map((food, index) => (
                            <div key={index} className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                              <div className="font-medium text-gray-900">{food.name}</div>
                              <div className="flex items-center gap-2 text-xs">
                                <Clock className="w-3 h-3" />
                                {food.time} • {food.calories} cal • {food.protein}g protein
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500 ml-6 italic">No foods logged</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Summary */}
            <Card className="gradient-orange text-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Today's Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Calories</span>
                    <span className="font-bold">950 / 2000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span className="font-bold">62g / 120g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meals Logged</span>
                    <span className="font-bold">3 / 4</span>
                  </div>
                  <div className="pt-2 border-t border-orange-400">
                    <div className="text-sm opacity-90">
                      Keep going! You're doing great with your tracking today.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}