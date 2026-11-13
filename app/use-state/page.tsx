'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import { Noto_Sans_Lao } from 'next/font/google';

const notoSansLao = Noto_Sans_Lao({
  subsets: ['lao'],
  weight: ['400', '500', '700'],
});

export default function AllInOnePage() {
  // 1. Like State
  const [likes, setLikes] = useState(0);

  // 2. Countdown State & Effect
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count <= 0) return;
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  // Router Hooks
  const pathname = usePathname();
  const params = useParams();
  const id = (params?.id as string) || 'sample-id-123';

  return (
    <div
      className={notoSansLao.className}
      style={{
        fontFamily: `${notoSansLao.style.fontFamily}, 'Phetsarath OT', sans-serif`,
        background: '#f9f9f9',
        color: '#000',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🧩 ລວມຕົວຢ່າງ React Hooks</h1>

        {/* ປຸ່ມ Like */}
        <section style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}>
          <h3>ປຸ່ມ Like (useState)</h3>
          <button
            onClick={() => setLikes(likes + 1)}
            style={{ padding: '6px 14px', cursor: 'pointer', borderRadius: '6px', border: '1px solid #999', fontFamily: 'inherit', marginTop: '8px' }}
          >
            ❤️ Like ({likes})
          </button>
        </section>

        {/* ນັບຖອຍຫຼັງ */}
        <section style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}>
          <h3>ນັບຖອຍຫຼັງຈາກ 10 ຫາ 0 (useEffect + Cleanup)</h3>
          <p style={{ margin: '8px 0' }}>ເວລາເຫຼືອ: <strong>{count}</strong> ວິນາທີ</p>
          <button
            onClick={() => setCount(10)}
            style={{ padding: '6px 14px', cursor: 'pointer', borderRadius: '6px', border: '1px solid #999', fontFamily: 'inherit' }}
          >
            ຣີເຊັດເວລາ
          </button>
        </section>

        {/* Navbar */}
        <section style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}>
          <h3>Navbar ປັດຈຸບັນ (usePathname)</h3>
          <p style={{ margin: '8px 0' }}>Pathname ປັດຈຸບັນ: <code>{pathname}</code></p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link href="/" style={{ color: pathname === '/' ? 'red' : '#3b82f6', fontWeight: pathname === '/' ? 'bold' : 'normal' }}>
              ໜ້າທຳອິດ
            </Link>
            <Link href="/products" style={{ color: pathname === '/products' ? 'red' : '#3b82f6', fontWeight: pathname === '/products' ? 'bold' : 'normal' }}>
              ສິນຄ້າ
            </Link>
          </div>
        </section>

        
      </div>
    </div>
  );
}