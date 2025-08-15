import { SomaProgressBar } from "@/registry/new-york/ui/progress"

export default function ProgressReusable() {
  return <SomaProgressBar className="w-3/5" label="Loading…" value={80} />
}
