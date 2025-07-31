import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p.id} className="border p-4 rounded shadow bg-white dark:bg-gray-700">
          <h2 className="font-bold text-lg mb-2">{p.title}</h2>
          <p className="text-sm">${p.price}</p>
        </div>
      ))}
    </main>
  );
}