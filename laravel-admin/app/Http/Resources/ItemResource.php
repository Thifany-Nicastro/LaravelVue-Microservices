<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product' => $this->title,
            'quantity' => $this->pivot->quantity,
            'unit_price' => $this->pivot->unit_price,
            'subtotal' => $this->pivot->subtotal_value
        ];
    }
}
