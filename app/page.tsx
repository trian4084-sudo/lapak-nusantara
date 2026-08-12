"use client";

import { useState } from "react";
import { TABS } from "@/components/BottomNav";

// IMPORTANT: this route must be protected server-side (middleware or
// server component check) verifying profiles.membership_type = 'SuperAdmin'
// via the authenticated session — client-side checks alone are not secure.
// Every mutating action below should call a server action / API route that
// re-verifies the role and writes a row to `admin_audit_log`.

export default function SuperAdminDashboard() {
  const [flags, setFlags] = useState<Record<string, boolean>>(
    Object.fromEntries(TABS.map((t) => [t.key, true]))
  );
  const [overrideTarget, setOverrideTarget] = useState("");
  const [overrideNote, setOverrideNote] = useState("");
  const [reversalTarget, setReversalTarget] = useState("");
  const [reversalAmount, setReversalAmount] = useState("");
  const [log, setLog] = useState<string[]>([]);

  function toggleFlag(key: string) {
    setFlags((f) => ({ ...f, [key]: !f[key] }));
    setLog((l) => [
      `Kill-switch "${key}" diubah menjadi ${!flags[key] ? "AKTIF" : "NONAKTIF"}`,
      ...l,
    ]);
    // TODO: persist to `feature_flags` table + insert admin_audit_log row.
  }

  function submitOverride(e: React.FormEvent) {
    e.preventDefault();
    if (!overrideTarget) return;
    setLog((l) => [
      `Balance override diajukan untuk profil ${overrideTarget} — catatan: ${overrideNote || "-"}`,
      ...l,
    ]);
    setOverrideTarget("");
    setOverrideNote("");
    // TODO: call server action to zero/adjust wallet_balance for the target
    // profile and write admin_audit_log (action='balance_override').
  }

  function submitReversal(e: React.FormEvent) {
    e.preventDefault();
    if (!reversalTarget || !reversalAmount) return;
    setLog((l) => [
      `P2P reversal diajukan: Rp${reversalAmount} dikembalikan ke ${reversalTarget}`,
      ...l,
    ]);
    setReversalTarget("");
    setReversalAmount("");
    // TODO: call server action wrapping both debit/credit in a single
    // Postgres transaction, respecting the wallet_balance CHECK constraints,
    // and write admin_audit_log (action='p2p_reversal').
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-gold text-xl font-semibold">SuperAdmin — Dashboard Kontrol Tertinggi</h1>

      {/* 4-toggle multi kill-switch (5 tabs available; spec calls for 4-toggle
          panel — Artikel Motivasi is typically left outside the kill-switch
          since it carries no balance/mutation risk; adjust as needed). */}
      <section>
        <h2 className="text-sm text-gray-400 mb-2">Multi Kill-Switch per Tab</h2>
        <div className="grid grid-cols-2 gap-3">
          {TABS.filter((t) => t.key !== "artikel_motivasi").map((t) => (
            <button
              key={t.key}
              onClick={() => toggleFlag(t.key)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 border ${
                flags[t.key]
                  ? "border-neon/40 bg-base-800"
                  : "border-red-500/40 bg-red-950/30"
              }`}
            >
              <span className="text-sm">
                {t.icon} {t.label}
              </span>
              <span className={`text-xs font-semibold ${flags[t.key] ? "text-neon" : "text-red-400"}`}>
                {flags[t.key] ? "AKTIF" : "MATI"}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Manual balance override */}
      <section>
        <h2 className="text-sm text-gray-400 mb-2">Manual Balance Override</h2>
        <form onSubmit={submitOverride} className="bg-base-800 border border-gold/10 rounded-xl p-4 space-y-2">
          <input
            placeholder="ID / No. WhatsApp profil target"
            value={overrideTarget}
            onChange={(e) => setOverrideTarget(e.target.value)}
            className="w-full bg-base-700 rounded-lg px-3 py-2 text-sm"
          />
          <input
            placeholder="Catatan internal (opsional)"
            value={overrideNote}
            onChange={(e) => setOverrideNote(e.target.value)}
            className="w-full bg-base-700 rounded-lg px-3 py-2 text-sm"
          />
          <button type="submit" className="bg-gold text-black text-sm font-semibold rounded-lg px-4 py-2">
            Kosongkan Saldo (Background Process)
          </button>
        </form>
      </section>

      {/* P2P reversal / chargeback */}
      <section>
        <h2 className="text-sm text-gray-400 mb-2">P2P Transaction Reversal (Chargeback)</h2>
        <form onSubmit={submitReversal} className="bg-base-800 border border-gold/10 rounded-xl p-4 space-y-2">
          <input
            placeholder="ID / No. WhatsApp penerima yang salah kirim"
            value={reversalTarget}
            onChange={(e) => setReversalTarget(e.target.value)}
            className="w-full bg-base-700 rounded-lg px-3 py-2 text-sm"
          />
          <input
            placeholder="Nominal (Rp)"
            inputMode="numeric"
            value={reversalAmount}
            onChange={(e) => setReversalAmount(e.target.value)}
            className="w-full bg-base-700 rounded-lg px-3 py-2 text-sm"
          />
          <button type="submit" className="bg-neon text-black text-sm font-semibold rounded-lg px-4 py-2">
            Proses Pembalikan Dana
          </button>
        </form>
      </section>

      {/* Audit trail (client-side echo only; source of truth is admin_audit_log) */}
      <section>
        <h2 className="text-sm text-gray-400 mb-2">Aktivitas Terbaru</h2>
        <ul className="text-xs text-gray-500 space-y-1">
          {log.map((entry, i) => (
            <li key={i}>• {entry}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
