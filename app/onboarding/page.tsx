'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Apple, 
  User, 
  Target, 
  Utensils, 
  Heart, 
  Sparkles, 
  Dumbbell,
  Shield,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    goals: [] as string[],
    dietaryRestrictions: [] as string[],
    allergies: [] as string[],
    healthConditions: [] as string[]
  });
  
  const router = useRouter();
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const goals = [
    { id: 'muscle', label: 'Build Muscle', icon: <Dumbbell className="w-5 h-5" />, color: 'bg-blue-100 text-blue-700' },
    { id: 'skin', label: 'Glowing Skin', icon: <Sparkles className="w-5 h-5" />, color: 'bg-pink-100 text-pink-700' },
    { id: 'weight-loss', label: 'Weight Loss', icon: <Target className="w-5 h-5" />, color: 'bg-green-100 text-green-700' },
    { id: 'energy', label: 'More Energy', icon: <Heart className="w-5 h-5" />, color: 'bg-orange-100 text-orange-700' },
    { id: 'aging', label: 'Healthy Aging', icon: <Shield className="w-5 h-5" />, color: 'bg-purple-100 text-purple-700' },
    { id: 'general', label: 'General Health', icon: <Apple className="w-5 h-5" />, color: 'bg-gray-100 text-gray-700' }
  ];

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Mediterranean', 
    'Gluten-Free', 'Dairy-Free', 'Low-Carb', 'Low-Fat', 'Halal', 'Kosher'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoalToggle = (goalId: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId) 
        ? prev.goals.filter(g => g !== goalId)
        : [...prev.goals, goalId]
    }));
  };

  const handleDietaryToggle = (option: string) => {
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(option)
        ? prev.dietaryRestrictions.filter(d => d !== option)
        : [...prev.dietaryRestrictions, option]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Header */}
      <div className="flex items-center justify-between p-6 max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
            <Apple className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">NutriAI</span>
        </Link>
        <div className="text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Progress value={progress} className="bg-orange-100" />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 pb-12">
        <Card className="shadow-lg border-orange-100">
          <CardHeader className="text-center">
            {currentStep === 1 && (
              <>
                <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Tell us about yourself</CardTitle>
                <CardDescription>Help us personalize your nutrition plan</CardDescription>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">What are your goals?</CardTitle>
                <CardDescription>Select all that apply to create your perfect plan</CardDescription>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Dietary preferences</CardTitle>
                <CardDescription>Let us know about any restrictions or preferences</CardDescription>
              </>
            )}
            {currentStep === 4 && (
              <>
                <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Almost done!</CardTitle>
                <CardDescription>Any health conditions or allergies to consider?</CardDescription>
              </>
            )}
          </CardHeader>
          
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup 
                      value={formData.gender}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="170"
                      value={formData.height}
                      onChange={(e) => setFormData(prev => ({ ...prev, height: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="65"
                      value={formData.weight}
                      onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Activity Level</Label>
                  <RadioGroup 
                    value={formData.activityLevel}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, activityLevel: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sedentary" id="sedentary" />
                      <Label htmlFor="sedentary">Sedentary (little to no exercise)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light">Light activity (1-3 days/week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="moderate" />
                      <Label htmlFor="moderate">Moderate activity (3-5 days/week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active">Very active (6-7 days/week)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <div
                    key={goal.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      formData.goals.includes(goal.id)
                        ? 'border-orange-300 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-200'
                    }`}
                    onClick={() => handleGoalToggle(goal.id)}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${goal.color}`}>
                        {goal.icon}
                      </div>
                      <span className="font-medium">{goal.label}</span>
                      {formData.goals.includes(goal.id) && (
                        <Badge className="gradient-orange text-white border-0">Selected</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {dietaryOptions.map((option) => (
                    <div
                      key={option}
                      className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        formData.dietaryRestrictions.includes(option)
                          ? 'border-orange-300 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-200'
                      }`}
                      onClick={() => handleDietaryToggle(option)}
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={formData.dietaryRestrictions.includes(option)}
                          onChange={() => {}}
                        />
                        <span className="text-sm font-medium">{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="allergies">Food Allergies (optional)</Label>
                  <Input
                    id="allergies"
                    placeholder="e.g., nuts, shellfish, dairy"
                    value={formData.allergies.join(', ')}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      allergies: e.target.value.split(',').map(a => a.trim()).filter(Boolean)
                    }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="conditions">Health Conditions (optional)</Label>
                  <Input
                    id="conditions"
                    placeholder="e.g., diabetes, hypertension"
                    value={formData.healthConditions.join(', ')}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      healthConditions: e.target.value.split(',').map(c => c.trim()).filter(Boolean)
                    }))}
                  />
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-800 mb-2">Your Profile Summary</h3>
                  <div className="space-y-1 text-sm text-orange-700">
                    <p>Age: {formData.age}, Gender: {formData.gender}</p>
                    <p>Goals: {formData.goals.join(', ')}</p>
                    <p>Activity: {formData.activityLevel}</p>
                    {formData.dietaryRestrictions.length > 0 && (
                      <p>Dietary: {formData.dietaryRestrictions.join(', ')}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button 
            variant="outline" 
            onClick={handleBack}
            disabled={currentStep === 1}
            className="hover:bg-orange-50"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <Button 
            onClick={handleNext}
            className="gradient-orange text-white border-0 hover:opacity-90"
          >
            {currentStep === totalSteps ? 'Complete Setup' : 'Continue'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}