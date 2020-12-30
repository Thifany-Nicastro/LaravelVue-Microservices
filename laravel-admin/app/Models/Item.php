<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Item extends Pivot
{
    public function getSubtotalValueAttribute()
    {
        return $this->quantity * $this->unit_price;
    }
}
