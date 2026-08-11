import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { categoriesData, dummyProducts } from "../assets/assets";
import { Home } from "lucide-react";

const Products = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState<Product[]>([])
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setloading] = useState(true);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const category = searchParams.get("category") || "";
    const organic = searchParams.get("organic") || "";
    const sort = searchParams.get("sort") || "";
    const page = Number(searchParams.get("page")) || "";
    const minPrice = searchParams.get("minPrice") || "";
    const maxPrice = searchParams.get("maxPrice") || "";

    const fetchProducts = async ()=>{
        setloading(true)
        setProducts(dummyProducts.filter((p)=> p.category === category || category === ""));
        setloading(false)
    }

    const updateFilter = (key: string, value: string)=>{
        const newParams = new URLSearchParams(searchParams)
        if (value) {
            newParams.set(key, value)
        } else{
            newParams.delete(key)
        }
        if (key !== "page") {
            newParams.delete("page")
        }
        setSearchParams(newParams)
    }

    const clearFilter = ()=> setSearchParams({})

    const activeCategory = categoriesData.find((c)=> c.slug === category);
    const hasFilter = category || organic || minPrice || maxPrice;

    useEffect(()=>{
        fetchProducts()
    }, [category, organic, sort, page, minPrice, maxPrice])
    return (
        <div>
            <div>
                {/* {Navegacion Jerarquica} */}
                <nav>
                    <Link to='/'>
                        <Home />
                    </Link>
                    <span>/</span>
                    <span>{activeCategory ? activeCategory.name : "Todos los productos"}</span>
                </nav>
            </div>
        </div>
    )
}

export default Products;