<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Product;
use App\Observers\ProductObserver;
use App\Models\Order;
use App\Observers\OrderObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Product::observe(ProductObserver::class);
        Order::observe(OrderObserver::class);
    }
}
