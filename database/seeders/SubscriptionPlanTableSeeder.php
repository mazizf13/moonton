<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    'Watch on 1 screen',
                    'SD quality',
                    'Download on 1 device',
                    'Limited to 1 profile',
                    'Access to all content',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 6,
                'features' => json_encode([
                    'Watch on 4 screens',
                    'HD & UHD quality',
                    'Download on 4 devices',
                    'Up to 5 profiles',
                    'Access to all content',
                    'Priority support',
                ]),
            ],
        ];
        SubscriptionPlan::insert($subscriptionPlans);
    }
}
