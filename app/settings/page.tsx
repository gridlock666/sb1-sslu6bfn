'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  User, 
  Bell, 
  Shield, 
  Smartphone, 
  Apple,
  ArrowLeft,
  Save,
  Link as LinkIcon,
  Trash2,
  Eye,
  EyeOff
} from 'lucide-react';
import Link from 'next/link';

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    meals: true,
    water: true,
    exercise: false,
    achievements: true,
    grocery: true,
    supplements: false
  });

  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    age: 28,
    height: 165,
    weight: 62,
    activityLevel: 'moderate',
    goals: ['skin', 'energy']
  });

  const integrations = [
    { name: 'Apple Health', connected: true, icon: '🍎' },
    { name: 'Google Fit', connected: false, icon: '📱' },
    { name: 'MyFitnessPal', connected: true, icon: '💪' },
    { name: 'Fitbit', connected: false, icon: '⌚' }
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
            <span className="text-xl font-bold text-gray-900">Settings</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your profile, preferences, and integrations</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-orange-100">
            <TabsTrigger value="profile" className="data-[state=active]:bg-orange-50">Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-orange-50">Notifications</TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-orange-50">Integrations</TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-orange-50">Privacy</TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <div className="space-y-6">
              <Card className="border-orange-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-orange-500" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Update your basic profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={profile.age}
                        onChange={(e) => setProfile(prev => ({ ...prev, age: parseInt(e.target.value) }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={profile.height}
                        onChange={(e) => setProfile(prev => ({ ...prev, height: parseInt(e.target.value) }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={profile.weight}
                        onChange={(e) => setProfile(prev => ({ ...prev, weight: parseInt(e.target.value) }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Activity Level</Label>
                    <RadioGroup 
                      value={profile.activityLevel}
                      onValueChange={(value) => setProfile(prev => ({ ...prev, activityLevel: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sedentary" id="sedentary-profile" />
                        <Label htmlFor="sedentary-profile">Sedentary</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="light-profile" />
                        <Label htmlFor="light-profile">Light Activity</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate-profile" />
                        <Label htmlFor="moderate-profile">Moderate Activity</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="active-profile" />
                        <Label htmlFor="active-profile">Very Active</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 shadow-sm">
                <CardHeader>
                  <CardTitle>Password & Security</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter current password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="gradient-orange text-white border-0">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose what notifications you'd like to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { key: 'meals', label: 'Meal Reminders', description: 'Get notified when it\'s time to eat' },
                  { key: 'water', label: 'Hydration Reminders', description: 'Stay on top of your water intake' },
                  { key: 'exercise', label: 'Exercise Reminders', description: 'Get motivated to stay active' },
                  { key: 'achievements', label: 'Achievement Notifications', description: 'Celebrate your wins' },
                  { key: 'grocery', label: 'Grocery Reminders', description: 'When it\'s time to order groceries' },
                  { key: 'supplements', label: 'Supplement Notifications', description: 'AI supplement recommendations' }
                ].map((notification) => (
                  <div key={notification.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{notification.label}</div>
                      <div className="text-sm text-gray-600">{notification.description}</div>
                    </div>
                    <Switch
                      checked={notifications[notification.key]}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, [notification.key]: checked }))
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations">
            <Card className="border-orange-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-orange-500" />
                  App Integrations
                </CardTitle>
                <CardDescription>Connect your favorite health and fitness apps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{integration.icon}</span>
                      <div>
                        <div className="font-medium">{integration.name}</div>
                        <div className="text-sm text-gray-600">
                          {integration.connected ? 'Connected' : 'Not connected'}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant={integration.connected ? "outline" : "default"}
                      size="sm"
                      className={integration.connected ? 'hover:bg-red-50 hover:text-red-600 hover:border-red-200' : 'gradient-orange text-white border-0'}
                    >
                      {integration.connected ? (
                        <>
                          <Trash2 className="w-4 h-4 mr-2" />
                          Disconnect
                        </>
                      ) : (
                        <>
                          <LinkIcon className="w-4 h-4 mr-2" />
                          Connect
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy */}
          <TabsContent value="privacy">
            <div className="space-y-6">
              <Card className="border-orange-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    Privacy & Data
                  </CardTitle>
                  <CardDescription>Manage your data and privacy settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">Data Sharing</div>
                        <div className="text-sm text-gray-600">Allow anonymous data sharing for research</div>
                      </div>
                      <Switch defaultChecked={false} />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">Marketing Communications</div>
                        <div className="text-sm text-gray-600">Receive updates about new features</div>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">Analytics</div>
                        <div className="text-sm text-gray-600">Help improve the app with usage analytics</div>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>Irreversible actions that affect your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="space-y-1">
                      <div className="font-medium text-red-900">Export Data</div>
                      <div className="text-sm text-red-700">Download all your data in JSON format</div>
                    </div>
                    <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100">
                      Export
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                    <div className="space-y-1">
                      <div className="font-medium text-red-900">Delete Account</div>
                      <div className="text-sm text-red-700">Permanently delete your account and all data</div>
                    </div>
                    <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}