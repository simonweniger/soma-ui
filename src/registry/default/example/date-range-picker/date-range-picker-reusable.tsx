import { SomaDateRangePicker } from "@/registry/default/ui/date-picker"

export default function DateRangePickerReusable() {
  return (
    <SomaDateRangePicker
      className="min-w-[300px]"
      isRequired
      label="Trip dates"
    />
  )
}
