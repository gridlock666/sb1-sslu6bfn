'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Target, 
  Camera, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Apple,
  Zap,
  Heart,
  Award,
  ChevronRight,
  Play
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const todayStats = {
    calories: { current: 1420, target: 2000 },
    protein: { current: 85, target: 120 },
    water: { current: 6, target: 8 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
            <Apple className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">NutriAI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/onboarding">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/onboarding">
            <Button className="gradient-orange text-white border-0 hover:opacity-90">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isLoaded ? 'animate-in slide-in-from-left duration-1000' : 'opacity-0'}`}>
            <div className="space-y-4">
              <Badge className="gradient-orange text-white border-0 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Nutrition
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Personal
                <span className="text-orange-500"> AI Diet</span>
                <br />Guide
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your health with personalized meal plans, automated grocery ordering, 
                and AI-powered wellness coaching tailored to your unique goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/onboarding">
                <Button size="lg" className="gradient-orange text-white border-0 hover:opacity-90 px-8 py-6 text-lg">
                  Start Your Journey
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg hover:bg-orange-50">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
            </div>
          </div>

          <div className={`relative ${isLoaded ? 'animate-in slide-in-from-right duration-1000' : 'opacity-0'}`}>
            <div className="relative z-10">
              <Card className="glass-effect border-orange-200 shadow-2xl animate-float">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    Today's Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Calories</span>
                      <span>{todayStats.calories.current}/{todayStats.calories.target}</span>
                    </div>
                    <Progress 
                      value={(todayStats.calories.current / todayStats.calories.target) * 100} 
                      className="bg-orange-100" 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Protein (g)</span>
                      <span>{todayStats.protein.current}/{todayStats.protein.target}</span>
                    </div>
                    <Progress 
                      value={(todayStats.protein.current / todayStats.protein.target) * 100}
                      className="bg-orange-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Water (glasses)</span>
                      <span>{todayStats.water.current}/{todayStats.water.target}</span>
                    </div>
                    <Progress 
                      value={(todayStats.water.current / todayStats.water.target) * 100}
                      className="bg-orange-100"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 gradient-orange rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-200 rounded-full opacity-30 animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of personalized nutrition with our advanced AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Personalized Goals",
              description: "Set custom wellness objectives from muscle building to glowing skin with AI-tailored plans."
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "AI Meal Planning",
              description: "Dynamic meal plans that adapt to your preferences, restrictions, and nutritional needs."
            },
            {
              icon: <Camera className="w-6 h-6" />,
              title: "Visual Food Logging",
              description: "Snap photos of meals for instant AI recognition and automatic nutritional tracking."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Progress Analytics",
              description: "Comprehensive insights and trends to keep you motivated and on track."
            },
            {
              icon: <ShoppingCart className="w-6 h-6" />,
              title: "Auto Shopping",
              description: "AI automatically orders supplements and groceries based on your meal plans."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Community & Coaching",
              description: "Connect with others and receive personalized AI coaching support."
            }
          ].map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 gradient-orange rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-orange text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join thousands of users who have achieved their wellness goals with our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg bg-white text-orange-600 hover:bg-gray-50">
                Start Free Trial
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-orange-600">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-orange-400">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Award Winner</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Health Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>50K+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
                <Apple className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">NutriAI</span>
            </div>
            <div className="text-gray-600">
              © 2025 NutriAI. Transforming health through AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}