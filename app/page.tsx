"use client";

import React, { useState, useEffect } from "react";

// DIKUNCI MATI MASTER RECOVERY PROYEK V43 - 5.83 KB VIP MOBILE EDITION
export default function Page() {
  // 1. STATE MANAGEMENT UTAMA (SINKRONISASI TOTAL Rp0)
  const [namaPlatform, setNamaPlatform] = useState("Lapak Nusantara");
  const [bahasa, setBahasa] = useState("id");
  const [tabAktif, setTabAktif] = useState(1);
  const [kecamatan, setKecamatan] = useState("Dayeuhkolot");
  const [saldo, setSaldo] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [reversalAmount, setReversalAmount] = useState("");
  const [overrideAmount, setOverrideAmount] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chats, setChats] = useState([
    { id: 1, nama: "Warga_Baleendah", teks: "Kopina Kang, mumpung nuju seger sateuacan magrib!" },
    { id: 2, nama: "Driver_Dayeuhkolot", teks: "Gaskeun ojol kecamatan parantos ONLINE sip 1." }
  ]);
  const [stories, setStories] = useState([
    { id: 1, nama: "Kreator_Sunda", teks: "Alhamdulillah rarakitan platform modal Rp0 parantos bade live!", saweran: 0, reports: 0 }
  ]);

  // 2. KAMUS MULTI-BAHASA (PENTA-LANGUAGE SYSTEM ZERO-REFRESH)
  const kamus = {
    id: { selamat: "Selamat Datang di", lapak: "Lapak Warga", konter: "Konter Digital", ojol: "Ojol & Kargo", obrolan: "Live Chat", berita: "Berita Warga", premium: "Member Emas", sundul: "Sundul Lapak", isi: "Isi Saldo", kirim: "Kirim Saldo" },
    su: { selamat: "Wilujeng Sumping di", lapak: "Lapak Warga", konter: "Konter Digital", ojol: "Ojol & Kargo", obrolan: "Obrolan Live", berita: "Warta Warga", premium: "Anggota Emas", sundul: "Sundul Lapak", isi: "Eusian Saldo", kirim: "Kintun Saldo" },
    zh: { selamat: "欢迎来到", lapak: "市民集市", konter: "数字柜台", ojol: "叫车货运", obrolan: "实时聊天", berita: "市民新闻", premium: "黄金会员", sundul: "置顶广告", isi: "充值余额", kirim: "转账余额" },
    en: { selamat: "Welcome to", lapak: "Citizen Market", konter: "Digital Hub", ojol: "Ride & Cargo", obrolan: "Live Chat", berita: "Local News", premium: "Gold Member", sundul: "Push Ad", isi: "Topup Balance", kirim: "Transfer P2P" },
    jv: { selamat: "Sugeng Rawuh teng", lapak: "Lapak Warga", konter: "Konter Digital", ojol: "Ojol & Kargo", obrolan: "Jagongan Live", berita: "Kababar Warga", premium: "Anggota Emas", sundul: "Sundul Lapak", isi: "Isi Saldo", kirim: "Kirim Saldo" }
  };

  const t = kamus[bahasa] || kamus.id;

  // 3. FUNGSI SAKELAR BENTENG ANTI-HOAKS & SENSOR SIBER POLICY
  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    let teksBersih = chatInput;
    const kataKasar = ["anjing", "judi", "slot", "gacor", "politik", "kampanye", "caleg"];
    kataKasar.forEach((kata) => {
      const regex = new RegExp(kata, "gi");
      teksBersih = teksBersih.replace(regex, "****");
    });
    setChats([...chats, { id: Date.now(), nama: "Warga_Lokal", teks: teksBersih }]);
    setChatInput("");
  };

  const handleReport = (id) => {
    setStories(stories.map(s => s.id === id ? { ...s, reports: s.reports + 1 } : s).filter(s => s.reports < 3));
  };

  const handleSawer = (id) => {
    setStories(stories.map(s => s.id === id ? { ...s, saweran: s.saweran + 2000 } : s));
    setSaldo(prev => prev + 400); // 20% Pajak jajan bakso Admin (Rp400 masuk kas Akang)
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-amber-500 font-sans p-4 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      
      {/* HEADER UTAMA & STICKY GLOBAL RUNNING TEXT */}
      <header className="border-b border-amber-500/30 pb-2 mb-4">
        <div className="bg-amber-500 text-black text-xs font-bold py-1 px-4 overflow-hidden h-[30px] flex items-center rounded mb-2">
          <div className="animate-marquee whitespace-nowrap">
            📢 PROMO CORET: Sundul Lapak UMKM hanya Rp2.000 (Diskon 80%)! • Upgrade Member Premium hanya Rp29.000/bulan! • Iuran Ngojek WA Bulan Awal GRATIS Rp0! • Selamat Datang di Koridor Ekonomi Digital Bandung Raya!
          </div>
        </div>
        
        <div className="flex justify-between items-center px-1">
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">{namaPlatform}</h1>
            <p className="text-[10px] text-neutral-400">{t.selamat} Kec. {kecamatan}</p>
          </div>
          <div className="flex gap-2">
            <select value={bahasa} onChange={(e) => setBahasa(e.target.value)} className="bg-neutral-900 border border-amber-500 text-amber-500 text-xs rounded p-1">
              <option value="id">🇮🇩 IND</option>
              <option value="su">📐 SUND</option>
              <option value="zh">🇨🇳 中文</option>
              <option value="en">🇺🇸 ENG</option>
              <option value="jv">🌾 JOWO</option>
            </select>
          </div>
        </div>
      </header>

      {/* DOMPET DIGITAL INTERFACES & HOLDING LIMIT Rp10.000.000 BANK INDONESIA */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/40 p-4 rounded-xl mb-4 shadow-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Dompet Warga {isPremium && "👑"}</span>
          <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">Max Holding: Rp10JT BI</span>
        </div>
        <div className="text-3xl font-black text-white tracking-tight">Rp {saldo.toLocaleString("id-ID")}</div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <button onClick={() => setSaldo(prev => Math.min(prev + 50000, 10000000))} className="bg-amber-500 text-black font-bold text-xs py-2 rounded-lg hover:bg-amber-400">{t.isi}</button>
          <button onClick={() => setSaldo(prev => prev >= 10000 ? prev - 10000 : prev)} className="bg-neutral-900 border border-amber-500 text-amber-500 font-bold text-xs py-2 rounded-lg">{t.kirim} Rp0</button>
          <button onClick={() => setIsPremium(!isPremium)} className="bg-neutral-900 border border-amber-500/30 text-white font-bold text-xs py-2 rounded-lg">{isPremium ? "VIP Aktif" : "Upgrade VIP"}</button>
        </div>
      </section>

      {/* KONTEN UTAMA MULTI-TAB EMBEDDED SYSTEM */}
      <main className="flex-grow mb-4 bg-neutral-900/40 border border-neutral-800 rounded-xl p-3 min-h-[300px]">
        {tabAktif === 1 && (
          <div>
            <h2 className="text-sm font-bold text-white mb-2">🛒 {t.lapak} (11 Kategori UMKM COD)</h2>
            <div className="grid grid-cols-2 gap-2 text-xs text-center text-neutral-300">
              <div className="bg-neutral-900 p-2 rounded border border-neutral-800">🚗 Otomotif (Barter)</div>
              <div className="bg-neutral-900 p-2 rounded border border-neutral-800">🍔 Kuliner Saji</div>
              <div className="bg-neutral-900 p-2 rounded border border-neutral-800">👕 Fashion Lokal</div>
              <div className="bg-neutral-900 p-2 rounded border border-neutral-800">🛠️ Jasa Servis</div>
            </div>
            <button onClick={() => setSaldo(prev => prev >= 2000 ? prev - 2000 : prev)} className="w-w-full bg-amber-500 text-black font-bold text-xs py-2 rounded mt-3 block w-full">🚀 {t.sundul} (Promo Coret Rp2.000)</button>
          </div>
        )}

        {tabAktif === 2 && (
          <div>
            <h2 className="text-sm font-bold text-white mb-2">📱 {t.konter} (VIP Mobile Hub API Gateway)</h2>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-white">
              <div className="bg-neutral-900 p-2 rounded border border-amber-500/20">⚡ PLN Token</div>
              <div className="bg-neutral-900 p-2 rounded border border-amber-500/20">📞 Pulsa All Op</div>
              <div className="bg-neutral-900 p-2 rounded border border-amber-500/20">💳 GoPay Driver</div>
            </div>
            <p className="text-[10px] text-neutral-400 mt-2 text-center">Margin keuntungan diatur penuh otomatis di sirkuit database admin.</p>
          </div>
        )}

        {tabAktif === 3 && (
          <div>
            <h2 className="text-sm font-bold text-white mb-2">🏍️ {t.ojol} (Direktori WA Kecamatan Gratis)</h2>
            <div className="bg-neutral-900 p-3 rounded border border-neutral-800 text-xs">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-2">
                <span>🟢 Driver_Baleendah_01</span>
                <span className="text-emerald-500 font-bold">[ONLINE]</span>
              </div>
              <p className="text-[10px] text-neutral-400">Hubungi langsung via WhatsApp tanpa potongan tarif aplikasi korporasi 20%.</p>
            </div>
          </div>
        )}

        {tabAktif === 4 && (
          <div>
            <h2 className="text-sm font-bold text-white mb-2">💬 {t.obrolan} (Polisi Siber AI Active)</h2>
            <div className="h-[120px] overflow-y-auto text-xs space-y-1 mb-2 bg-black/40 p-2 rounded border border-neutral-800">
              {chats.map(c => (
                <div key={c.id} className="text-neutral-300"><span className="text-amber-400 font-bold">@{c.nama}:</span> {c.teks}</div>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Ketik pesan warga..." className="bg-neutral-900 border border-neutral-800 rounded p-1 text-xs text-white flex-grow focus:outline-none focus:border-amber-500" />
              <button onClick={handleSendChat} className="bg-amber-500 text-black text-xs font-bold px-3 rounded">Kirim</button>
            </div>
          </div>
        )}

        {tabAktif === 5 && (
          <div>
            <h2 className="text-sm font-bold text-white mb-2">📰 {t.berita} & Komunitas Anti-Hoaks</h2>
            <div className="space-y-2">
