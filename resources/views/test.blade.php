<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
</head>

<body>
    <section style="background-color: #eee;">
        <div class="container py-5">
            <div class="row justify-content-center">
                {{-- begin product --}}
                @foreach ($products as $product)
                    <div class="col-md-8 col-lg-6 col-xl-4">
                        <div class="card text-black">
                            <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                            <img src="/uploads/{{ $product->image_url }}" class="card-img-top" alt="Apple Computer" />
                            <div class="card-body">
                                <div class="text-center">
                                    <h5 class="card-title">{{ $product->category->category_name }}</h5>
                                    <p class="text-muted mb-4">{{ $product->name }}</p>
                                </div>
                                <div>
                                    <div class="d-flex justify-content-between">
                                        <span>Pro Display XDR</span><span>{{ $product->display }}</span>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span>Pro stand</span><span>{{ $product->stand }}</span>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span>Vesa Mount Adapter</span><span>{{ $product->adapter }}</span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between total font-weight-bold mt-4">
                                    <span>Total</span><span>{{ $product->total }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                {{-- end product --}}
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
</body>

</html>
