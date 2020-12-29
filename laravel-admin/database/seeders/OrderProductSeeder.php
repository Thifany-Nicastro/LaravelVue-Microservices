<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Order;
use App\Models\Product;

class OrderProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orders = Order::all();

        foreach ($orders as $order) {
            $products = Product::inRandomOrder()->limit(3)->get();

            foreach ($products as $product) {
                $order->products()->attach(
                    $product->id,
                    ['quantity' => rand(1,10)]
                );
            }
        }
    }
}
