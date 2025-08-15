import { SomaDateRangePicker } from "@/registry/new-york/ui/date-picker"

export default function DateRangePickerReusable() {
  return (
    <SomaDateRangePicker
      className="min-w-[300px]"
      isRequired
      label="Trip dates"
    />
  )
}
