import { useMemo } from "react";
import type { Product } from "../types";
import { StarIcon, ThumbsUpIcon } from "lucide-react";

/* ─── Sección de Reseñas Dummy ─── */
const REVIEWERS = [
    { name: "Ana Sofía M.", avatar: "AM" },
    { name: "Ricardo L.", avatar: "RL" },
    { name: "Patricia H.", avatar: "PH" },
    { name: "Víctor G.", avatar: "VG" },
    { name: "María F.", avatar: "MF" },
    { name: "Alejandro R.", avatar: "AR" },
    { name: "Sofía T.", avatar: "ST" },
    { name: "Carlos P.", avatar: "CP" },
];

const COMMENTS = [
    "¡Me encanta este producto! Fresco y de gran calidad. Definitivamente volveré a pedir.",
    "Buena relación calidad-precio. El empaque estaba impecable y la entrega fue puntual.",
    "La calidad es decente, pero esperaba que estuviera un poco más fresco. Aun así, es una buena compra.",
    "Ya se volvió un básico en mi cocina. ¡Altamente recomendado para todos!",
    "Superó mis expectativas. El sabor y la frescura son de primera. ¡Cinco estrellas!",
    "¡Está bastante bueno! No es el mejor que he probado, pero definitivamente vale la pena por el precio.",
    "Llegó en perfectas condiciones. Muy satisfecha con la compra, pronto pediré más.",
    "Excelente producto, a mi familia le encantó. La calidad orgánica realmente se nota en el sabor.",
];

function seededRandom(seed: string) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
    return () => { h = (h ^ (h >>> 16)) * 0x45d9f3b; h = (h ^ (h >>> 16)) * 0x45d9f3b; h ^= h >>> 16; return (h >>> 0) / 0xffffffff; };
}

export default function DummyReviewsSection({ product }: { product: Product }) {
    const reviews = useMemo(() => {
        const rng = seededRandom(product.id);
        const count = Math.min(product.reviewCount, 6);
        const daysAgo = [3, 7, 14, 21, 35, 48];
        return Array.from({ length: count }, (_, i) => {
            const r = REVIEWERS[(Math.floor(rng() * REVIEWERS.length) + i) % REVIEWERS.length];
            const rating = Math.max(3, Math.min(5, Math.round(product.rating + (rng() - 0.5) * 2)));
            const d = new Date(); d.setDate(d.getDate() - daysAgo[i % daysAgo.length]);
            return {
                id: i,
                ...r,
                rating,
                date: d.toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" }),
                comment: COMMENTS[(Math.floor(rng() * COMMENTS.length) + i) % COMMENTS.length],
                helpful: Math.floor(rng() * 20) + 1,
            };
        });
    }, [product]);

    // Desglose de calificaciones
    const breakdown = useMemo(() => {
        const counts = [0, 0, 0, 0, 0];
        reviews.forEach((r) => counts[r.rating - 1]++);
        return counts.reverse(); // 5→1
    }, [reviews]);

    const maxCount = Math.max(...breakdown, 1);

    return (
        <section className="mt-10 ">
            <h2 className="text-2xl font-semibold text-app-green mb-6">Reseñas de Clientes</h2>

            <div className="bg-white/50 rounded-2xl p-6 md:p-8">
                {/* Fila de resumen */}
                <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-app-border">
                    {/* Promedio */}
                    <div className="flex-center flex-col md:min-w-[160px] lg:w-1/3">
                        <span className="text-5xl font-semibold text-app-green">{product.rating}</span>
                        <div className="flex items-center gap-0.5 mt-2 mb-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <StarIcon key={s} className={`size-4 ${s <= Math.round(product.rating) ? "text-app-warning fill-app-warning" : "text-app-border"}`} />
                            ))}
                        </div>
                        <span className="text-sm text-zinc-600">{product.reviewCount} reseñas</span>
                    </div>

                    {/* Barras de desglose */}
                    <div className="flex-1 space-y-2">
                        {breakdown.map((count, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-sm text-zinc-600 w-8 text-right">{5 - i} ★</span>
                                <div className="flex-1 h-2.5 bg-app-border rounded-full overflow-hidden">
                                    <div className="h-full bg-app-warning rounded-full transition-all duration-500" style={{ width: `${(count / maxCount) * 100}%` }} />
                                </div>
                                <span className="text-xs text-zinc-600 w-6">{count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reseñas individuales */}
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="flex gap-4">
                            <div className="size-10 rounded-full bg-app-green/10 text-app-green flex-center shrink-0 text-sm font-semibold">
                                {review.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center flex-wrap gap-2 mb-1">
                                    <span className="text-sm font-semibold text-app-text">{review.name}</span>
                                    <span className="text-xs text-zinc-600">·</span>
                                    <span className="text-xs text-zinc-600">{review.date}</span>
                                </div>
                                <div className="flex items-center gap-0.5 mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <StarIcon key={s} className={`size-3.5 ${s <= review.rating ? "text-app-warning fill-app-warning" : "text-app-border"}`} />
                                    ))}
                                </div>
                                <p className="text-sm text-zinc-600 leading-relaxed">{review.comment}</p>
                                <button className="mt-2 flex items-center gap-1.5 text-xs text-zinc-600 hover:text-app-green transition-colors">
                                    <ThumbsUpIcon className="size-3.5" /> Útil ({review.helpful})
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}