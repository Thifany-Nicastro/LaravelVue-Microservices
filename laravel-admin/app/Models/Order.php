<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)
        ->using(Item::class)
        // ->as('item')
        ->withPivot('quantity', 'unit_price');
    }

    public function getTotalValueAttribute()
    {
        $total = 0;
        foreach ($this->products()->get() as $product) {
            $total += $product->pivot->subtotal_value;
        }
        return $total;
    }
}
