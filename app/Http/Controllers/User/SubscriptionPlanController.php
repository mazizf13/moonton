<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    public function index() {
        $subscriptionPlans = SubscriptionPlan::all();

        return Inertia::render('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => $subscriptionPlans,
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan) {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid'
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }

}
