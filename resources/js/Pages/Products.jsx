import { useForm } from "@inertiajs/react";
import { useState } from "react";

function DeleteProduct(id) {
    const { post, processing } = useForm();

    const handleDelete = () => {
        post(route("product.delete", id), {
            onSuccess: () => alert("Product delete successfully"),
            onError: () => alert("Failed to delete product"),
        });
    };

    return (
        <button
            className="btn btn-sm btn-danger mx-1"
            disabled={processing}
            onClick={handleDelete}
        >
            {processing ? (
                <span
                    className="spinner-border spinner-border-sm mx-2"
                    role="status"
                    aria-hidden="true"
                ></span>
            ) : (
                ""
            )}
            Delete
        </button>
    );
}

function AddProduct(props) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: "",
        name: "",
        display: "",
        adapter: "",
        stand: "",
        total: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("product.store"));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bolder"> Category: </label>
                    <select
                        className={
                            "form-select " +
                            (errors.category_id ? "is-invalid" : "")
                        }
                        defaultValue={data.category_id}
                        onChange={(e) => setData("category_id", e.target.value)}
                    >
                        <option value="">Select Category ...</option>
                        {props.categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">{errors.category_id}</div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Name: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Display: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Display"
                        value={data.display}
                        onChange={(e) => setData("display", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Stand: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Stand"
                        value={data.stand}
                        onChange={(e) => setData("stand", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Adapter: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Adapter"
                        value={data.adapter}
                        onChange={(e) => setData("adapter", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Total: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Total"
                        value={data.total}
                        onChange={(e) => setData("total", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

function ViewProduct(props) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: props.product.category_id,
        name: props.product.name,
        display: props.product.display,
        adapter: props.product.adapter,
        stand: props.product.stand,
        total: props.product.total,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("product.update", props.product.id), {
            onSuccess: () => alert("Product updated successfully"),
            onError: () => alert("Failed to update product"),
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bolder"> Category: </label>
                    <select
                        className={
                            "form-select " +
                            (errors.category_id ? "is-invalid" : "")
                        }
                        defaultValue={data.category_id}
                        onChange={(e) => setData("category_id", e.target.value)}
                    >
                        <option value="">Select Category ...</option>
                        {props.categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">{errors.category_id}</div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Name: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Display: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Display"
                        value={data.display}
                        onChange={(e) => setData("display", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Stand: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Stand"
                        value={data.stand}
                        onChange={(e) => setData("stand", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Adapter: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Adapter"
                        value={data.adapter}
                        onChange={(e) => setData("adapter", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bolder"> Total: </label>
                    <input
                        className="form-control"
                        placeholder="Enter Total"
                        value={data.total}
                        onChange={(e) => setData("total", e.target.value)}
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processing}
                >
                    {processing ? (
                        <span
                            className="spinner-border spinner-border-sm mx-2"
                            role="status"
                            aria-hidden="true"
                        ></span>
                    ) : (
                        ""
                    )}
                    Update
                </button>
            </form>
        </div>
    );
}

function ListProducts(props) {
    return (
        <table className="table table-responsive">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Display</th>
                    <th>Stand</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="text-muted">
                {props.products.map((product, index) => (
                    <tr
                        key={product.id}
                        className={(index + 1) % 2 == 0 ? "bg-light" : ""}
                    >
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.display}</td>
                        <td>{product.stand}</td>
                        <td className="text-nowrap text-end">
                            <button
                                className="btn btn-sm btn-primary mx-1"
                                onClick={() => props.handleView(product)}
                            >
                                View
                            </button>
                            <DeleteProduct id={product.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function Products(props) {
    const [addProduct, setAddProduct] = useState(false);
    const [viewProduct, setViewProduct] = useState(null);

    const handleAddNew = () => {
        setAddProduct(!addProduct);
        setViewProduct(null);
    };

    const handleViewProduct = (product) => {
        setViewProduct(product);
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">List Of All Products</h1>
                    <div className="my-3">
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                type="button"
                                className="btn btn-md btn-primary"
                                onClick={handleAddNew}
                            >
                                {addProduct ? "List All" : " Add New"}
                            </button>
                            <button
                                type="button"
                                className="btn btn-md btn-success"
                            >
                                Export
                            </button>
                            <button
                                type="button"
                                className="btn btn-md btn-warning"
                            >
                                Print
                            </button>
                        </div>
                    </div>

                    {addProduct ? (
                        <AddProduct categories={props.categories} />
                    ) : viewProduct != null ? (
                        <ViewProduct
                            product={viewProduct}
                            categories={props.categories}
                        />
                    ) : (
                        <ListProducts
                            handleView={handleViewProduct}
                            products={props.products}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;
