<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show(Request $request)
    {
        // all();

        // where('field', 'operator', 'criteria')->get();
        // with
        // find();

        $products = Product::query()->with('category')->get();

        return view('test', ['products' => $products]);
    }

    public function about(Request $request)
    {
        return view('about');
    }
}
