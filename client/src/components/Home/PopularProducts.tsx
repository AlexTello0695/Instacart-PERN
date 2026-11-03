import { useEffect, useState } from "react"
import type { Product } from "../../types"
import { Link } from "react-router-dom"
import { ArrowRightIcon } from "lucide-react"
import ProductCard from "../ProductCard"
import api from "../../config/api"
import toast from "react-hot-toast"

const PopularProducts = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        api.get('/products').then(({ data }) => {
            // Ordena por rating descendente (desempate: más reseñas) y toma el top 10
            const topRated = [...data.products]
                .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
                .slice(0, 10)
            setProducts(topRated)
        }).catch((error: any) => {
            toast.error(error?.response?.data?.message || error?.message)
        })
    }, [])

    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold">Productos Populares</h2>
                        <p className="text-sm text-app-text-light mt-1">Los productos mejor valorados de esta temporada.</p>
                    </div>
                    <Link to="/products" className="text-sm font-semibold text-app-orange hover:text-app-orange-dark flex items-center gap-1 transition-colors">
                        Ver todos <ArrowRightIcon className="size-4"/>
                    </Link> 
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularProducts