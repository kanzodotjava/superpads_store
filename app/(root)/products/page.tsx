import Collections from "@/components/Collections";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";

const ProductList = async () => {
  const products = await getProducts();

  return (

    <div className="flex flex-col items-center gap-10 py-8 px-5">
            <Collections />
      <p className="text-heading1-bold">Mousepads</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No mousepads found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
