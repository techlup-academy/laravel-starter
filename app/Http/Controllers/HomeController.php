<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Products', [
            'categories' => Category::all(),
            'products' => Product::all(),
        ]);
    }

    public function storeProduct(Request $request)
    {
        $request->validate([
            'category_id' => 'required'
        ]);

        $product = new Product;
        $product->fill($request->all());
        $product->image_url = 'test.jpg';
        $product->save();
    }

    public function updateProduct(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'required'
        ]);

        $product = Product::query()->find($id);
        $product->fill($request->all());
        $product->save();
    }


    public function deleteProduct($id)
    {

        Product::query()->find($id)->delete();
    }
}