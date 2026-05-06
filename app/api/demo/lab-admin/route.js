import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    metrics: [
      { label: "Total Bookings", value: "1,248", trend: "+8.3%" },
      { label: "Pending Reports", value: "37", trend: "-12.1%" },
      { label: "Collection SLA", value: "96.4%", trend: "+2.0 pts" },
      { label: "Revenue Today", value: "Rs 2.14L", trend: "+6.8%" },
    ],
    queue: [
      { patient: "Rohit M", test: "CBC + LFT", status: "In Processing", eta: "34m" },
      { patient: "Nisha K", test: "Thyroid Panel", status: "Collection Done", eta: "1h 10m" },
      { patient: "Aman S", test: "Executive Profile", status: "Report Review", eta: "22m" },
      { patient: "Farah P", test: "HbA1c", status: "Dispatch Pending", eta: "18m" },
    ],
    automations: [
      { name: "WhatsApp booking confirmation", runs: 412, success: "99.2%" },
      { name: "Auto report dispatch", runs: 389, success: "97.8%" },
      { name: "Escalation to support desk", runs: 36, success: "100%" },
    ],
  });
}
