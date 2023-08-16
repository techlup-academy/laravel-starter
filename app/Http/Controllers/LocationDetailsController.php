<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationDetailsController extends Controller
{
    public function getLocationDetailsByCoordinates(Request $request)
    {
        $location_details = [
            'country' => 'Kenya',
            'county' => 'Kiambu',
            'sub_county' => 'Thika'
        ];

        return $location_details;
    }
}