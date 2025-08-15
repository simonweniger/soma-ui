import { SomaMeter } from "@/registry/default/ui/meter"

export default function MeterReusable() {
  return <SomaMeter className="w-3/5" label="Storage space" value={80} />
}
