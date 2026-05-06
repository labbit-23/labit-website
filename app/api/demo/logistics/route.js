import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    metrics: [
      { label: "Field Exec Online", value: "31", trend: "+4" },
      { label: "Route Efficiency", value: "93.1%", trend: "+3.1 pts" },
      { label: "Avg Visit Completion", value: "27m", trend: "-4m" },
      { label: "No-show Recovery", value: "71%", trend: "+9%" },
    ],
    routes: [
      { exec: "Ravi", zone: "South", stops: 8, status: "On Route", completion: "62%" },
      { exec: "Megha", zone: "East", stops: 6, status: "Collecting", completion: "51%" },
      { exec: "Harish", zone: "North", stops: 9, status: "On Route", completion: "73%" },
      { exec: "Divya", zone: "West", stops: 7, status: "Break", completion: "44%" },
    ],
    events: [
      { time: "10:04", event: "Visit #V-8812 marked complete", priority: "normal" },
      { time: "10:12", event: "Patient reschedule accepted", priority: "normal" },
      { time: "10:19", event: "Traffic reroute suggestion applied", priority: "normal" },
      { time: "10:27", event: "Cold sample nearing hold-time limit", priority: "high" },
    ],
  });
}
