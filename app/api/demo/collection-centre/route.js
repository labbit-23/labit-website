import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    metrics: [
      { label: "Pickups Today", value: "86", trend: "+11%" },
      { label: "On-time Handover", value: "98.7%", trend: "+1.9 pts" },
      { label: "Pending Center Requests", value: "9", trend: "-3" },
      { label: "Avg Processing Time", value: "14m", trend: "-2m" },
    ],
    pickups: [
      { center: "JP Nagar", code: "CC-108", rider: "Arjun", status: "In Transit", eta: "12m" },
      { center: "BTM", code: "CC-092", rider: "Sandeep", status: "Ready", eta: "Queued" },
      { center: "Whitefield", code: "CC-144", rider: "Nikita", status: "Picked", eta: "34m" },
      { center: "HSR", code: "CC-051", rider: "Prakash", status: "In Transit", eta: "19m" },
    ],
    notifications: [
      "Cold-chain integrity checks passed for all outbound samples.",
      "Two delayed pickups auto-escalated to logistics control.",
      "Center CC-092 requested extra barcode consumables.",
    ],
  });
}
