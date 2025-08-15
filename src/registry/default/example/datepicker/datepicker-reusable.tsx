import { SomaDatePicker } from "@/registry/default/ui/date-picker"

export default function DatepickerReusable() {
  return (
    <SomaDatePicker className="min-w-[200px]" label="Event date" isRequired />
  )
}
